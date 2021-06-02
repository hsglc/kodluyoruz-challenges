import { useLocation, useHistory } from "react-router-dom";
import { useEffect, useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import clsx from "clsx";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import CardActions from "@material-ui/core/CardActions";
import Collapse from "@material-ui/core/Collapse";

import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import { red } from "@material-ui/core/colors";
import FavoriteIcon from "@material-ui/icons/Favorite";

import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import Button from "@material-ui/core/Button";

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 345,
    margin: "5rem auto",
  },
  media: {
    height: 0,
    paddingTop: "56.25%", // 16:9
  },
  expand: {
    transform: "rotate(0deg)",
    marginLeft: "auto",
    transition: theme.transitions.create("transform", {
      duration: theme.transitions.duration.shortest,
    }),
  },
  expandOpen: {
    transform: "rotate(180deg)",
  },
  avatar: {
    backgroundColor: red[500],
  },
}));

function ProductDetail() {
  const location = useLocation();
  const history = useHistory();

  const classes = useStyles();
  const [expanded, setExpanded] = useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  const backHomeHandler = () => {
    history.push("/");
  };

  const [item, setItem] = useState();

  useEffect(() => {
    const fetchItem = async () => {
      const response = await fetch(
        `https://fakestoreapi.com/products${location.pathname}`
      );
      const data = await response.json();
      setItem(data);
    };
    fetchItem();
  }, [location]);

  const containerStyle = {
    background: "rgb(136,64,86)",
    background:
      "linear-gradient(133deg, rgba(136,64,86,1) 4%, rgba(195,157,130,1) 53%, rgba(178,168,193,1) 92%)",
    margin: "0 auto",
    padding: "3rem",
  };

  return (
    <div style={containerStyle}>
      {item && (
        <Card className={classes.root}>
          <CardHeader
            
            action={
              <IconButton aria-label="settings">
                <MoreVertIcon />
              </IconButton>
            }
            title="Sales Manager"
            subheader="Wednesday June, 2, 2021"
          />
          <CardMedia
            className={classes.media}
            image={item.image}
            
          />
          <CardContent>
            <Typography variant="body2" color="textSecondary" component="p">
              {item.title}
            </Typography>
          </CardContent>
          <CardActions disableSpacing>
            <IconButton aria-label="add to favorites">
              <FavoriteIcon />
            </IconButton>
            <Button color="primary">Add to cart</Button>
            <Button
              color="secondary"
              onClick={backHomeHandler}
            >
              Back to home
            </Button>
            <IconButton
              className={clsx(classes.expand, {
                [classes.expandOpen]: expanded,
              })}
              onClick={handleExpandClick}
              aria-expanded={expanded}
              aria-label="show more"
            >
              <ExpandMoreIcon />
            </IconButton>
          </CardActions>

          <Collapse in={expanded} timeout="auto" unmountOnExit>
            <CardContent>
              <Typography paragraph>Description:</Typography>

              <Typography paragraph>{item.description}</Typography>
            </CardContent>
          </Collapse>
        </Card>
      )}
    </div>
  );
}

export default ProductDetail;
