
const mongoose = require('mongoose');

const usersSchema = new mongoose.Schema({
    name: String
});

const User = mongoose.model('myUser', usersSchema);

const getUsers = () => {
    return User.find();
};

const addUser = async (name) => {
    const user = new User({name});
    return user.save();
};

const deleteUser = async (_id) => {
    return User.deleteOne({_id});
};

const updateUser = async (_id, name) => {
    return User.update({_id}, {name});
};


exports.getUsers = getUsers;
exports.addUser = addUser;
exports.deleteUser = deleteUser;
exports.updateUser = updateUser;