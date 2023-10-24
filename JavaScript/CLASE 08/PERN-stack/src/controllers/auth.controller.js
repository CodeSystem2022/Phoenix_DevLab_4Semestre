import { pool } from "../db.js"
import bcrypt from 'bcrypt'; //importamos bcrypt
import { createAccessToken } from "../libs/jwt.js";

export const signin = (req, res) => res.send('ingresando');

export const signup = async (req, res) => {
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

    }
};
export const signout = (req, res) => res.send('Cerrando sesion');

export const profile = (req, res) => res.send('Perfil del usuario');

