"use strict";

const fs = require("fs");
const path = require("path");
const { camelCase, upperFirst } = require("lodash");
const models = {};

fs.readdirSync(__dirname)
  .filter((file) => {
    return file !== "index.js" && file.endsWith(".js");
  })
  .forEach((file) => {
    const model = require(path.join(__dirname, file));
    Object.keys(model).forEach((key) => {
      const formattedKey = upperFirst(camelCase(key));
      models[formattedKey] = model[key];
    });
  });

module.exports = models;
