"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.setRoutes = void 0;
const index_1 = __importDefault(require("../controllers/index"));
function setRoutes(app) {
    const indexController = new index_1.default();
    app.get('/', indexController.getIndex);
}
exports.setRoutes = setRoutes;
