import { Injectable, NotFoundException } from '@nestjs/common';
import { Podcast } from './entities/podcast.entry';
import { Episode } from './entities/episode.entry';

@Injectable()
export class PodcastsService {
  private podcasts: Podcast[] = [];

  getAll(): Podcast[] {
    return this.podcasts;
  }

  getOne(id: string): Podcast {
    const podcast = this.podcasts.find((podcast) => podcast.id === +id);
    if (!podcast) {
      throw new NotFoundException(`Podcast whit id ${id} doesn't exist.`);
    }
    return podcast;
  }

  create(podcastData) {
    this.podcasts.push({
      id: this.podcasts.length + 1,
      ...podcastData,
    });
  }

  delete(id: string) {
    this.getOne(id);
    this.podcasts = this.podcasts.filter((podcast) => podcast.id !== +id);
  }

  update(id: string, updateData) {
    const podcast = this.getOne(id);
    this.delete(id);
    this.podcasts.push({ ...podcast, ...updateData });
  }

  getAllEpisodes(id: string): Episode[] {
    const podcast = this.podcasts.find((podcast) => podcast.id === +id);
    if (podcast) {
      return podcast.episodes;
    } else {
      return [];
    }
  }

  createEpisode(id: string, EpisodeData) {
    const podcast = this.getOne(id);
    podcast.episodes.push({
      id: podcast.episodes.length + 1,
      ...EpisodeData,
    });
  }

  updateEpisode(podcastId: string, episodeId: string, updateData) {
    const podcast = this.getOne(podcastId);
    this.deleteEpisode(podcastId, episodeId);
    podcast.episodes.push({ ...updateData });
  }

  deleteEpisode(podcastId: string, episodeId: string) {
    const podcast = this.getOne(podcastId);
    podcast.episodes = podcast.episodes.filter(
      (episode) => episode.id !== +episodeId,
    );
  }
}
