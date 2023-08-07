import { Router } from "express";
import { findAll, findFiltrar } from "../controllers/estudiantesController.js";

const routerEstudiantes = Router();

routerEstudiantes.get('/',findAll);
routerEstudiantes.get('/filter',findFiltrar);

export{
    routerEstudiantes
}