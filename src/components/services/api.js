import axios from 'axios';
const API_KEY = '33720271-cfad09de7463efb54028bd049';
const BASE_URL = 'https://pixabay.com/api/';

const fetchImg = async (page, search) => {
  const URL = `${BASE_URL}?key=${API_KEY}`;
  const options = {
    params: {
      q: search,
      image_type: 'photo',
      orientation: 'horizontal',
      per_page: 12,
      page: page,
    },
  };
  const response = await axios.get(URL, options);
  return response.data.hits;
};

export default fetchImg;
