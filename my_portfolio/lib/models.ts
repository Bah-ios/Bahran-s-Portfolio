import mongoose, { Schema, model, models } from 'mongoose';

const ContentSchema = new Schema({
  section: { type: String, required: true, unique: true },
  title: String,
  body: String,
});

export const Content = models.Content || model('Content', ContentSchema);