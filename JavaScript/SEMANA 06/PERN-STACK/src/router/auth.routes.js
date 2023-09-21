import { Route } = require('express');

const router = Router();
router.post("/signin", (req, res)=> res.send("Ingresando"));
router.post("/signup", (req, res)=> res.send("Registrando"));
router.post("/sigout", (req, res)=> res.send("Cerrando sesion"));
router.get("/profile", (req, res)=> res.send("Perfil del usuario"));

export default router;