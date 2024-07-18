const asyncHandler = require("express-async-handler");
const Contact = require("../models/contactModel");

//@desc Get all Contacts
//@route GET /api/contacts
//@access Private
getContacts = asyncHandler(async (req, res) => {
  const contacts = await Contact.find({ user_id: req.user.id });
  console.log("User_id", req.user.id);
  res.status(200).json({ success: true, message: contacts });
});

//@desc Get single Contact
//@route GET /api/contacts/:id
//@access Private

getContact = asyncHandler(async (req, res) => {
  const contact = await Contact.findById(req.params.id);
  if (!contact) {
    res.status(404);
    throw new Error("Contact not found");
  }

  res.status(200).json({ success: true, message: contact });
});

//@desc Create a new Contact
//@route POST /api/contacts
//@access Private

createContact = asyncHandler(async (req, res) => {
  const { name, email, phone } = req.body;
  if (!name || !email || !phone) {
    res.status(400);
    throw new Error("All fields are required");
  }
  const contact = await Contact.create({
    name,
    email,
    phone,
    user_id: req.user.id,
  });
  res.status(201).json({
    success: true,
    message: "New Contact created successfully",
    data: contact,
  });
});

//@desc Update a Contact
//@route PUT /api/contacts/:id
//@access Private
updateContact = asyncHandler(async (req, res) => {
  const contact = await Contact.findById(req.params.id);
  if (!contact) {
    res.status(404);
    throw new Error("Contact not found");
  }

  if (contact.user_id.toString() !== req.user.id) {
    res.status(403);
    throw new Error("User don't have permission to update other user contacts");
  }

  const updatedContact = await Contact.findByIdAndUpdate(
    req.params.id,
    req.body,
    { new: true }
  );
  res.status(200).json({
    success: true,
    message: `Contact updated successfully`,
    data: updatedContact,
  });
});
//@desc Delete a Contact
//@route DELETE /api/contacts/:id
//@access Private

deleteContact = asyncHandler(async (req, res) => {
  const contact = await Contact.findById(req.params.id);
  if (!contact) {
    res.status(404);
    throw new Error("Contact not found");
  }
  if (contact.user_id.toString() !== req.user.id) {
    res.status(403);
    throw new Error("User don't have permission to delete other user contacts");
  }
  const deletedContact = await Contact.findByIdAndDelete(req.params.id);

  res.status(200).json({
    success: true,
    message: "Contact deleted successfully",
    data: deletedContact,
  });
});

module.exports = {
  getContacts,
  getContact,
  createContact,
  updateContact,
  deleteContact,
};
