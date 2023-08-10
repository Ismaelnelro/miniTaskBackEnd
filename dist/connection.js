"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.connection = void 0;
const mongoose_1 = __importDefault(require("mongoose"));
const colors_1 = __importDefault(require("@colors/colors"));
const config_1 = __importDefault(require("./config"));
const connection = () => {
    //permite hacer consultas en campos quew no se definieron en el esquema de modelo, desactivado genera ingreso de datos no validos
    mongoose_1.default.set('strictQuery', false);
    const options = {
        useNewUrlParser: true,
        useUnifiedTopology: true
    };
    mongoose_1.default.connect(config_1.default.database, options)
        .then(() => console.log(colors_1.default.bgYellow.black(" DB connected successfully")))
        .catch((error) => console.log(colors_1.default.bgYellow.black(" DB connection error" + error)));
};
exports.connection = connection;
