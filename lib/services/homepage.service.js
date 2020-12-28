import cmsInstance from './base';

export const getMenuItems = async () => {
  const { data, status } = await cmsInstance.get('/main-menu');
  if (status !== 200) {
    throw new Error(data.message);
  }
  return data;
};

export const getHomePage = async () => {
  const { data, status } = await cmsInstance.get();

  if (status !== 200) {
    throw new Error(data.message);
  }
  return data;
};
