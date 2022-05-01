import {
    Database,
    PostgresConnector,
} from "https://deno.land/x/denodb@v1.0.40/mod.ts";

export function getDatabase(): Database {
    const host = Deno.env.get("DB_HOST") ?? "localhost";
    const rawPort = Deno.env.get("DB_PORT");
    const port = rawPort ? parseInt(rawPort) : 5432;
    const username = Deno.env.get("DB_USER") ?? "postgres";
    const password = Deno.env.get("DB_PASSWORD") ?? "postgres";
    const database = Deno.env.get("DB_DATABASE") ?? "postgres";

    const connector = new PostgresConnector({
        host,
        port,
        username,
        password,
        database,
    });
    return new Database(connector);
}
