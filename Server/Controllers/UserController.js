const userModel = require("../Model/UserModel");
const { use } = require("../Routes/UserRoute");

const getHome = async (req, res) => {
  try {
    console.log("HOME PAGE");
    res.send("HOME PAGE");
  } catch (err) {
    console.log(err.message);
    res.send(err.message);
  }
};

const getAllUsers = async (req, res) => {
  try {
    const usersData = await userModel.find();
    if (usersData) {
      console.log(usersData);
      res.send(usersData);
    } else {
      res.send("Error in the get users method");
    }
  } catch (err) {
    console.log(err.message);
    res.send(err.message);
  }
};
const createUser = async (req, res) => {
  try {
    const user = userModel({
      name: req.body.name,
      email: req.body.email,
      pno: req.body.pno,
      password: req.body.password,
      // isAdmin: 0,
    });
    const data = await user.save();
    if (data) {
      console.log("data saved successfully");
      console.log(data);
      res.send(data);
    } else {
      res.send("Error in the create user method");
    }
  } catch (err) {
    console.log(err.message);
    res.send(err.message);
  }
};
module.exports = { getHome, getAllUsers, createUser };
