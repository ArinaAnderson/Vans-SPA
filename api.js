import axios from 'axios';

const getRequest = async (url) => {
  
  const reponse = await axios.get(url);
  const allVans = reponse.data.vans;
  console.log('FENYA', allVans)
  return allVans;
};

export default getRequest;
