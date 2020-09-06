import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import { Link } from 'react-router-dom';
const useStyles = makeStyles({
    root: {
      maxWidth: 345,
      margin: '20px 15px',
      backgroundColor: '#15C39A',
      height: '350px',
      textAlign: 'center'

    },
    media: {
      height: 140,
    },
    button: {
        margin: '20px 0'
    }
  });

const Post = (props) => {
    const {title,body,id} = props.post
    const classes = useStyles();

    
    return (
        <Grid item xs={3}> 
            <Card className={classes.root}>
                <CardActionArea>
                <CardContent>
                    <Typography gutterBottom variant="h5" component="h2">
                    {title}
                    </Typography>
                    <Typography variant="body2" color="textSecondary" component="p">
                    {body}
                    </Typography>
                </CardContent>
                </CardActionArea>
                <Link style={{textDecoration: 'none'}} to={`/comments/${id}`}> 
                    <Button className={classes.button} variant="contained" color="secondary">
                        Read More..
                    </Button>
                </Link>
            </Card>
        </Grid>
    );
};

export default Post;