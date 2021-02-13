import { cmsInstance, apiInstance } from './base';

export const registerCustomer = async (userData) => {
  const { data, status } = await cmsInstance.post('/auth/local/register', userData);

  if (status !== 200) {
    throw new Error(data.message);
  }
  return data;
};

export const loginCustomer = async (userData) => {
  const { data, status } = await apiInstance.post('/api/auth/callback/credentials', userData);

  if (status !== 200) {
    throw new Error(data.message);
  }
  return data;
};

export const loginCMSUser = async (userData) => {
  const { data, status } = await cmsInstance.post('/auth/local', userData);

  if (status !== 200) {
    throw new Error(data.message);
  }
  return data;
};
