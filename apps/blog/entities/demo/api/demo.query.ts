import { keepPreviousData } from '@tanstack/react-query';

import { queryOptions } from '@tanstack/react-query';
import { getList } from './get-list';

export const demoQueries = {
  all: () => ['posts'],

  lists: () => [...demoQueries.all(), 'list'],
  list: (page: number, limit: number) =>
    queryOptions({
      queryKey: [...demoQueries.lists(), page, limit],
      queryFn: () => getList(page, limit),
      placeholderData: keepPreviousData,
    }),

  // details: () => [...demoQueries.all(), 'detail'],
  // detail: (query?: PostDetailQuery) =>
  //   queryOptions({
  //     queryKey: [...demoQueries.details(), query?.id],
  //     queryFn: () => getDetailPost({ id: query?.id }),
  //     staleTime: 5000,
  //   }),
};
