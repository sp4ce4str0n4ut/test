import { http } from './setup';

export const fetchFilters = async () => {
  return http.get('/filters');
};
