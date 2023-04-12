import userModel from "./user-model.js";
export const findUsers = () => userModel.find();
export const createUser = (user) => userModel.create(user);
export const deleteUser = (userId) => userModel.deleteOne({_id: userId});
export const updateUser = (userId, user) => userModel.updateOne({_id: userId}, {$set: user})