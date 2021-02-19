import {
  PROJECT_CREATE_REQUEST,
  PROJECT_CREATE_SUCCESS,
  PROJECT_CREATE_FAIL,
  PROJECT_CREATE__REST,
  PROJECT_UPDATE_REQUEST,
  PROJECT_UPDATE_SUCCESS,
  PROJECT_UPDATE_REST,
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

export const projectCreateReducer = (state = {}, action) => {
  switch (action.type) {
    case PROJECT_CREATE_REQUEST:
      return {
        loading: true, // the raison for loading here if for data is being currently fetching. thats why loaing will be happen
      };

    case PROJECT_CREATE_SUCCESS:
      return {
        loading: false, // loading is done laoding!
        project: action.payload,
        success: true,
      };
    case PROJECT_CREATE_FAIL:
      return {
        loading: false, // loading is done laoding!
        error: action.payload,
      };
    case PROJECT_CREATE__REST:
      return { product: {}, success: false };
    default:
      return state;
  }
};


export const projectUpdateReducer = (state = { project: {} }, action) => {
  switch (action.type) {
    case PROJECT_UPDATE_REQUEST:
      return {
        loading: true, // the raison for loading here if for data is being currently fetching. thats why loaing will be happen
      };

    case PROJECT_UPDATE_SUCCESS:
      return {
        loading: false, // loading is done laoding!
        project: action.payload,
        updateSuccess: true,
      };
    case PROJECT_UPDATE_REST:
      return { product: {}, updateSuccess: false };
    case PROJECT_UPDATE_FAIL:
      return {
        loading: false, // loading is done laoding!
        error: action.payload,
      };
    default:
      return state;
  }
};


export const projectListReducer = (state = { projects: [] }, action) => {
  switch (action.type) {
    case PROJECT_LIST_REQUEST:
      return {
        loading: true, // the raison for loading here if for data is being currently fetching. thats why loaing will be happen
        projects: [],
      };

    case PROJECT_LIST_SUCCESS:
      return {
        loading: false, // loading is done laoding!
        projects: action.payload,
      };
    case PROJECT_LIST_FAIL:
      return {
        loading: false, // loading is done laoding!
        error: action.payload,
      };
    default:
      return state;
  }
};


export const projectDetailsReducer = (state = { project: {} }, action) => {
  switch (action.type) {
    case PROJECT_DETAILS_REQUEST:
      return {
        loading: true, // the raison for loading here if for data is being currently fetching. thats why loaing will be happen
        ...state,
      };

    case PROJECT_DEATAILS_SUCCESS:
      return {
        loading: false, // loading is done laoding!
        project: action.payload,
      };
    case PROJECT_DETAILS_FAIL:
      return {
        loading: false, // loading is done laoding!
        error: action.payload,
      };
    default:
      return state;
  }
};


export const projectDeleteReducer = (state = {}, action) => {
  switch (action.type) {
    case PROJECT_DELETE_REQUEST:
      return {
        loading: true, // the raison for loading here if for data is being currently fetching. thats why loaing will be happen
      };

    case PROJECT_DELETE_SUCCESS:
      return {
        loading: false, // loading is done laoding!
        success: true,
      };
    case PROJECT_DELETE_FAIL:
      return {
        loading: false, // loading is done laoding!
        error: action.payload,
      };
    default:
      return state;
  }
};