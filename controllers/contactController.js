//@desc Get all Contacts
//@route GET /api/contacts
//@access public
getContacts = (req, res) => {
  res.status(200).json({ message: "Get all contacts from database" });
};

//@desc Get single Contact
//@route GET /api/contacts/:id
//@access public

getContact = (req, res) => {
  res
    .status(200)
    .json({ message: `Get Single Contact with ID ${req.params.id} found` });
};

//@desc Create a new Contact
//@route POST /api/contacts
//@access public

createContact = (req, res) => {
  console.log("The Body request", req.body);
  const { name, email, gender, phone, address } = req.body;
  if (!name || !email || !gender || !phone || !address) {
    res.status(400);
    throw new Error("All fields are required");
  }
  res.status(201).json({ message: "New Contact created successfully" });
};

//@desc Update a Contact
//@route PUT /api/contacts/:id
//@access public
updateContact = (req, res) => {
  res
    .status(200)
    .json({ message: `Contact with ID ${req.params.id} updated successfully` });
};
//@desc Delete a Contact
//@route DELETE /api/contacts/:id
//@access public

deleteContact = (req, res) => {
  res
    .status(200)
    .json({ message: `Contact with ID ${req.params.id} deleted successfully` });
};

module.exports = {
  getContacts,
  getContact,
  createContact,
  updateContact,
  deleteContact,
};
