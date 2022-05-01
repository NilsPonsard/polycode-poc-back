import {
    Database,
    PostgresConnector,
} from "./deps.ts";
import { Users } from "./models/users.ts";

const models = [Users];

// Database connexion & initialization
export function initDatabase(): Database {
    // get database info from environment

    const host = Deno.env.get("DB_HOST") ?? "localhost";
    const rawPort = Deno.env.get("DB_PORT");
    const port = rawPort ? parseInt(rawPort) : 5432;
    const username = Deno.env.get("DB_USER") ?? "postgres";
    const password = Deno.env.get("DB_PASSWORD") ?? "postgres";
    const database = Deno.env.get("DB_DATABASE") ?? "postgres";

    // use the postgres connector

    const connector = new PostgresConnector({
        host,
        port,
        username,
        password,
        database,
    });
    const db = new Database(connector);

    // initialize the database

    db.link(models);
    db.sync();

    return db;
}
