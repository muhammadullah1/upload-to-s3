const { Upload } = require("../models/upload");

module.exports = {
  create: async (file) => {
    return await Upload.create(file);
  },
  update: async (filter) => {
    return await Upload.find(filter);
  },
  get: async (filter) => {
    return await Upload.findOne(filter);
  },
  delete: async (ID) => {
    return await Upload.deleteOne({ _id: ID });
  },
};
