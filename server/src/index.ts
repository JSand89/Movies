import express,{Application} from 'express';
import morgan from 'morgan';
import cors from 'cors';

import indexRoutes from './routes/indexRoutes';
import moviesRoutes from './routes/moviesRoutes';

class Server{

    public app:Application;

    constructor(){
        this.app=express();
        this.config();
        this.routes();
    }
    config():void{
        this.app.set('port', process.env.PORT|| 4000);//define el puerto interno o externo donde corre mi app
        this.app.use(morgan('dev'));//esto es lo que da el tiempo de respuesta
        this.app.use(cors());//es lo que permite a angular pedir datos al servidor
        this.app.use(express.json());//es lo que me permite entender json al servidor
        this.app.use(express.urlencoded({extended:false}));//enviar  desde un formulario html
    }
    routes():void{
        this.app.use('/',indexRoutes)
        this.app.use('/api/movies',moviesRoutes)

    }
    start():void{
        this.app.listen(this.app.get('port'),()=>{
            console.log(`server on port`, this.app.get('port'))
        })

    }

}

const server=new Server();
server.start();