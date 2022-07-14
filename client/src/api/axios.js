import data from "./data.json";

// Mock Axios object
const axios = {
  get(url) {
    if (url === "/api/employees") {
      return Promise.resolve({ data });
    }
  }
};

export default axios;
