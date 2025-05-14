import { useGet, post, patch, remove } from '../api';
import type { Tag } from '~/entities/tags';

export function findAllTags(): Promise<{ data: Tag[] | undefined }> {
  return useGet('/tags');
}

export function findOneTag(id: number): Promise<{ data: Tag | undefined }> {
  return useGet(`/tags/${id}`);
}

export function createTag(tagData: Omit<Tag, 'id'>) {
  return post('/tags', tagData);
}

export function updateTag(id: number, tagData: Partial<Tag>) {
  return patch(`/tags/${id}`, tagData);
}

export function deleteTag(id: number) {
  return remove(`/tags/${id}`);
}