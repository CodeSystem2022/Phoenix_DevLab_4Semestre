import { Router } from "express";

const router = Router();

router.get("/tareas",(req, res)=> res.send('Obteniendo tareas'));
router.get("/tareas/:id", (req, res)=> res.send('Obteniendo tarea unica'));
router.post("/tareas", (req, res)=> res.send('Creando tarea'));
router.put("/tareas/:id", (req, res)=> res.send('Actualizando tarea unica'));
router.delete("/tareas/:id",(req, res)=> res.send('Eliminando tarea unica'))

export default router;