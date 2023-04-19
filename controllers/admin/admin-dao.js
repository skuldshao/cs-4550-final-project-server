import adminModel from "./admin-model.js";
export const findAdmins = () => adminModel.find();
export const findAdminById = (adminId) => adminModel.findOne({_id: adminId});
export const findAdminByHandle = (handle) => adminModel.findOne({ handle: handle });
export const findAdminByEmail = (email) => adminModel.findOne({ email: email});
export const findAdminByEmailPassword = (email, password) => adminModel.findOne({email: email, password: password});
export const createAdmin = (admin) => adminModel.create(admin);
export const deleteAdmin = (adminId) => adminModel.deleteOne({_id: adminId});
export const updateAdmin = (adminId, admin) => adminModel.updateOne({_id: adminId}, {$set: admin})