let user = localStorage.getItem("user")
  ? JSON.parse(localStorage.getItem("user"))
  : "";

let role = localStorage.getItem("role")
  ? JSON.parse(localStorage.getItem("role"))
  : "";

let selectedSchool = localStorage.getItem("selectedSchool")
  ? JSON.parse(localStorage.getItem("selectedSchool"))
  : "";

let companies = localStorage.getItem("courses")
  ? JSON.parse(localStorage.getItem("courses"))
  : "";

let projects = localStorage.getItem("topics")
  ? JSON.parse(localStorage.getItem("topics"))
  : "";


export const initialState = {
  user: "" || user,
  role: "" || role,
  selectedSchool: "" || selectedSchool,
  companies: "" || companies,
  projects: "" || projects,
  loading: false,
  errorMessage: null,
};

export const AuthReducer = (initialState, action) => {
  switch (action.type) {
    case "REQUEST_LOGIN":
      return {
        ...initialState,
        loading: true,
      };
    case "LOGIN_SUCCESS":
      return {
        ...initialState,
        user: action.payload.user,
        role: action.payload.role,
      };
    case "LOGOUT":
      return {
        ...initialState,
        user: "",
        token: "",
      };

    case "LOGIN_ERROR":
      return {
        ...initialState,
        loading: false,
        errorMessage: action.error,
      };

    case "CHANGE_COMPANY":
      return {
        ...initialState,
        selectedCompanies: action.payload.selectedCompanies,
      };

    case "CHANGE_PROJECTS":
      return {
        ...initialState,
        projects: action.payload.projects,
    };

    case "CHANGE_USER":{
      return {
        ...initialState,
        role: action.payload.user,
      }
    }

    case "CREATE_PROJECTS":
      return {
        ...initialState,
        projects: action.payload.projects,
      };

    default:
      throw new Error(`Unhandled action type: ${action.type}`);
  }
};