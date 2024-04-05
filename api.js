import axios from 'axios';

const getRequest = async (url) => {
  /*
  const response = await axios.get(url);
  const { data } = response;
  return data;
  */
  try {
    const response = await axios.get(url);

    if (response.status > 299) {
      throw {
        message: "Failed to fetch vans", 
        statusText: res.statusText,
        status: res.status
      }
    }

    const { data } = response;

    if (data.vans === null || data.vans === undefined) {
      console.log('URL', url)
      throw new Error('NO ACCESS.');
    }

    return data.vans;
  } catch(e) {
    console.log('ERRORORRRRRR');
    throw new Error(e.message);
  }
};

export default getRequest;
