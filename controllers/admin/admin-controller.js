import * as adminDao from './admin-dao.js'

const findAdmins = async (req, res) => {
    const admins = await adminDao.findAdmins();
    res.json(admins);
}

const findAdminById = async (req, res) => {
    const adminId = req.params.adminId;
    const admin = await adminDao.findAdminById(adminId);
    res.json(admin);
}

const createAdmin = async (req, res) => {
    const newAdmin = req.body;
    newAdmin.adminKey = "secretKey";
    newAdmin.joined = Date.now();
    const insertedAdmin = await adminDao
        .createAdmin(newAdmin);
    res.json(insertedAdmin);
}

const updateAdmin = async (req, res) => {
    const adminIdToUpdate = req.params.adminId;
    const updates = req.body;
    const status = await adminDao
        .updateAdmin(adminIdToUpdate,
            updates);
    res.json(status);
}

const deleteAdmin = async (req, res) => {
    const adminIdToDelete = req.params.adminId;
    const status = await adminDao
        .deleteAdmin(adminIdToDelete);
    res.json(status);
}

export default (app) => {
    app.post('/api/admin', createAdmin);
    app.get('/api/admin', findAdmins);
    app.get('/api/admin/:adminId', findAdminById);
    app.put('/api/admin/:adminId', updateAdmin);
    app.delete('/api/admin/:adminId', deleteAdmin);
}
