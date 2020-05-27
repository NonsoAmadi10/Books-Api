import { Document } from 'mongoose'
export interface Book extends Document {
    id?: string,
    name: string,
    author: string,
    year: number
 }

