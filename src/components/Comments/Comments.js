import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import './Comments.css'
import Comment from '../Comment/Comment';
import MenuArea from '../Menu/MenuArea';

const Comments = () => {
    const {commentsId} = useParams();

    const [comments, setComments] =useState([])
    useEffect( ()=> {
        const url = `https://jsonplaceholder.typicode.com/posts/${commentsId}/comments`;
        fetch(url)
        .then(res => res.json())
        .then(data => setComments(data))
    },[])
    const [singlePost,setSinglePost] = useState({})
    useEffect( ()=> {
        const url = `https://jsonplaceholder.typicode.com/posts/${commentsId}`;
        fetch(url)
        .then( res => res.json())
        .then(data => setSinglePost(data))
    },[])
    return (
       <div> 
           <MenuArea></MenuArea>
            <div className='comments-area'>
                <div className="post"> 
                <h1>Title: {singlePost.title}</h1>
                <p>Body: {singlePost.body}</p>
                </div>
                <div className="comment"> 
                    <h2>Comments</h2>
                    {
                        comments.map(cm => <Comment key={cm.id} comment={cm}></Comment>)
                    }
                </div>
            </div>
       </div>
    );
};

export default Comments;