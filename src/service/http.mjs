export const getUrl = (url, params = {}) => {
  const uri = new URL(url);
  Object.keys(params).forEach((key) => {
    if (!params[key]) return;
    uri.searchParams.set(key, params[key]);
  });
  return uri.toString();
};

export const getToken = async () => {
  const token = await window.cookieStore.get("token");
  return token.value;
};

export const get = async (url, params, useCcredentials = false) => {
  return window.fetch(getUrl(url, params), {
    headers: {},
    method: "GET",
    credentials: useCcredentials ? "include" : undefined,
  });
};

export const post = async (url, params, body, useCcredentials = false) => {
  return window.fetch(getUrl(url, params), {
    headers: {},
    method: "POST",
    body: JSON.stringify(body),
    credentials: useCcredentials ? "include" : undefined,
  });
};
