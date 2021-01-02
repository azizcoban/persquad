import cmsInstance from './base';

export const getMenuItems = async () => {
  const { data, status } = await cmsInstance.get('/main-menu');
  if (status !== 200) {
    throw new Error(data.message);
  }
  return data;
};

export const getLandingPage = async () => {
  const { data, status } = await cmsInstance.get('/landing-page');

  if (status !== 200) {
    throw new Error(data.message);
  }

  return data;
};
