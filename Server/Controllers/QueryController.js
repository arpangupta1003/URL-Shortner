const queryModel = require("../Model/QueryModel");

const getHome = (req, res) => {
  console.log("HOME PAGE FROM QUERY ROUTE");
  res.send("HOME PAGE FROM QUERY ROUTE");
};

const getAllQueries = async (req, res) => {
  try {
    const queriesData = await queryModel.find();
    if (queriesData) {
      console.log(queriesData);
      res.send(queriesData);
    } else {
      res.status(404).send("No queries found");
    }
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server Error");
  }
};

const openQueryPage = async (req, res) => {
  try {
    const keyword = req.params.keyword;
    const findShortURL = await queryModel.findOne({ shortURL: keyword });

    if (findShortURL) {
      const originalUrl = findShortURL.originalURL;
      res.redirect(originalUrl); // Redirect to the original URL
    } else {
      res.status(404).send("Short URL not found");
    }
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server Error");
  }
};

const createShortcut = async (req, res) => {
  try {
    const { originalURL, shortURL } = req.body;
    const newQuery = new queryModel({ originalURL, shortURL });
    const data = await newQuery.save();

    res.status(201).send(data); // Respond with the saved data
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server Error");
  }
};

module.exports = { getHome, getAllQueries, openQueryPage, createShortcut };
