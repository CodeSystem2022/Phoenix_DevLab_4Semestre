import { Query } from "pg";
import { pool } from "../db.js"

export const listarTareas = async (req, res) => {
    console.log(req.usuarioid);
    const resultado = await pool.query('SELECT * FROM tareas');
    return res.json(resultado.rows);

}

export const listarTarea = (req, res) => async (req, res) => {
    const resultado = await pool.query('SELECT * FROM tareas WHERE id = $1', [req.params.id]);
    if (resultado.rowCount === 0) {
        return res.status(400).json({
            message: "la tarea no existe"
        });
    }
    return res.json(resultado.rows[0]);
}


export const actualizarTarea = (req, res) => async (req, res) => {
    const { titulo, descripcion } = req.body;
    const id = req.params.id;
    const resultado = await pool.query('UPDATE tareas SET titulo = $1, descripcion = $2 WHERE id = $3 RETURNING *', [titulo, descripcion, id]);
    if (resultado.rowCount === 0) {
        return res.status(400).json({
            message: "No existe tarea con ese id"
        });
    }
    return res.json(resultado.rows[0]);
}


export const eliminarTarea = (req, res) => async (req, res) => {
    const resultado = await pool.query('DELETE * FROM tareas WHERE id = $1', [req.params.id]);

    if (resultado.rowCount === 0) {
        return res.status(400).json({
            message: "No existe tarea con ese id"
        });
    }
    return res.sendStatus(204);
}
