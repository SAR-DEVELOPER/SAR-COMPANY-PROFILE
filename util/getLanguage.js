//util/getLanguage.js

import Cookies from 'js-cookie';

export const getLanguage = () => {
  const language = Cookies.get('language');  // Replace with the actual cookie name you're using
  return language || 'id';  // Default to 'id' if no language cookie is found
};
