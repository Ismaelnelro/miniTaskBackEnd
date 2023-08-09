"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Server = void 0;
const express_1 = __importDefault(require("express"));
const morgan_1 = __importDefault(require("morgan"));
const cors_1 = __importDefault(require("cors"));
const colors_1 = __importDefault(require("@colors/colors"));
const index_1 = __importDefault(require("./routes/index"));
const app = (0, express_1.default)();
class Server {
    constructor() {
        this.port = Number(process.env.PORT) || 5000;
        this.app = (0, express_1.default)();
        this.corsOptions = {
            origin: "*",
            methods: ['GET', 'POST', 'PUT', 'PATCH', 'DELETE', 'OPTIONS'],
            allowedHeaders: ['Content-Type', 'Authorization', 'multipart/form-data'],
            credentials: true,
            preflightContinue: true,
        };
        this.config();
        this.routes();
    }
    config() {
        this.app.use((0, morgan_1.default)('dev'));
        this.app.use((0, cors_1.default)(this.corsOptions));
        this.app.use(express_1.default.json());
        this.app.use(express_1.default.urlencoded({ extended: true }));
    }
    routes() {
        this.app.use('/api/v1', index_1.default);
    }
    listen() {
        this.app.listen(this.port, () => {
            console.log(colors_1.default.bgBlue.white(` ** Server Running on port ${this.port} **`));
        });
    }
}
exports.Server = Server;
