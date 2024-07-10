const express = require("express");
const router = require("./routes/contactsRouter");
//const donenv = require("dotenv").config();

const app = express();
app.use(express.json());

app.use("/api/contacts", router);
const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
