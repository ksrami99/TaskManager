import mongoose, { Schema } from "mongoose";

const subTaskSchema = new Schema({}, { timestamps: true });

export const SubTask = mongoose.Model("SubTask", subTaskSchema);
