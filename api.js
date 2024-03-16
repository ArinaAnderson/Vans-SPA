import axios from 'axios';

const getVans = async (url) => {
  const reponse = await axios.get(url);
  const allVans = reponse.data.vans;
  return allVans;
};

export default getVans;
