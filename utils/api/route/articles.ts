import { useGet, post, patch, remove } from '../api';
import type { Article } from '~/entities/articles';

export async function findAllArticles(): Promise<{
  data: Article[] | undefined;
}> {
  const response = await useGet('/articles');
  return { data: response.data.value as Article[] };
}
