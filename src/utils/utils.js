import { redirect } from 'react-router-dom';

export const buildString = (arr = []) => {
  const res = arr.reduce((acc, el, idx) => {
    if (idx === arr.length - 1 && arr.length > 1) {
      return acc.concat(' and ', el)
    }
    return acc.length === 0 ? acc.concat(el) : acc.concat(', ', el);
  }, '');
  return res;
} 

export const requireAuth = async () => {
  const isLoggedIn = true;
  if (!isLoggedIn) {
    throw redirect('/login/?message=Please%2C+login+first');
  }
};


