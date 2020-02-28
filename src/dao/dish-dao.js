const FirestoreUtils = require("../services/firestoreUtils");
const collectionKey = "dishes";

exports.create = async data => {
  try {
    const dish = new Dish(data);
    return await dish.save();
  } catch (err) {
    throw err;
  }
};

exports.createInBatch = (dishes) => {
  FirestoreUtils.set(dishes, collectionKey);
};

exports.readAll = async () => {
  try {
    return await Dish.find({});
  } catch (err) {
    throw err;
  }
};

exports.readBasedDishesType = async dishesTypes => {
  try {
    const dishesFilteredByType = await Dish.find({
      type: {
        $in: dishesTypes
      }
    });

    return dishesFilteredByType.map(dish => ({
      ...dish._doc,
      id: dish._doc._id
    }));
  } catch (err) {
    throw err;
  }
};

exports.readById = async id => {
  try {
    return await Dish.findById(id);
  } catch (err) {
    throw err;
  }
};

exports.update = async (id, data) => {
  try {
    return await Dish.findByIdAndUpdate(id, { $set: data }, { new: true });
  } catch (err) {
    throw err;
  }
};

exports.delete = async id => {
  try {
    return await Dish.findByIdAndRemove(id);
  } catch (err) {
    throw err;
  }
};
