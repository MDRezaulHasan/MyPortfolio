import React from "react";
import { Card } from "react-bootstrap";
import { Link } from "react-router-dom";
import "../../App.css";
export default function Project({ project }) {
  return (
    <Card className="my-3, p-3 rounded">
      <Link to={"/project/" + project._id}>
        <Card.Img src={project.image} variant="top"></Card.Img>
      </Link>
      <Card.Body>
        <Link to={"/project/" + project._id}>
          <Card.Title as="div">{project.title}</Card.Title>
        </Link>
      </Card.Body>
    </Card>
  );
}
