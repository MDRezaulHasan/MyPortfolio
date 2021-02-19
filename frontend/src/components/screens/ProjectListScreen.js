import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Table, Button, Row, Col } from "react-bootstrap";
import { Link, useHistory } from "react-router-dom";

import Message from "../layout/Message";
import Loader from "../layout/Loader";
import {
  getProjectList,
  deleteProject,
  createProject,
} from "../../redux/actions/projectAction";

export default function ProjectListScreen({ match }) {
  const history = useHistory();
  const dispatch = useDispatch();
  // const deleteIdFromUrl = match.params.id;
  const listProjects = useSelector((state) => state.listProjects);
  const { projects, loading, error } = listProjects;

  const projectDelete = useSelector((state) => state.projectDelete);
  const { success: successDelete } = projectDelete;

  const projectCreate = useSelector((state) => state.projectCreate);
  const {
    loading: loadingCreate,
    error: errorCreate,
    success: successCreate,
    project: createdProject,
  } = projectCreate;

  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;

  useEffect(() => {
    if (!userInfo.name) {
      history.push("/login");
    }
    if (successCreate) {
      history.push("/project/" + createdProject.data._id + "/edit");
    } else {
      dispatch(getProjectList());
    }
  }, [
    dispatch,
    history,
    successCreate,
    successDelete,
    userInfo,
    createProject,
  ]);

  const deleteProj = (id) => {
    dispatch(deleteProject(id));
  };

  const createHandler = () => {
    dispatch(createProject());
  };

  return (
    <>
      <Row className="align-items-center">
        <Col>
          <h1>Projects</h1>
        </Col>
        {loading ? (
          <Loader></Loader>
        ) : error ? (
          <Message>{error}</Message>
        ) : (
          <Col className="text-right">
            <Button className="my-5" onClick={createHandler}>
              <i className="fas fa-plus"></i> Create project
            </Button>
          </Col>
        )}
      </Row>
      {loadingCreate && <Loader></Loader>}
      {errorCreate && <Message variant="danger">{errorCreate}</Message>}
      {loading ? (
        <Loader></Loader>
      ) : error ? (
        <Message>{error}</Message>
      ) : (
        <>
          <Table
            striped
            bordered
            hover
            responsive
            className="table-sm"
            variant="dark"
          >
            <thead>
              <tr>
                <th>Project ID</th>
                <th> Title</th>
                <th>GitHub</th>
                <th>Live Url</th>
              </tr>
            </thead>
            <tbody>
              {projects.map((project) => (
                <tr key={project._id}>
                  <td>{project._id}</td>
                  <td>{project.title}</td>
                  <td>{project.gitHub}</td>
                  <td> {project.liveUrl}</td>

                  <td>
                    <Link
                      to={"/project/" + project._id + "/edit"}
                      style={{ color: "white" }}
                    >
                      <i className="fas fa-edit"></i>
                    </Link>
                  </td>
                  <td>
                    <Button
                      type="btn"
                      variant="danger"
                      onClick={() => {
                        deleteProj(project._id);
                        alert("Are sure to delete " + project.title + "?");
                      }}
                    >
                      <i className="fas fa-trash"></i>
                    </Button>
                  </td>
                </tr>
              ))}
            </tbody>
          </Table>
        </>
      )}
    </>
  );
}
