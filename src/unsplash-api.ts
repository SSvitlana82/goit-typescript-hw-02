import axios from 'axios';
import { Image } from './models/ImageModel';
const BASE_URL: string = 'https://api.unsplash.com/search/photos';
const API_KEY: string = 'GutzWhJlebKY8N7qPVWJDCNd5sEIL4D_v_7YVMoz0Z4';
const per_page: number = 16;

type Params = {
  client_id: string;
  orientation: 'landscape' | 'portraite';
  page: number;
  per_page: number;
  query: string;
};

export async function searchImages(
  query: string,
  page: number
): Promise<{
  results: Image[];
  total_pages: number;
}> {
  const params: Params = {
    client_id: API_KEY,
    orientation: 'landscape',
    page: page,
    per_page: per_page,
    query: query,
  };

  const response = await axios.get(BASE_URL, { params });

  return response.data;
}
