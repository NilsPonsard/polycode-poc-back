import { initDatabase } from "./database-connexion.ts";
import { startServer } from "./server.ts";

initDatabase();
startServer();
