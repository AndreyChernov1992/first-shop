import axios from "axios";

const axiosClient = axios.create({
    baseURL: process.env.REACT_APP_BASE_URL,
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    }
  });

  axiosClient.interceptors.response.use(
    response => response, 
    error => {
      const {error} = response;
      if (error.status == 401) {window.location.href = process.env.REACT_APP_BASE_URL;}
      console.error("Looks like there was a problem. Status Code: " + res.status);
      return Promise.reject(error);
    }
  );

  export default axiosClient;