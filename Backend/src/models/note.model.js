import mongoose, { Schema } from "mongoose";

const projectNoteSchema = new Schema({}, { timestamps: true });

export const ProjectNote = mongoose.Model("ProjectNote", projectNoteSchema);
