"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const morgan_1 = __importDefault(require("morgan"));
const cors_1 = __importDefault(require("cors"));
const indexRoutes_1 = __importDefault(require("./routes/indexRoutes"));
const moviesRoutes_1 = __importDefault(require("./routes/moviesRoutes"));
class Server {
    constructor() {
        this.app = (0, express_1.default)();
        this.config();
        this.routes();
    }
    config() {
        this.app.set('port', process.env.PORT || 4000); //define el puerto interno o externo donde corre mi app
        this.app.use((0, morgan_1.default)('dev')); //esto es lo que da el tiempo de respuesta
        this.app.use((0, cors_1.default)()); //es lo que permite a angular pedir datos al servidor
        this.app.use(express_1.default.json()); //es lo que me permite entender json al servidor
        this.app.use(express_1.default.urlencoded({ extended: false })); //enviar  desde un formulario html
    }
    routes() {
        this.app.use(express_1.default.static('public')); //agragado para el deploy probablemente 
        this.app.use('/', indexRoutes_1.default);
        this.app.use('/api/movies', moviesRoutes_1.default);
    }
    start() {
        this.app.listen(this.app.get('port'), () => {
            console.log(`server on port`, this.app.get('port'));
        });
    }
}
const server = new Server();
server.start();
