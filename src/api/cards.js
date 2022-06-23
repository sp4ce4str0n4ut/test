import { http } from './setup';

export const fetchCards = async (page, CARDS_PER_PAGE) => {
  return http.get(`/cards?_page=${page}&_limit=${CARDS_PER_PAGE}`);
};
