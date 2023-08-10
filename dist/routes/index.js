"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const path_1 = __importDefault(require("path"));
const router = (0, express_1.Router)();
const ruta = '/api/v1';
router.get('/', (req, res) => {
    const filepath = path_1.default.resolve(__dirname, '..', '..', 'public', 'index.html');
    res.sendFile(filepath);
});
router.get(`${ruta}/example`, (req, res) => {
    res.send("HOLA MUNDO");
});
exports.default = router;
