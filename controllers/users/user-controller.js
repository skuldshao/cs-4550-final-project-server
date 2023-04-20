import * as userDao from './user-dao.js'

const findUsers = async (req, res) => {
    const users = await userDao.findUsers();
    res.json(users);
}

const findUserById = async (req, res) => {
    const userId = req.params.userId;
    const user = await userDao.findUserById(userId);
    res.json(user);
}

const findUserByEmailPassword = async (req, res) => {
    const email = req.params.email;
    const password = req.params.email;
    const user = await userDao.findUserByEmailPassword(email, password);
    res.json(user);
}

const createUser = async (req, res) => {
    const newUser = req.body;
    newUser.joined = Date.now();
    newUser.following = [];
    newUser.followers = [];
    newUser.reviews = [];
    newUser.favoriteSongs = [];
    newUser.newSongs = [];
    newUser.comments = [];
    const insertedUser = await userDao
        .createUser(newUser);
    res.json(insertedUser);
}

const updateUser = async (req, res) => {
    const userIdToUpdate = req.params.userId;
    const updates = req.body;
    const status = await userDao
        .updateUser(userIdToUpdate,
            updates);
    console.log(status)
    res.send(status);
}

const deleteUser = async (req, res) => {
    const userIdToDelete = req.params.userId;
    const status = await userDao
        .deleteUser(userIdToDelete);
    res.send(status);
}

export default (app) => {
    app.post('/api/users', createUser);
    app.get('/api/users', findUsers);
    app.get('/api/users/:userId', findUserById);
    app.get('/api/users/:email/:password', findUserByEmailPassword);
    app.put('/api/users/:userId', updateUser);
    app.delete('/api/users/:userId', deleteUser);
}
