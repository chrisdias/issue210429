"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const index_1 = __importDefault(require("./controllers/index"));
const index_2 = require("./routes/index");
const app = (0, express_1.default)();
const port = process.env.PORT || 3000;
// Middleware
app.use(express_1.default.json());
// Routes
(0, index_2.setRoutes)(app, new index_1.default());
// Error handling middleware
app.use((err, req, res) => {
    console.error(err);
    res.status(500).json({ error: 'Internal Server Error' });
});
// Start the server
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
