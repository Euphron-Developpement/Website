import type { Media } from '~/entities/media';

export interface Article {
  id: number;
  title: string;
  read_time: number;
  publication_date: Date;
  category_id: number;
  // category: Category;
  author_Id: number;
  // author: User;
  content: string;
  interview_time?: number | null;
  Media: Media[];
  Article_Tags: number[];
}