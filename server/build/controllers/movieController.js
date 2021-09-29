"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class MoviesControler {
    index(req, res) {
        res.send('Game');
    }
}
const moviesController = new MoviesControler();
exports.default = moviesController;
