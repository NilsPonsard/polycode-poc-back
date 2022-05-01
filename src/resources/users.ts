import { Drash } from "../deps.ts";

export class UsersResource extends Drash.Resource {
    public paths = ["/users"];

    public GET(_request: Drash.Request, response: Drash.Response) {
        return response.json({ hello: "world" });
    }
}
