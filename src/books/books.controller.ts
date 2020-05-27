import { Controller, Get } from '@nestjs/common';
import { BookService } from './books.service';
import { BookDTO } from './dto/books.dto';
import { Book } from './interfaces/book.interface'

@Controller('books')
export class BooksController {

    constructor(private readonly bookService: BookService) { }
    
    @Get()
    findAll(): Promise<Book[]> {
        return this.bookService.findAll()
    }
}
