import * as usersDao from "./user-dao.js";

const AuthController = (app) => {
    const register = async (req, res) => {
        const handle = req.body.handle;
        const email = req.body.email;
        const handleUser = await usersDao
            .findUserByHandle(handle);
        const emailUser = await usersDao
            .findUserByEmail(email);
        if (handleUser || emailUser) {
            res.sendStatus(409);
            return;
        }
        const newUser = await usersDao
            .createUser(req.body);
        req.session["currentUser"] = newUser;
        res.json(newUser);
    };

    const login = async (req, res) => {
        const email = req.body.email;
        const password = req.body.password;
        const user = await usersDao
            .findUserByEmailPassword(email, password);
        if (user) {
            req.session["currentUser"] = user;
            res.json(user);
        } else {
            res.sendStatus(404);
        }
    };

    const profile = async (req, res) => {
        const currentUser = req.session["currentUser"];
        if (!currentUser) {
            res.sendStatus(404);
            return;
        }
        const returnUser = await usersDao.findUserById(currentUser._id)
        res.json(returnUser);
    };

    const logout = async (req, res) => {
        req.session.destroy();
        res.sendStatus(200);
    };

    const update = async (req, res) => {
        req.session["currentUser"] = req.body;
        const status = await usersDao
            .updateUser(req.body._id, req.body);
        res.send(status)
    }

    app.post("/api/users/register", register);
    app.post("/api/users/login", login);
    app.get("/api/users/profile", profile);
    app.put("/api/users/update", update);
    app.post("/api/users/logout", logout);
};

export default AuthController;