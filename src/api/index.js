import axios from "axios";
const url = process.env.REACT_APP_URL;

export const getUsers = () => axios.get(`${url}/users/`);

export const addUser = user => axios.post(`${url}/users/add`, user);
export const getExercises = () => axios.get(`${url}/exercises/`);

export const getExercise = id => axios.get(`${url}/exercises/${id}`);
export const addExercise = newExercise =>
  axios.post(`${url}/exercises/add`, newExercise);
export const updateExercise = (id, updatedExercise) =>
  axios.post(`${url}/exercises/update/${id}`, updatedExercise);

export const deleteExercise = id => axios.delete(`${url}/exercises/${id}`);
