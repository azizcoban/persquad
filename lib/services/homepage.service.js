const axios = require('axios').default;

export const getMenuItems = async () => {
  const response = await axios.get(`${process.env.NEXT_PUBLIC_CMS_BASE_URL}/main-menu`);

  return response.data;
};

export const getHomePage = async () => {
  const response = await axios.get();

  return response;
};
