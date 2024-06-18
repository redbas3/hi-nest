import { Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';

@Controller('movies')
export class MoviesController {
  @Get()
  getAll() {
    return 'This will return all movies';
  }

  @Get("/:id")
  getOne(@Param("id") id: string) {
    return `This will return one movie: ${id}`;
  }

  @Post()
  create() {
    return "This will create a movie";
  }

  @Delete('/:id')
  delete(@Param("id") id: string) {
    return `This will delete a movie with the id: ${id} `;
  }

  @Put('/:id')
  patch(@Param("id") id: string) {
    return `This will patch a movie with the id: ${id}`;
  }
}
