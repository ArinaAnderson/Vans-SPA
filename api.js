import axios from 'axios';

const getRequest = async (url) => {
  /*
  const response = await axios.get(url);
  const { data } = response;
  return data;
  */
  try {
    const response = await axios.get(url);
    console.log('RESPONSE', response);
    if (response.status > 299) {
      throw {
        message: "Failed to fetch vans", 
        statusText: res.statusText,
        status: res.status
      }
    }

    const { data } = response;

    // if (data === null || data.vans === null || data.vans === undefined || vans === null || vans === undefined) {
    if (data === null || data.vans === null || data.vans === undefined ) {
      console.log('URL', url, response);
      throw new Error('No data to show.');
    }

    return data.vans;
  } catch(e) {
    console.log('ERRORORRRRRR');
    throw new Error(e.message);
  }
};

export default getRequest;

/*
export async function loginUser(creds) {
  const res = await fetch("/api/login",
      { method: "post", body: JSON.stringify(creds) }
  )
  const data = await res.json()

  if (!res.ok) {
      throw {
          message: data.message,
          statusText: res.statusText,
          status: res.status
      }
  }

  return data
}
*/


export const loginUser2 = async (creds) => {
  try {
    const res = await fetch('/api/login', { method: "post", body: JSON.stringify(creds) });

    const data = await res.json();
    if (!res.ok) {
      throw {
        message: data.message,
        statusText: res.statusText,
        status: res.status
      };
    }
    console.log('SPIRALLLLL', res)
    return data;
  } catch(e) {
    throw new Error(e.message);
  }
};


export const loginUser = async (cred) => {
  try {
    const res = await axios.post('/api/login', {
      password: cred.password,
      email: cred.email,
    });
    console.log('RESPONSE', res)
    const { data } = res;
    return data;
  } catch(e) {
    
    console.log('ERROR RESPONSE', e.response);
    throw new Error(e.response.data.message, {cause: e.response});
  }
};

