import { cmsInstance } from './base';

export const getUserOnboardingContent = async () => {
  const { data, status } = await cmsInstance.get('/user-onboarding');

  if (status !== 200) {
    throw new Error(data.message);
  }
  return data;
};
