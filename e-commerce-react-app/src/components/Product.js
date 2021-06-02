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
    background: "rgb(136,64,86)",

    background:
      "linear-gradient(133deg, rgba(136,64,86,1) 4%, rgba(195,157,130,1) 53%, rgba(178,168,193,1) 92%)",
    border: 1,
    maxWidth: 400,
    margin: "1rem",
    padding: "1rem",
  },
  media: {
    height: 340,
  },
});

function Product(props) {
  const classes = useStyles();

  return (
    <Card className={`${classes.root}`}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image={props.item.image}
          title="Contemplative Reptile"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            {props.item.title}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            {props.item.description}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button variant="contained" color="primary">
          Look Closer
        </Button>
      </CardActions>
    </Card>
  );
}

export default Product;
