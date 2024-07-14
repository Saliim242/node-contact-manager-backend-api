require("dotenv").config();
const express = require("express");
const router = require("./routes/contactsRouter");
const userRouter = require("./routes/userRouter");
const errorHandler = require("./middleware/error_handaller_middleWare");
const connectDB = require("./config/connectionDb");
const app = express();
connectDB();

app.use(express.json());

app.use("/api/contacts", router);
app.use("/api/users", userRouter);
app.use(errorHandler);
const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
