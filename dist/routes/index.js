"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const router = (0, express_1.Router)();
// http://localhost:5000/api/v1/example
router.get('/example', (req, res) => {
    res.send("HOLA MUNDO");
});
exports.default = router;
