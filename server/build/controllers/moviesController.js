"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const database_1 = __importDefault(require("../database"));
class MoviesController {
    list(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const movies = yield database_1.default.query('SELECT * FROM movie');
            res.json({ text: movies });
        });
    }
    getOne(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            const movies = yield database_1.default.query('SELECT * FROM movie WHERE mov_id=?', [id]);
            if (movies.length > 0) {
                return res.json(movies[0]);
            }
            res.status(404).json({ text: "Pelicula no encontrada" });
        });
    }
    create(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            yield database_1.default.query('INSERT INTO movie ?', [req.body]);
            res.json({ text: 'Pelicula Guardada' });
        });
    }
    delete(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            yield database_1.default.query('DELETE FROM movie WHERE mov_id=?', [id]);
            res.json({ message: 'Pelicula elminada' });
        });
    }
    update(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            yield database_1.default.query('UPDATE movie set ? WHERE mov_id=?', [id]);
            res.json({ message: 'Pelicula Acualizada' });
        });
    }
}
const moviesController = new MoviesController();
exports.default = moviesController;
