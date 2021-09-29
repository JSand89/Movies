import {Request,Response} from 'express'
import pool from '../database'

class MoviesController{

  public async list (req:Request,res:Response){
    const movies=await pool.query('SELECT * FROM movie')
    res.json({text:movies})
    }
  public async getOne(req:Request,res:Response):Promise<any>{
    const {id}=req.params;
  const movies= await pool.query('SELECT * FROM movie WHERE mov_id=?',[id])
  if(movies.length>0){
 
  return  res.json(movies[0])
  }
  res.status(404).json({text:"Pelicula no encontrada"})

  }

  public async create (req:Request,res:Response): Promise<void>{
  await pool.query('INSERT INTO movie set ?',[req.body] )
      res.json({text:'Pelicula Guardada'})
  }
  public async delete(req:Request,res:Response){
    const {id}=req.params;
   await pool.query('DELETE FROM movie WHERE mov_id=?',[id])
    res.json({message:'Pelicula elminada'})
  }
  public async update(req:Request,res:Response){
    const {id}=req.params;
  await  pool.query('UPDATE movie set ? WHERE mov_id=?',[id])
    res.json({message:'Pelicula Acualizada'})
  }
}

const moviesController=new MoviesController();

export default moviesController;