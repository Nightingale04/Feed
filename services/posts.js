import axios from 'axios';

const baseUrl = 'https://662029f13bf790e070af2cd8.mockapi.io/api/v1/posts';

export const getAll = async () => {
  try {
    const response = await axios.get(baseUrl);
    return response.data;
  } catch (error) {
    if (error) {
      throw new Error('Something went wrong');
    }
  }
};
