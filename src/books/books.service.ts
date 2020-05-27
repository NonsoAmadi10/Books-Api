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

  async findOne(id: string): Promise<Book> {
    return await this.bookModel.findOne({_id: id})
  }
}
