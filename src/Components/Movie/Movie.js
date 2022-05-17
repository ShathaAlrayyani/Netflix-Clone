import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { useState } from "react";
import Modal from '../ModalMovie/ModalMovie';

export default function MovieCard(props) {
    const [show, setShow] = useState(false);
    const [choosenCard,setChoosenCard] = useState();
    
  const handleShow = (recipe) => {
    setShow(true);
    setChoosenCard(recipe)
    
    }
      const handleClose = () => setShow(false);
    return (
      <>
        <Card style={{ width: "18rem" }}>
          <Card.Img variant="top" src={props.results.image} />
          <Card.Body>
            <Card.Title>{props.results.title}</Card.Title>
            <Card.Text>{props.results.summary}</Card.Text>
            <Card.Text>{props.results.readyInMinutes} Minutes</Card.Text>

            <Button
              variant="primary"
              onClick={() => {
                handleShow(props.recipe);
              }}
            >
              Show Details
            </Button>
          </Card.Body>
        </Card>
        {choosenCard &&
       
          <Modal
            show={show}
            handleClose={handleClose}
          choosenCard={choosenCard}
          // recipe={props.recipe}
          />
        }
        
      </>
    );
}

