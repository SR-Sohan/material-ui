import React, { useEffect, useState } from 'react';
import MenuArea from '../Menu/MenuArea';
import Post from '../Post/Post';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';


const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
    },
    paper: {
      padding: theme.spacing(2),
      textAlign: 'center',
      color: theme.palette.text.secondary,
    },
  }));

const Home = () => {

    const [posts,setPost] = useState([])
    useEffect(()=> {
        const url =`https://jsonplaceholder.typicode.com/posts`;
        fetch(url)
        .then(res => res.json())
        .then(data => setPost(data))
    },[])
    const classes = useStyles();
    return (
        <div>
            <MenuArea></MenuArea>
            <div className={classes.root}>
                <Grid container spacing={3}>
                    {
                    posts.map(post => <Post key={post.id} post={post}></Post> )
                    }
                </Grid>
            </div>
        </div>
    );
};

export default Home;