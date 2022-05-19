export const USER_LOGIN = 'USER_LOGIN';
export const PROFESSIONAL_INFO = 'PROFESSIONAL_INFO';

export const actionLogin = (payload) => ({
  type: USER_LOGIN,
  payload,
});

export const actionProfessional = (infos) => ({
  type: PROFESSIONAL_INFO,
  infos,
});
