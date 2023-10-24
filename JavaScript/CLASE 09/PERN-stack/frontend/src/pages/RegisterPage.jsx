import { Button, Card, Input, Label } from "../components/ui"; //importamos todo en una línea
import { useForm } from 'react-hook-form';
import { Link } from "react-router-dom";
import axios from "axios";

function RegisterPage() {

  const { register, handleSubmit, formState: { errors } } = useForm();

  const onSubmit = handleSubmit(async (data) => {
    // console.log(data);

    // //enviamos los datos al backend
    // const response = await fetch("http://localhost:3000/api/signup", {
    //   credentials: "include",
    //   //'Access-Control-Allow-Origin': true,
    //   method: "POST",
    //   body: JSON.stringify(data), //data es todo lo del formulario de registro
    //   headers: {
    //     "Content-Type": "application/json",
    //   }
    // });
    // const json = await response.json()


    //VAMOS A HACER UN MÉTODO POST AL LOCALHOST:3000 USANDO AXIOS
    const res = await axios.post("http://localhost:3000/api/signup", data, {
      withCredentials: true, //hacemos que nos muestre las credenciales
    });
    console.log(res);
  });

  // console.log(errors); //muestra los errores que tiene

  return (
    <div className="h-[calc(100vh-64px)] flex items-center justify-center">
      <Card>
        <h3 className="text-4xl font-bold my-2">Registro</h3>
        <form onSubmit={onSubmit}>

          <label htmlFor="name">Nombre</label>
          <Input placeholder="Ingrese su nombre"
            {...register("name", { required: true })}></Input>

          {
            errors.name && <p className="text-red-500">Este campo es requerido</p>

          }

          <label htmlFor="email">Email</label>
          <Input type="email" placeholder="Ingrese su email"
            {...register("email", { required: true })}></Input>

          {
            errors.email && <p className="text-red-500">Este campo es requerido</p>

          }

          <label htmlFor="password">contraseña</label>
          <Input type="password" placeholder="Ingrese su contraseña"
            {...register("password", { required: true })}></Input>
          {
            errors.password && <p className="text-red-500">Este campo es requerido</p>

          }
          <Button>Registrarse</Button>
        </form>

        <div className="flex justify-between my-4">
          <p>¿Ya tienes una cuenta?</p>
          <Link to="/login">Iniciar sesión</Link>
        </div>

      </Card>
    </div>
  );
}

export default RegisterPage;
