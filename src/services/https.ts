export const getUrl = (url: string, params: Record<string, string> = {}) => {
  const uri = new URL(url);
  Object.keys(params).forEach((key) => {
    if (!params[key]) return;
    uri.searchParams.set(key, params[key]);
  });
  return uri.toString();
};

export const get = async (url: string, params?: Record<string, string>) => {
  return fetch(getUrl(url, params), { method: "GET" });
};

export const post = async (
  url: string,
  params?: Record<string, string>,
  body?: object | string
) => {
  return fetch(getUrl(url, params), {
    method: "POST",
    body: JSON.stringify(body),
  });
};
