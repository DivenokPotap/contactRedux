import axios from "axios"

axios.defaults.baseURL = "https://6a5725e1b17de7bebbdee6a2.mockapi.io";

export const getAllContacts = async () => {
    const { data } = await axios.get("/contactInitialState");

    return data;
}

export const createContact = async (userData) => {
  const { data } = await axios.post("/contactInitialState", userData);

  return data;
};

export const deleteContactById = async (id) => {
  const { data } = await axios.delete(`/contactInitialState/${id}`);

  return data;
};