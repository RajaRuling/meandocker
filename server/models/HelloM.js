import { Schema, model } from "mongoose";


const HelloSchema = new Schema({
    key1: String
});

export default model('Hello', HelloSchema);