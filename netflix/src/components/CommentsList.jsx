import React, { useState, useEffect } from 'react';
import {ListGroup, Badge} from 'react-bootstrap'


const CommentsList = ({id})=>{
    
    const[comments,setComment]=useState([])

    useEffect(()=>{
        fetchComments()
    },[])
    const fetchComments = async (event) => {
        event.preventDefault()
        try {
            let response = await fetch("https://striveschool-api.herokuapp.com/api/comments/" + id, {
                method: "GET",
                headers: {
                    "Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MWIwYWU1OTRjZmY1ZjAwMTU5MGJkYWYiLCJpYXQiOjE2Mzk2NjI1MjgsImV4cCI6MTY0MDg3MjEyOH0.M_W7mM03N1yeADR5Q0nbGPMaXiMh73U1VxH4uhVI160"
                }
            })
            let data = await response.json()
            setComment(data)
        } catch (error) {
            console.log(error)
        }
    }


   
        return (
        <>
            {comments > 0 && (
                <ListGroup>
                    {comments.map(comment => 
                    <ListGroup.Item><Badge bg="warning" text="dark">
                    {comment.rate}
                 </Badge> {comment.comment}</ListGroup.Item>)}
                    
              </ListGroup>
            )}
        </>);
   
}
 
export default CommentsList;