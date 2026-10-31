import { api } from "../index";

export default {
  // get all clients
  async getClients() {
    return await api.get("/clients/getalldata");
  },

  // store client
  async storeClient(payload) {
    return await api.post("/clients/storeclient", payload);
  },

  // update client
  async updateClient(payload) {
    return await api.put("/clients/updateclient", payload);
  },

  // delete client
  async deleteClient(id) {
    return await api.delete(`/clients/deleteclient?id=${id}`);
  },

  // search clients by phone number
  async searchByPhone(phone) {
    return await api.get(`/clients/searchbyphone?phone=${phone}`);
  },
};