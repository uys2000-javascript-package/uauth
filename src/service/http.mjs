export const getUrl = (url, params = {}) => {
  const uri = new URL(url);
  Object.keys(params).forEach((key) => {
    if (!params[key]) return;
    uri.searchParams.set(key, params[key]);
  });
  return uri.toString();
};

export const doGet = async (url, params, token) => {
  const headers = {};
  if (token) headers.Token = token;
  return window.fetch(getUrl(url, params), {
    headers: headers,
    method: "GET",
  });
};

export const doPost = async (url, params, body, token) => {
  const headers = {};
  if (token) headers.Token = token;
  return window.fetch(getUrl(url, params), {
    headers: headers,
    method: "POST",
    body: JSON.stringify(body),
  });
};

export const doDelete = async (url, params, token) => {
  const headers = {};
  if (token) headers.Token = token;
  return window.fetch(getUrl(url, params), {
    headers: headers,
    method: "DELETE",
  });
};
