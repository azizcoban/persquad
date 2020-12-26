const axios = require('axios').default;

export const getMenuItems = async () => {
  // TODO read the env variable

  const response = await axios.get(`${process.env.CMS_BASE_URL}/main-menu`);

  return response;
};

export const getHomePage = async () => {
  const response = await axios.get();

  return response;
};
