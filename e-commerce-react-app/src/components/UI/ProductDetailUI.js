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

import Button from "@material-ui/core/Button";

import { useState, useRef } from "react";

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 300,
    margin: "0 auto",
  },
  media: {
    height: 80,
    paddingTop: "50.25%",
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

const ProductDetailUI = ({ item, backToHome, addItem }) => {
  const classes = useStyles();

  const [expanded, setExpanded] = useState(false);

  const [isFavorited, setIsFavorited] = useState(false);

  const { title, description, image } = item;

  const favoriteButton = useRef();

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  const favoriteItemHandler = () => {
    if (!isFavorited) {
      setIsFavorited(true);
      favoriteButton.current.style.color = "red";
      return;
    }
    favoriteButton.current.style.color = "rgba(0,0,0,0.54)";
    setIsFavorited(false);
  };

  return (
    <Card className={classes.root}>
      <CardHeader title="Sales Manager" subheader="Wednesday June, 2, 2021" />
      <CardMedia className={classes.media} image={image} />
      <CardContent>
        <Typography variant="body2" color="textSecondary" component="p">
          {title}
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <IconButton
          aria-label="add to favorites"
          ref={favoriteButton}
          onClick={favoriteItemHandler}
        >
          <FavoriteIcon />
        </IconButton>
        <Button color="primary" onClick={addItem.bind(item)}>
          Add to cart
        </Button>

        <Button color="secondary" onClick={backToHome}>
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

          <Typography paragraph>{description}</Typography>
        </CardContent>
      </Collapse>
    </Card>
  );
};

export default ProductDetailUI;
