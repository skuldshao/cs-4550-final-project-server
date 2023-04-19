import * as adminDao from "./admin-dao.js";

const AuthController = (app) => {
    const register = async (req, res) => {
        const handle = req.body.handle;
        const email = req.body.email;
        const handleAdmin = await adminDao
            .findAdminByHandle(handle);
        const emailAdmin = await adminDao
            .findAdminByEmail(email);
        if (handleAdmin || emailAdmin) {
            res.sendStatus(409);
            return;
        }
        const newAdmin = await adminDao
            .createAdmin(req.body);
        req.session["currentAdmin"] = newAdmin;
        res.json(newAdmin);
    };

    const login = async (req, res) => {
        const email = req.body.email;
        const password = req.body.password;
        const admin = await adminDao
            .findAdminByEmailPassword(email, password);
        if (admin) {
            req.session["currentAdmin"] = admin;
            res.json(admin);
        } else {
            res.sendStatus(404);
        }
    };

    const profile = async (req, res) => {
        const currentAdmin = req.session["currentAdmin"];
        if (!currentAdmin) {
            res.sendStatus(404);
            return;
        }
        res.json(currentAdmin);
    };

    const logout = async (req, res) => {
        req.session.destroy();
        res.sendStatus(200);
    };

    app.post("/api/admin/register", register);
    app.post("/api/admin/login", login);
    app.post("/api/admin/profile", profile);
    app.post("/api/admin/logout", logout);
};
export default AuthController;