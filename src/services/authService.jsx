import { apiClient } from "./api";

export const signUp = async (userData) => {

  console.log("3. SERVICE REGISTER DATA:", userData);

  try {
    const response = await apiClient.post(
      "/users/signup",
      userData
    );

    console.log("4. SERVER REGISTER RESPONSE:", response);

    return response.data;

  } catch (error) {

    console.log(
      "4. SERVER REGISTER ERROR:",
      error.response
    );

    console.log(
      "4. SERVER REGISTER ERROR DATA:",
      error.response?.data
    );

    throw error;
  }
};

export const signIn = async (userData) => {
  const { data } = await apiClient.post("/users/login", userData);
  return data;
};

export const signOut = async () => {
  const { data } = await apiClient.post("/users/logout");

  return data;
};

export const getCurrent = async () => {
  const { data } = await apiClient.get("/users/current");

  return data;
};