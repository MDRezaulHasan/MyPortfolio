import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Button, Form } from "react-bootstrap";
import Message from "../layout/Message";
import Loader from "../layout/Loader";
import axios from "axios";
import { useHistory } from "react-router-dom";
import {
  getProjectDetails,
  updateProject,
} from "../../redux/actions/projectAction";
import FormContainer from "../layout/FormContainer";
import { PROJECT_UPDATE_REST } from "../../redux/constans/projectConstens";

export default function ProjectEditScreen({ match }) {
  const projectIdFromUrl = match.params.id;

  const [title, setTitle] = useState("");
  const [image, setImage] = useState("");
  const [gitHub, setGitHub] = useState("");
  const [description, setDescription] = useState("");
  const [liveUrl, setLiveUrl] = useState("");
  // const [file, setFile] = useState(null)
  const [uploading, setUploading] = useState(false); // same with redux loading
  const dispatch = useDispatch();

  const projectDetail = useSelector((state) => state.projectDetail);
  const { project, error, loading } = projectDetail;

  console.log("project: ", project);
  const projectUpdate = useSelector((state) => state.projectUpdate);
  const { updateSuccess: succsesUpdate } = projectUpdate;

  // console.log("usres: ", users);

  const history = useHistory();

  useEffect(() => {
    if (succsesUpdate) {
      dispatch({ type: PROJECT_UPDATE_REST });
      history.push("/projectlist");
    }
    if (project._id !== projectIdFromUrl) {
      dispatch(getProjectDetails(projectIdFromUrl));
    } else {
      setTitle(project.title);
      setImage(project.image);
      setGitHub(project.gitHub);
      setLiveUrl(project.liveUrl);
      setDescription(project.description);
    }
  }, [dispatch, projectIdFromUrl, project, succsesUpdate, history]);

  const fileHandler = async (e) => {
    const file = e.target.files[0]; //sigle file
    const formData = new FormData();
    formData.append("image", file);
    setUploading(true);

    try {
      const config = {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      };
      const res = await axios.post("/api/upload", formData, config);
      console.log("resImg: ", res.data);

      setImage(res.data);
      setUploading(false);
    } catch (error) {
      console.log(error.message);
      setUploading(false);
    }
  };

  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(
      updateProject({
        _id: projectIdFromUrl,
        title,
        image,
        gitHub,
        description,
        liveUrl,
      })
    );

    // console.log("img: ", image);
  };

  return (
    <>
      <h1>Project Panel</h1>
      {/* <Link to="/admin/productlist">Go back</Link> */}
      <FormContainer>
        {error && <Message variant="danger">{error}</Message>}
        {loading && <Loader></Loader>}
        <Form onSubmit={submitHandler}>
          <Form.Group controlId="title">
            <Form.Label>Title</Form.Label>
            <Form.Control
              type="text"
              value={title || ""}
              onChange={(e) => setTitle(e.target.value)}
            />
          </Form.Group>

          <Form.Group controlId="github">
            <Form.Label>Github</Form.Label>
            <Form.Control
              type="text"
              value={gitHub || ""}
              onChange={(e) => {
                setGitHub(e.target.value);
              }}
            />
          </Form.Group>
          <Form.Group controlId="liveUrl">
            <Form.Label>Live Url</Form.Label>
            <Form.Control
              type="text"
              value={liveUrl || ""}
              onChange={(e) => {
                setLiveUrl(e.target.value);
              }}
            />
          </Form.Group>
          <Form.Group controlId="description">
            <Form.Label>description</Form.Label>
            <Form.Control
              type="text"
              value={description || ""}
              onChange={(e) => {
                setDescription(e.target.value);
              }}
            />
          </Form.Group>

          <Form.Group>
            <Form.Label>Image</Form.Label>
            <Form.Control
              tyep="text"
              value={image || ""}
              onChange={(e) => {
                setImage(e.target.value);
              }}
            ></Form.Control>
            <Form.File
              id="image-file"
              label="choose File"
              custom
              onChange={fileHandler}
            ></Form.File>
          </Form.Group>

          {uploading && <Loader></Loader>}

          <Button variant="primary" type="submit">
            update
          </Button>
        </Form>
      </FormContainer>
    </>
  );
}

// <Form.Group>
//   <Form.File id="exampleFormControlFile1" label="Example file input" />
// </Form.Group>;
