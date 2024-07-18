const express = require("express");
const route = express.Router();
const {
  getContacts,
  getContact,
  createContact,
  updateContact,
  deleteContact,
} = require("../controllers/contactController");
const validateToken = require("../middleware/validateTokenHandller");

route.use(validateToken);

route.route("/").get(getContacts).post(createContact);

//route.route("/:id").get(getContact);

//route.route("/").post(createContact);

route.route("/:id").put(updateContact).get(getContact).delete(deleteContact);

//route.route("/:id").delete(deleteContact);

module.exports = route;
