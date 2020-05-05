const FirestoreUtils = require("../services/firestoreUtils");

exports.create = async data => {
  try {
    const event = new Event(data);
    return await event.save();
  } catch (err) {
    throw err;
  }
};

exports.createInBatch = data => {
  FirestoreUtils.restore(data);
};

exports.readAll = async () => {
  try {
    return await Event.find({});
  } catch (err) {
    throw err;
  }
};

exports.readById = async id => {
  try {
    return await Event.findById(id);
  } catch (err) {
    throw err;
  }
};

exports.update = async (id, data) => {
  try {
    return await Event.findByIdAndUpdate(id, { $set: data }, { new: true });
  } catch (err) {
    throw err;
  }
};

exports.delete = async id => {
  try {
    return await Event.findByIdAndRemove(id);
  } catch (err) {
    throw err;
  }
};
