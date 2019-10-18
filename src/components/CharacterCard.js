import React from "react";
import {
  Col,
   Card,
   CardImg,
   CardText,
   CardBody, 
   CardTitle
} from "reactstrap";

const CharacterCard = (props) => {
  return (
    <div>
      <Col>
     <Card className="character-card" outline color="warning">
        <CardImg top width="25%" src={props.image} alt="character" />
        <CardBody>
        <CardTitle>Name: {props.name}</CardTitle>
        <CardText>Status: {props.status}</CardText>
        <CardText>Species: {props.species}</CardText>
      </CardBody>
     </Card>
     </Col>
    </div>
  );
}

export default CharacterCard;
