import * as userDao from './user-dao.js'

const findUsers = async (req, res) => {
    const users = await userDao.findUsers();
    res.json(users);
}

const findUser = async (req, res) => {
    const userId = req.params.userId;
    const user = await userDao.findUserById(userId);
    res.json(user);
}

const createUser = async (req, res) => {
    const newUser = req.body;
    newUser.joined = Date.now();
    newUser.bio = "";
    newUser.location = "";
    newUser.locationPublic = false;
    newUser.following = new Array();
    newUser.followers = new Array();
    newUser.reviews = new Array();
    newUser.favoriteSongs = new Array();
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
    res.json(status);
}

const deleteUser = async (req, res) => {
    const userIdToDelete = req.params.userId;
    const status = await userDao
        .deleteUser(userIdToDelete);
    res.json(status);
}

export default (app) => {
    app.post('/api/users', createUser);
    app.get('/api/users', findUsers);
    app.get('/api/users/:userId', findUser);
    app.put('/api/users/:userId', updateUser);
    app.delete('/api/users/:userId', deleteUser);
}
