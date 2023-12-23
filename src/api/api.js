import axios from 'axios';

axios.defaults.baseURL = 'https://connections-api.herokuapp.com/';

class Api {
  async fetchAllContacts() {
    const data = await axios.get('contacts');
    return data;
  }

  async addContact({ name, number }) {
    const data = await axios.post('contacts', { name, number });
    return data;
  }

  async deleteContact(id) {
    const data = await axios.delete(`contacts/${id}`);
    return data;
  }

  async signUp(newUser) {
    const data = await axios.post(`users/signup`, newUser);
    return data;
  }

  async logIn(userData) {
    const data = await axios.post(`users/login`, userData);
    return data;
  }

  setToken(token) {
    axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
  }
}

const api = new Api();

export default api;
