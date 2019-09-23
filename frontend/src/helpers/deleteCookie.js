export const deleteCookie = cname => {
  let d = new Date();
  d.setTime(d.getTime() - 1000 * 60 * 60 * 24);
  let expires = 'expires=' + d.toGMTString();
  window.document.cookie = `${cname}=;${expires}`;
};
