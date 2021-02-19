import {
  PROJECT_CREATE_REQUEST,
  PROJECT_CREATE_SUCCESS,
  PROJECT_CREATE_FAIL,
  PROJECT_CREATE__REST,
  PROJECT_UPDATE_REQUEST,
  PROJECT_UPDATE_SUCCESS,
  PROJECT_UPDATE_FAIL,
  PROJECT_LIST_REQUEST,
  PROJECT_LIST_SUCCESS,
  PROJECT_LIST_FAIL,
  PROJECT_DETAILS_REQUEST,
  PROJECT_DEATAILS_SUCCESS,
  PROJECT_DETAILS_FAIL,
  PROJECT_DELETE_REQUEST,
  PROJECT_DELETE_SUCCESS,
  PROJECT_DELETE_FAIL,
} from "../constans/projectConstens";

import axios from "axios";

export const getProjectList = () => async (dispatch) => {
  try {
    dispatch({
      type: PROJECT_LIST_REQUEST,
    });
    const response = await axios.get("/api/projects");
    dispatch({
      type: PROJECT_LIST_SUCCESS,
      payload: response.data.data,
    });
  } catch (error) {
    dispatch({
      type: PROJECT_LIST_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

export const getProjectDetails = (id) => async (dispatch) => {
  try {
    dispatch({
      type: PROJECT_DETAILS_REQUEST,
    });
    const response = await axios.get("/api/projects/" + id);
    // console.log("res: ", response)
    dispatch({
      type: PROJECT_DEATAILS_SUCCESS,
      payload: response.data.data,
    });
  } catch (error) {
    dispatch({
      type: PROJECT_DETAILS_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

export const createProject = () => async (dispatch, getState) => {
  try {
    dispatch({
      type: PROJECT_CREATE_REQUEST,
    });

    // Descruct from getState()
    const {
      userLogin: { userInfo },
    } = getState();
    const config = {
      headers: {
        Authorization: "Bearer " + userInfo.token,
      },
    };
    const response = await axios.post("/api/projects/", {}, config);
    // console.log("res:", res)

    dispatch({
      type: PROJECT_CREATE_SUCCESS,
      //   payload: console.log("payload:", res.data),
      payload: response.data,
    });

    dispatch({
      type: PROJECT_CREATE__REST,
      // this is turnng back to empty {}, not using the ACTION
    });
  } catch (error) {
    // console.log("error:", error)
    dispatch({
      type: PROJECT_CREATE_FAIL,
      //    payload: error.res
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};


export const updateProject = (project) => async (dispatch, getState) => {
  try {
    dispatch({
      type: PROJECT_UPDATE_REQUEST,
    });

    // Descruct from getState()
    const {
      userLogin: { userInfo },
    } = getState();
    const config = {
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + userInfo.token,
      },
    };
    const response = await axios.put(
      "/api/projects/" + project._id,
      project,
      config
    );
    // console.log("res:", res)

    dispatch({
      type: PROJECT_UPDATE_SUCCESS,
      //   payload: console.log("payload:", res.data),
      payload: response.data,
    });
  } catch (error) {
    // console.log("error:", error)
    dispatch({
      type: PROJECT_UPDATE_FAIL,
      //    payload: error.res
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};


export const deleteProject = (id) => async (dispatch, getState) => {
  try {
    dispatch({
      type: PROJECT_DELETE_REQUEST,
    });

    // Descruct from getState()
    const {
      userLogin: { userInfo },
    } = getState();
    const config = {
      headers: {
        // "Content-Type": "application/json", // we do not need this
        // becouse, we are sending GET requset!
        Authorization: "Bearer " + userInfo.token,
      },
    };
    await axios.delete("/api/projects/" + id, config);
    // console.log("res:", res)

    dispatch({
      type: PROJECT_DELETE_SUCCESS,
      //   payload: console.log("payload:", res.data),
      // payload: res.data,
    });
  } catch (error) {
    // console.log("error:", error)
    dispatch({
      type: PROJECT_DELETE_FAIL,
      //    payload: error.res
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};