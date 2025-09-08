import mongoose, { Schema } from "mongoose";

const projectSchema = new Schema({}, { timestamps: true });

export const Project = mongoose.Model("Project", projectSchema);
