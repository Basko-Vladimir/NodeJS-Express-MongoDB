
const {readJsonFromFile, writeJsonToFile} = require('./fs-utils');

const getUsers = () => {
    return readJsonFromFile('users.json')
};

const addUser = async (name) => {
    const users = await getUsers();
    users.push({id: 3, name});
    return writeJsonToFile('users.json', users)
};

exports.getUsers = getUsers;
exports.addUser = addUser;