"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const app = (0, express_1.default)();
const port = 5000;
app.get('/giftAdress', (req, res) => {
    res.status(200).json({
        success: true,
        data: {
            recipientName: 'John Doe',
            recipientAddress: '123 Main St, Anytown, USA',
        },
    });
});
app.listen(port, () => {
    console.log(`Mock API server running at http://localhost:${port}`);
});
