
const {getUsers, addUser} = require('./repository');
const express = require('express');
const router = express.Router();

router.get('/', async (req, res) => {
    let users = await getUsers();

    if (req.query.search) {
        users = users.filter( u => u.name.indexOf(req.query.search) > -1);
    }

    res.send(users);
});

router.post('/', async (req, res) => {
    const name = req.body.name;
    await addUser(name);
    res.send({success: true});
});

router.get('/:id', async (req, res) => {
    const userId = +req.params.id;
    const users = await getUsers();
    const user = users.find( u => u.id === userId);
    user ? res.send(user) : res.send(404);
});

module.exports = router;