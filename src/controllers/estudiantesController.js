import {request,response} from "express";
import { Estudiante } from "../models/estudiantes.js";
import { Curso } from "../models/cursos.js";
 
 const findAll=async(req=request,res = response)=>{
    try {
        const estudiantes = await  Estudiante.findAll({
              include:Curso
        });
        res.json({
            msg:'findAll',
            estudiantes
        });
    } catch (error) {
        res.status(500).json({
            msg:'contacte al administrador'
        });
    }
 }
 const findFiltrar = async(req=request,res = response)=>{
    const {idEstudiante} = req.body; 
    try {
        const estudiantesFiltrados = await Estudiante.findAll({
            where:{
                'id_estudiante': idEstudiante
            }
        })
        res.json({
            msg: 'findFilter',
            estudiantesFiltrados
         });
    } catch (error) {
        
    }
    
 }
export{
    findAll,
    findFiltrar
}