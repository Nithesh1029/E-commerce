import axios from "axios";

const URL = "http://localhost:4000";

export const authenticateSignUp = async (data) => {
  try {

    const response = await axios.post(
      `${URL}/signup`,
      data,
      {
        withCredentials: true
      }
    );

    return response.data;

  } catch (error) {

    console.log(error);

    return {
      success: false,
      message:
        error.response?.data?.message ||
        "Something went wrong"
    };
  }
};

export const Login = async (data) => {
  try {

    const response = await axios.post(
      `${URL}/login`,
      data,
      {
        withCredentials: true
      }
    );

    return response.data;

  } catch (error) {

    console.log(error);

    return {
      success: false,
      message:
        error.response?.data?.message ||
        "Something went wrong"
    };
  }
};