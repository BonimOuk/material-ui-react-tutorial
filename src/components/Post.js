import {
  Button,
  Card,
  CardActionArea,
  CardActions,
  CardContent,
  CardMedia,
  makeStyles,
  Typography,
} from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  card: {
    marginBottom: theme.spacing(5),
  },
  media: {
    height: 250,
    [theme.breakpoints.down('sm')]: {
      height: 150,
    },
  },
}));

function Post() {
  const classes = useStyles();

  return (
    <Card className={classes.card}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image='https://images.pexels.com/photos/1142948/pexels-photo-1142948.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500'
          title='My Post'
        />
        <CardContent>
          <Typography gutterBottom variant='h5'>
            My First Post
          </Typography>
          <Typography variant='body2'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero
            fugiat ducimus quibusdam, ut numquam commodi nesciunt at. Deserunt
            placeat libero iure eaque, aspernatur maxime ab nostrum! Maxime
            corporis impedit quidem?Lorem ipsum dolor sit amet consectetur
            adipisicing elit. Libero fugiat ducimus quibusdam, ut numquam
            commodi nesciunt at. Deserunt placeat libero iure eaque, aspernatur
            maxime ab nostrum! Maxime corporis impedit quidem? <br />
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero
            fugiat ducimus quibusdam, ut numquam commodi nesciunt at. Deserunt
            placeat libero iure eaque, aspernatur maxime ab nostrum! Maxime
            corporis impedit quidem?Lorem ipsum dolor sit amet consectetur
            adipisicing elit. Libero fugiat ducimus quibusdam, ut numquam
            commodi nesciunt at. Deserunt placeat libero iure eaque, aspernatur
            maxime ab nostrum! Maxime corporis impedit quidem?
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size='small' color='primary'>
          Share
        </Button>
        <Button size='small' color='primary'>
          Learn More
        </Button>
      </CardActions>
    </Card>
  );
}

export default Post;
