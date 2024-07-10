const express = require("express");
const route = express.Router();
const {
  getContacts,
  getContact,
  createContact,
  updateContact,
  deleteContact,
} = require("../controllers/contactController");

route.route("/").get(getContacts).post(createContact);

//route.route("/:id").get(getContact);

//route.route("/").post(createContact);

route.route("/:id").put(updateContact).get(getContact).delete(deleteContact);

//route.route("/:id").delete(deleteContact);

module.exports = route;
