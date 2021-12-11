import { Social } from '@mysrtafes2022-layouts/types/Social';

export const socialOrder = {
  twitter: 0,
  twitch: 1,
  youtube: 2,
  nico: 3,
} as const;

export const searchExistsSocial = (social: Social): number[] => {
  const exists = [];
  if (social.twitter) exists.push(socialOrder.twitter);
  if (social.twitch) exists.push(socialOrder.twitch);
  if (social.youtube) exists.push(socialOrder.youtube);
  if (social.nico) exists.push(socialOrder.nico);

  return exists;
};
