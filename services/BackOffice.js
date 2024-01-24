const API_URL = 'https://backoffice.zaproszenia.com//wp-json/wc/v3';

const makeApiCall = (url, options) => fetch(url, {...options, headers: {
  'Authorization': 'Basic Y2tfMWUzZDVhNDMyZTI2NTAyODE2ODlhOWI0ZjQwZGQ1ZGJmMzliMTE0ZDpjc184M2JkZDIxMWQ2MmFmNDg1NzE4NGI3YjY3YzM1ZGU4M2I1MDUxYjgw',
  ...options.headers,
}});

const fetchData = async (url, options = {}) => {
  const response = await makeApiCall(API_URL + url, options);
  return response.json();
}

const getProductCategories = () => fetchData('/products/categories');
const getProducts = () => fetchData('/products');

export default {
  getProductCategories,
  getProducts,
}