import { useQuery } from '@tanstack/react-query';
import { demoQueries } from '~/entities/demo/api/demo.query';

export const useFetchList = () => {
  const { data, isLoading, error } = useQuery(demoQueries.list(1, 10));

  return { data, isLoading, error };
};
