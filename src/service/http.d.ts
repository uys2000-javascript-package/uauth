export function getUrl(url: string, params: Record<string, string>): string;

export function get(
  url: string,
  params?: Record<string, string>,
  useCcredentials: boolean = false
): Promise<Response>;

export function post(
  url: string,
  params?: Record<string, string>,
  body?: object | string,
  useCcredentials: boolean = false
): Promise<Response>;
