const debug = require("debug")("bon-appetit-api:dishes-controller");

const RestaurantDAO = require("../dao/restaurant-dao");
const ReviewDAO = require("../dao/review-dao");
const EventDAO = require("../dao/event-dao");
const DishDAO = require("../dao/dish-dao");

const restaurants = require("../json-models/restaurants2.json");
const reviews = require("../json-models/reviews2.json");
const events = require("../json-models/events2.json");
const dishes = require("../json-models/dishes");


exports.populate = () => {
   RestaurantDAO.createInBatch(restaurants);
   ReviewDAO.createInBatch(reviews);
   DishDAO.createInBatch(dishes);
   EventDAO.createInBatch(events);

};


const clearDataset = async daoInstance => {
  try {
    const dataset = await daoInstance.readAll();

    await dataset.map(async data => await daoInstance.delete(data.id));
  } catch (err) {
    throw err;
  }
};

exports.clear = async (req, res, next) => {
  try {
   // await clearDataset(RestaurantDAO);
  //  await clearDataset(ReviewDAO);
  //  await clearDataset(DishDAO);
  //  await clearDataset(EventDAO);

    return res.status(201).json({
      message: "Database Cleared!"
    });
  } catch (err) {
    debug(err);

    return res.status(500).json({
      message: "Error when trying to Clear the Database."
    });
  }
};
