const FirestoreUtils = require("../services/firestoreUtils");
const collectionKey = "reviews";

exports.create = async data => {
  try {
    const review = new Review(data);
    return await review.save();
  } catch (err) {
    throw err;
  }
};

exports.createInBatch = data => {
  FirestoreUtils.set(data, collectionKey);
};

exports.readAll = async () => {
  try {
    return await Review.find({});
  } catch (err) {
    throw err;
  }
};

exports.readById = async id => {
  try {
    return await Review.findById(id);
  } catch (err) {
    throw err;
  }
};

exports.update = async (id, data) => {
  try {
    return await Review.findByIdAndUpdate(id, { $set: data }, { new: true });
  } catch (err) {
    throw err;
  }
};

exports.delete = async id => {
  try {
    return await Review.findByIdAndRemove(id);
  } catch (err) {
    throw err;
  }
};
