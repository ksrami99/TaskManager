import mongoose, { Schema } from "mongoose";

const projectMemberSchema = new Schema({}, { timestamps: true });

export const ProjectMember = mongoose.Model("ProjectMember", projectMemberSchema);
