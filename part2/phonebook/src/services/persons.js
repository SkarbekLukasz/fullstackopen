import axios from "axios";

const baseUrl = "http://localhost:3001/persons";

const getAll = () => {
  return axios.get(baseUrl).then((response) => response.data);
};

const save = (newPerson) => {
  return axios.post(baseUrl, newPerson).then((response) => response.data);
};

const update = (updatePerson) => {
  return axios
    .put(`${baseUrl}/${updatePerson.id}`, updatePerson)
    .then((response) => response.data);
};

const deletePerson = (id) => {
  return axios.delete(`${baseUrl}/${id}`).then((response) => response.data);
};

export default { save, getAll, deletePerson, update };
