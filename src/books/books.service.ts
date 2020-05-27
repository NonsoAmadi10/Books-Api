import { Injectable } from '@nestjs/common';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { Book } from './interfaces/book.interface';
import { BookDTO } from './dto/books.dto';

@Injectable()
export class BookService {
  constructor(@InjectModel('Book') private readonly bookModel: Model<Book>){}

  async findAll(): Promise<Book[]> {
    return await this.bookModel.find()
  }

  async findOne(id: any): Promise<Book> {
    return await this.bookModel.findById(id).exec()
  }

  async createNew(data: BookDTO): Promise<Book> {
    const addOne = new this.bookModel(data)

    return await addOne.save()
  }
}
