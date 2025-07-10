export function getUrl(url: string, params: Record<string, string>): string;

export function doGet(
  url: string,
  params?: Record<string, string>,
  token?: string = ""
): Promise<Response>;

export function doPost(
  url: string,
  params?: Record<string, string>,
  body?: object | string,
  token?: string = ""
): Promise<Response>;

export function doDelete(
  url: string,
  params?: Record<string, string>,
  token?: string = ""
): Promise<Response>;
