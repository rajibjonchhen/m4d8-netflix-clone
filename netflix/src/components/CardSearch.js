import { useState } from 'react'
import { Card, Button} from 'react-bootstrap'
import  Modal from 'react-bootstrap/Modal'
import AddComment from './AddComment'
import CommentsList from './CommentsList'
import './style.css'


const CardSearch=({movie})=>{
   
    const[ showPrice,setShowPrice ]=useState(null)
    const[ btnColor,setBtnColor ]=useState('primary')
    const[ isClicked,setIsClicked ]=useState(false)
    const[ cardClass,setCardClass ]=useState("px-1 py-4 m-0 border-0 w-100 bg-transparent")
    const[ showComments,setShowComments ]=useState(false)

    const commentsDisplay = () => {
     
            setShowPrice(null)
            setBtnColor('primary')
            setCardClass("px-1 py-4 mb-4 m-0 border-0 w-100 bg-transparent")
            setIsClicked(!isClicked)
        
    }

    // const showCommentsFun = (show) =>{
    //     setShowComments(show)
    // }
    
    const showCommentsFun = () => setShowComments(true)
    const hideCommentsFun = () => setShowComments(false)

   
        return (
            <Card className={cardClass} style={{maxWidth:"18rem"}}>
                <Card.Img onClick={showCommentsFun} className="img-poster align-self-center" variant="top" src={movie.Poster} />
                <div className="position-relative">
                    <Card.Body className="d-flex flex-column pb-0 pt-2 px-0 justify-content-between w-100 position-absolute">
                        {isClicked && <Card.Title className="mb-2 px-2"> <h6>{movie.Title}</h6> <h6>{movie.imdbID}</h6></Card.Title>}
                    </Card.Body>
                </div>
                        {showComments && (
                        <Modal show={true} onHide={hideCommentsFun}>
                                <Modal.Header closeButton>
                                    <Modal.Title>Comments of {movie.Title}</Modal.Title>
                                </Modal.Header>

                                <Modal.Body>
                                    <CommentsList id={movie.imdbId}/>
                                    <AddComment id={movie.imdbId}/>
                                </Modal.Body>

                                <Modal.Footer>
                                    <Button onClick={hideCommentsFun} variant="secondary">Close</Button>
                                </Modal.Footer>
                        </Modal>)}
            </Card>
        )
    
}

export default CardSearch