import { Router } from "express";
import { listarTareas, listarTarea, crearTarea, actualizarTarea, eliminarTarea } from "../controllers/tareas.controller.js";
import {isAuth} from "../middlewares/auth.midlewares.js"

const router = Router();

router.get('/tareas', isAuth, listarTareas);

router.get('/tareas/:id', isAuth, listarTarea);

router.post('/tareas', isAuth, crearTarea);

router.put('/tareas/:id', isAuth, actualizarTarea);

router.delete('/tareas', isAuth, eliminarTarea);

export default router;