"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express = require("express");
const router_1 = require("./recipe/router");
const app = express();
const PORT = 8000;
class Server {
    constructor() {
        const app = express();
        this.app = app;
    }
    setRoute() {
        this.app.use(router_1.default);
    }
    setMiddleware() {
        this.app.use((req, res, next) => {
            next();
        });
        this.app.use(express.json());
        this.setRoute();
        this.app.use((req, res, next) => {
            res.send({ error: '404 not found error' });
        });
    }
    listen() {
        this.setMiddleware();
        this.app.listen(PORT, () => {
            console.log(`🚀Server is running on http://localhost:${PORT} ✅`);
        });
    }
}
function init() {
    const server = new Server();
    server.listen();
}
init();
//# sourceMappingURL=app.js.map