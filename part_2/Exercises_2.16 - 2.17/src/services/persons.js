import axios from 'axios';

const baseUrl = 'http://localhost:3001/api/persons';

const getAllPersons = () => {
  return axios.get(baseUrl)
    .then(res => res.data)
    .catch(error => {
      console.error(error);
      return [];
    });
};

const createPerson = (newPerson) => {
  return axios.post(baseUrl, newPerson)
    .then(res => res.data)
    .catch(error => {
      console.error(error);
      return null;
    });
};

const update = (id, newPerson) => {
  return axios.put(`${baseUrl}/${id}`, newPerson)
    .then(res => res.data)
    .catch(error => {
      console.error(error);
      return null;
    });
};

const deletePerson = (id)=>{
  return axios.delete(`${baseUrl}/${id}`)
} 

export default {
  getAllPersons,
  createPerson,
  deletePerson,
  update
};
