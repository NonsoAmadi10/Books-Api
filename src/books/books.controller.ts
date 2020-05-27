import { Controller, Get,Body, Post, Put, Delete,Param } from '@nestjs/common';
import { BookService } from './books.service';
import { BookDTO } from './dto/books.dto';
import { Book } from './interfaces/book.interface'

@Controller('books')
export class BooksController {

    constructor(private readonly bookService: BookService) { }
    
    @Get()
    async findAll(): Promise<Book[]> {
        return this.bookService.findAll()
    }

    @Post()
    addOne(@Body() data:BookDTO): Promise<Book> {
        return this.bookService.createNew(data)
    }

    @Get(':id')
   async findOne(@Param('id') id): Promise<Book>{
        return this.bookService.findOne(id)
    }

    @Put(':id')
    async updateOne(@Param('id') id, @Body() data: BookDTO): Promise<Book>{
        return this.bookService.updateOne(id, data)
    }

    @Delete(':id')
    async deleteOne(@Param('id') id): Promise<Book> {
        return this.bookService.deleteOne(id)
    }
}
