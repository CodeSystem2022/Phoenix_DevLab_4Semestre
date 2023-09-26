import express from "express";
import morgan from "morgan";
import authRoutes from './router/auth.routes';
import tareaRoutes from './router/tareas.routes';
const app = express();
//middlewares
app.use(morgan("dev"));
app.use(express.json());
app.use(express.urlencoded({extended: false}));

app.get("/", (req, res) =>
  res.json({ message: "Bienvenidos a mi primer proyecto" })
);

app.use('/api',tareaRoutes);
app.use('/api', authRoutes);

//Manejando errores
app.use((err, req, res, next) => {
  res.status(500).json({
    status: "error",
    message: err.message,
  });
});

export default app;