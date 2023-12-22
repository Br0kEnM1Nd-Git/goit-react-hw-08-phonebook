import axios from 'axios';

axios.defaults.baseURL =
  'https://657f46566ae0629a3f532589.mockapi.io/phonebook/contacts';

class Api {
  async fetchAllContacts() {
    const data = await axios.get();
    return data;
  }

  async deleteContact(id) {
    const data = await axios.delete(id);
    return data;
  }

  async addContact({ name, phone }) {
    const data = await axios.post('', { name, phone });
    return data;
  }
}

const api = new Api();

export default api;
