export function getUrl(url: string, params: Record<string, string>): string;

export function get(
  url: string,
  params?: Record<string, string>,
  token?: string = ""
): Promise<Response>;

export function post(
  url: string,
  params?: Record<string, string>,
  body?: object | string,
  token?: string = ""
): Promise<Response>;
