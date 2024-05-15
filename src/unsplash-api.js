import axios from 'axios';

const BASE_URL = 'https://api.unsplash.com/search/photos';
const API_KEY = 'GutzWhJlebKY8N7qPVWJDCNd5sEIL4D_v_7YVMoz0Z4';
const per_page = 16;

export async function searchImages(query, page) {
  const params = {
    client_id: API_KEY,
    orientation: 'landscape',
    page: page,
    per_page: per_page,
    query: query,
  };

  const response = await axios.get(BASE_URL, { params });

  return response.data;
}
