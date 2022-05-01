import { Drash } from "./deps.ts";
import { UsersResource } from "./resources/users.ts";

const resources: typeof Drash.Resource[] = [UsersResource];

// Configure and start the Drash server
export function startServer() {
    // Read port from environment

    const rawPort = Deno.env.get("PORT");
    const port = rawPort ? parseInt(rawPort) : 3000;

    const server = new Drash.Server({
        hostname: "0.0.0.0",
        port,
        protocol: "http",
        resources,
    });

    server.run();

    console.log("Server started on port " + port);
}
