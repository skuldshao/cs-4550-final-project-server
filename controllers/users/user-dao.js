import userModel from "./user-model.js";
export const findUsers = () => userModel.find();
export const findUserById = (userId) => userModel.findOne({_id: userId});
export const findUserByHandle = (handle) => userModel.findOne({ handle: handle });
export const findUserByEmail = (email) => userModel.findOne({ email: email });
export const findUserByEmailPassword = (email, password) => userModel.findOne({email: email, password: password});
export const createUser = (user) => userModel.create(user);
export const deleteUser = (userId) => userModel.deleteOne({_id: userId});
export const updateUser = (userId, user) => userModel.updateOne({_id: userId}, {$set: user})