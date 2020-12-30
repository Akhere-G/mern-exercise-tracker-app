import * as api from "../api";

export const getUsers = async () => {
  try {
    const { data } = await api.getUsers();
    return data;
  } catch (error) {
    console.log(error);
  }
};

export const addUser = async user => {
  try {
    await api.addUser(user);
  } catch (error) {
    console.log(error);
  }
};
export const getExercises = async () => {
  try {
    const { data } = await api.getExercises();
    return data;
  } catch (err) {
    console.log(err);
  }
};

export const getExercise = async id => {
  try {
    const { data } = await api.getExercise(id);
    return data;
  } catch (err) {
    console.log(err);
  }
};

export const addExercise = async exercise => {
  try {
    await api.addExercise(exercise);
  } catch (error) {
    console.log(error);
  }
};
export const updateExercise = async (id, updatedExercise) => {
  try {
    await api.updateExercise(id, updatedExercise);
  } catch (error) {
    console.log(error);
  }
};

export const deleteExercise = async id => {
  try {
    await api.deleteExercise(id);
  } catch (error) {
    console.log(error);
  }
};
