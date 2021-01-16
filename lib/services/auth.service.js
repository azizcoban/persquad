import cmsInstance from './base';

export const registerCustomer = async (userData) => {
  const { data, status } = await cmsInstance.post('/auth/local/register', userData);

  if (status !== 200) {
    throw new Error(data.message);
  }
  return data;
};
