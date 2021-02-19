import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { Row, Col, Image } from "react-bootstrap";
import Loader from "../layout/Loader";
import Message from "../layout/Message";
import { getProjectDetails } from "../../redux/actions/projectAction";
export default function ProjectScreen({ match }) {
  const projectId = match.params.id;
  const dispatch = useDispatch();
  const projectDetail = useSelector((state) => state.projectDetail);
  const { loading, error, project } = projectDetail;
  // console.log("project: ", project);
  useEffect(() => {
    dispatch(getProjectDetails(projectId));
  }, [match, dispatch, projectId]);

  return (
    <>
      <div className="goback" style={{ marginBottom: "10px" }}>
        <Link to="/">
          <h5>Go back</h5>
        </Link>
      </div>
      {loading ? (
        <Loader></Loader>
      ) : error ? (
        <Message variant="info">{error}</Message>
      ) : (
        <Row className="py-5 ">
          <Col md={8}>
            <Image src={project.image} alt="project_image" fluid></Image>
          </Col>

          <Col md={4} variant="flush">
            <h5 className="py-3">Title:</h5> {project.title}
            <h5 className="py-3">Desciption:</h5> {project.description}
            <Row className="py-5">
              <Col md={8}>
                <h4>
                  Github:{" "}
                  <a
                    rel="noopener noreferrer"
                    href={project.gitHub}
                    target="_blank"
                  >
                    <i className="fas fa-file-code"></i>
                  </a>
                </h4>
              </Col>
              <Col md={8}>
                <h4>
                  Live Demo:{" "}
                  <a
                    rel="noopener noreferrer"
                    href={project.liveUrl}
                    target="_blank"
                  >
                    <i className="far fa-eye"></i>
                  </a>{" "}
                </h4>
              </Col>
            </Row>
          </Col>
        </Row>
      )}
    </>
  );
}
