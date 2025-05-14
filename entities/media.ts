import type { MediaType } from '~/entities/media_type';
import type { Article } from '~/entities/article';

export interface Media {
  id: number;
  url: string;
  article: Article;
  hero: boolean;
  type: MediaType;
}