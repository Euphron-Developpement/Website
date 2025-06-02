import { useGet, post, patch, remove } from '../api';
import type { Article } from '~/entities/article';

export function findAllArticles(): Promise<{ data: Article[] | undefined }> {
  return useGet('/articles');
}

export function findOneArticle(id: number): Promise<{ data: Article | undefined }> {
  return useGet(`/articles/${id}`);
}

export function createArticle(tagData: Omit<Article, 'id'>) {
  return post('/articles', tagData);
}

export function updateArticle(id: number, tagData: Partial<Article>) {
  return patch(`/articles/${id}`, tagData);
}

export function deleteArticle(id: number) {
  return remove(`/articles/${id}`);
}