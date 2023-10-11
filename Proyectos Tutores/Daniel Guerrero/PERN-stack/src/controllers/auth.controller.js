import { pool } from "../db.js"
import bcrypt from 'bcrypt'; //importamos bcrypt
import { createAccessToken } from "../libs/jwt.js";
import { json } from "express";

export const signin = async (req, res) => { 
    const {email, password} = req.body;

    const result = await pool.query("SELECT * FROM usuarios WHERE email = $1", [email]);

    if (result.rowCount === 0) {
        return res.status(400).json({message: "El correo no esta registrado"});
    }

    const validPassword = await bcrypt.compare(password, result.rows[0].password);

    if (!validPassword) {
        return res.status(400).json({message: "La contraseña es incorrecta"});
    }

    const token = await createAccessToken({id: result.rows[0].id });
    console.log(result);
    res.cookie("token", token,{
        httpOnly: true,
        secure: false,
        samSite: "none",
        maxAge: 60 *60 *24 * 1000,}) // 1day})
    return res.json(result.rows[0]);



};

export const signup = async (req, res, next) => {
    const { name, email, password } = req.body;

    try {
        //encriptamos el password antes de que lo ingrese a la bd
        const hashedPassword = await bcrypt.hash(password, 10); //se repite entre 10 y 15 veces el algoritmo
        console.log(hashedPassword);

        const result = await pool.query("INSERT INTO usuarios (name, email, password) VALUES ($1, $2, $3) RETURNING *", [name, email, hashedPassword]); //guardamos la contraseña ya hasheada

        const token = await createAccessToken({id: result.rows[0].id });
        console.log(result);
        res.cookie("token", token,{
            httpOnly: true,
            secure: false,
            samSite: "none",
            maxAge: 60 *60 *24 * 1000,}) // 1day})
        return res.json(result.rows[0]);
    } catch (error) {
        if(error.code === "23505"){
            return res.status(400).json({message: "El correo ya esta registrado"})
        }
        next (error);

    }
};
export const signout = (req, res) => {
    res.clearCookie("token");
    return res.json({message: "Sesion cerrada"});
};
    

export const profile = async (req, res) => {
    const result = await pool.query('SELECT * FROM usuarios WHERE id = $1', [req.usuarioId]);
    return res.json(result.rows[0]);
}
