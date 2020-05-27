import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { BooksController } from './books.controller';
import { BookService } from './books.service';
import { bookSchema } from './schemas/book.schema'

@Module({
  imports: [MongooseModule.forFeature([{name: 'Book', schema: bookSchema}])],
  controllers: [BooksController],
  providers: [BookService],
})
export class BookModule {}