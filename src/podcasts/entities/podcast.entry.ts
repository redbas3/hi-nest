import { Episode } from './episode.entry';

export class Podcast {
  id: number;
  title: string;
  category: string;
  rating: number;
  episodes: Episode[];
}
