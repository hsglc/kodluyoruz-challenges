import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles({
  root: {
    background:
      "rgb(136,64,86) linear-gradient(133deg, rgba(136,64,86,1) 4%, rgba(195,157,130,1) 53%, rgba(178,168,193,1) 92%)",

    border: 1,
    width: 280,
    height: 460,
    margin: ".6rem",
    padding: ".5rem",
  },
  media: {
    height: 180,
    width: 280,
  },
});

const ProductUI = ({image,title,description,changeHistory}) => {
  const classes = useStyles();

  return (
    <Card className={`${classes.root}`}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image={image}
          title="Contemplative Reptile"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            {title}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            {description}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button
          variant="contained"
          color="primary"
          onClick={changeHistory}
          style= {{
            margin:".2rem auto",
          }}
        >
          View
        </Button>
      </CardActions>
    </Card>
  );
};

export default ProductUI;
