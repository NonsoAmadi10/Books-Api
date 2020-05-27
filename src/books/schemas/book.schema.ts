import * as mongoose from 'mongoose'

export const bookSchema = new  mongoose.Schema({
    name: String,
    author: String,
    year: Number
})