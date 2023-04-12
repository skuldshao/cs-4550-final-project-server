import adminModel from "./admin-model.js";
export const findAdmins = () => adminModel.find();
export const createAdmin = (admin) => adminModel.create(admin);
export const deleteAdmin = (adminId) => adminModel.deleteOne({_id: adminId});
export const updateAdmin = (adminId, admin) => adminModel.updateOne({_id: adminId}, {$set: admin})