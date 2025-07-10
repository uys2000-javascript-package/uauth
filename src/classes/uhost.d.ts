export class UHost {
  local: string;
  test: string;
  production: string;
  host: string;
  constructor(
    environment: "local" | "test" | "production",
    local?: string,
    test?: string,
    production?: string
  );
}
