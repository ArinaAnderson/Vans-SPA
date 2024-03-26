import axios from 'axios';

const getRequest = async (url) => {
  const response = await axios.get(url);
  const { data } = response;
  return data;
  /*
  try {
    const reponse = await axios.get(url);
    const allVans = reponse.data.vans;
    console.log('FENYA',res.ok, allVans)
    return allVans;
  } catch(e) {
    throw new Error('FAILED!!!!');
  }
  */
};

export default getRequest;
