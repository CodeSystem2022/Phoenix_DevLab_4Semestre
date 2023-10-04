import { Pool } from "../db.js";


export const signin = (req, res)=> res.send('ingresando');

export const signup = (req, res)=> {
    const{username, email, password}= req.body;
    res.send("Registrando")

    pool.query("INSERT INTO usuarios (name, email, password) VALUES ($1, $2, $3)", [name, email, password])
};

export const signout = (req, res)=> res.send('Cerrando sesion');

export const profile = (req, res)=> res.send('Perfil de ususario');