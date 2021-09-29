"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class VideoControler {
    index(req, res) {
        res.send('Game');
    }
}
const videoControler = new VideoControler();
exports.default = videoControler;
