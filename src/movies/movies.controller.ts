import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
  Query,
} from '@nestjs/common';
import { MoviesService } from './movies.service';
import { Movie } from './entities/movie.entity';

@Controller('movies')
export class MoviesController {
  constructor(private readonly moviesService: MoviesService) {}
  @Get()
  getAll(): Movie[] {
    return this.moviesService.getAll();
  }

  @Get('search')
  search(@Query('year') searchingYear: string) {
    return `We are searching for a movie made after: ${searchingYear}`;
  }

  @Get('/:id')
  getOne(@Param('id') movieId: string): Movie {
    return this.moviesService.getOne(movieId);
  }

  @Post()
  create(@Body() movieData) {
    return this.moviesService.create(movieData);
  }

  @Delete('/:id')
  delete(@Param('id') movieId: string) {
    return this.moviesService.delete(movieId);
  }

  @Put('/:id')
  patch(@Param('id') movieId: string, @Body() updateData) {
    return this.moviesService.update(movieId, updateData);
  }
}
