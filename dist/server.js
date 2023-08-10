"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Server = void 0;
const express_1 = __importDefault(require("express"));
const morgan_1 = __importDefault(require("morgan"));
const cors_1 = __importDefault(require("cors"));
const path_1 = __importDefault(require("path"));
const colors_1 = __importDefault(require("@colors/colors"));
const config_1 = __importDefault(require("./config"));
const connection_1 = require("./connection");
const index_1 = __importDefault(require("./routes/index"));
class Server {
    constructor() {
        this.port = Number(process.env.PORT) || 5000;
        this.app = (0, express_1.default)();
        this.config();
        this.routes();
    }
    config() {
        this.app.use((0, morgan_1.default)('dev'));
        this.app.use((0, cors_1.default)(config_1.default.corsOptions));
        this.app.use(express_1.default.json());
        this.app.use(express_1.default.urlencoded({ extended: true }));
        this.app.use(express_1.default.static(path_1.default.join(__dirname, 'public')));
    }
    routes() {
        this.app.use('', index_1.default);
    }
    listen() {
        (0, connection_1.connection)();
        this.app.listen(this.port, () => {
            console.log(colors_1.default.bgBlue.white(` ** Server Running on port ${this.port} **`));
        });
    }
}
exports.Server = Server;
