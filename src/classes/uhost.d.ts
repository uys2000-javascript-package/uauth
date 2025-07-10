export class UHost {
  local: string;
  test: string;
  production: string;
  host: string;
  constructor(
    environment: "local" | "test" | "production",
    service: string,
    local?: string,
    test?: string,
    production?: string
  );
}
