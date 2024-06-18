import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
} from '@nestjs/common';
import { PodcastsService } from './podcasts.service';
import { Podcast } from './entities/podcast.entry';
import { Episode } from './entities/episode.entry';

@Controller('podcasts')
export class PodcastsController {
  constructor(private readonly podcastsService: PodcastsService) {}
  @Get()
  getAll(): Podcast[] {
    return this.podcastsService.getAll();
  }

  @Post()
  create(@Body() podcastData) {
    return this.podcastsService.create(podcastData);
  }

  @Get('/:id')
  getOne(@Param('id') podcastId: string): Podcast {
    return this.podcastsService.getOne(podcastId);
  }

  @Patch('/:id')
  patch(@Param('id') podcastId: string, @Body() updateData) {
    return this.podcastsService.update(podcastId, updateData);
  }

  @Delete('/:id')
  delete(@Param('id') podcastId: string) {
    return this.podcastsService.delete(podcastId);
  }

  @Get('/:id/episodes')
  getAllEpisodes(@Param('id') podcastId: string): Episode[] {
    return this.podcastsService.getAllEpisodes(podcastId);
  }

  @Post('/:id/episodes')
  createEpisode(@Param('id') podcastId: string, @Body() updateData) {
    return this.podcastsService.createEpisode(podcastId, updateData);
  }

  @Patch('/:id/episodes/:episodeId')
  patchEpisode(
    @Param('id') podcastId: string,
    @Param('episodeId') episodeId: string,
    @Body() updateData,
  ) {
    return this.podcastsService.updateEpisode(podcastId, episodeId, updateData);
  }

  @Delete('/:id/episodes/:episodeId')
  deleteEpisode(
    @Param('id') podcastId: string,
    @Param('episodeId') episodeId: string,
  ) {
    return this.podcastsService.deleteEpisode(podcastId, episodeId);
  }
}
