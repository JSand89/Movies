import {Request,Response} from 'express'

class IndexControler{

  public index (req:Request,res:Response){
       res.json('text: API is /api/game')
    }
}

export const indexControler=new IndexControler();