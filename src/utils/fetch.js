import axios from 'axios';

const headers = {
  Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJiMzNiYjJhNWI3OGMyYTRmNWNiZTUyNDI2OWFiZWNmYiIsInN1YiI6IjVlNWQ1ODEzNTVjOTI2MDAxNTU0MDM2YiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.36Wz1cy-4Tk7OG2w-09Y-W2WSGBQ7zwl6F2PjGJtwOM',
  'Content-Type': 'application/json;charset=UTF-8',
};

const useFetch = async (method, url, data) => {
  try {
    const response = await axios({
      method, url, data, headers,
    });
    return response;
  } catch (error) {
    return error;
  }
};

export default useFetch;
