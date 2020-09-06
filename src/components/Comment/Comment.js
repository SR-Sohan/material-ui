import React, { useEffect, useState } from 'react';
import './Comment.css';
import Avatar from '@material-ui/core/Avatar';
import { makeStyles } from '@material-ui/core/styles';


const useStyles = makeStyles((theme) => ({
    root: {
      display: 'flex',
      '& > *': {
        margin: theme.spacing(1),
      },
    },
    small: {
      width: theme.spacing(3),
      height: theme.spacing(3),
    },
    large: {
      width: theme.spacing(7),
      height: theme.spacing(7),
    },
  }));
const Comment = (props) => {
    const {name,email,body,id} = props.comment;

    const [images,setImages] = useState({})
    useEffect( ()=> {
        const url = `https://jsonplaceholder.typicode.com/photos/${id}`;
        fetch(url)
        .then( res => res.json())
        .then( data => setImages(data))
    },[])
    const classes = useStyles();
    return (
        <div className='comment-body'>
            <div className="comment-img"> 
               <Avatar alt="Remy Sharp" src={images.thumbnailUrl} className={classes.large} />
            </div>
            <div className="comment-content"> 
                <h4>Name: {name}</h4>
                <p>Email: {email}</p>
                <p>Comment: {body}</p>
            </div>
        </div>
    );
};

export default Comment;