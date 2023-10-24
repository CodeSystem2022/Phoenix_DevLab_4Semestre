import { Link } from "react-router-dom";
import { Card, Input, Button, Label } from "../components/ui";
import { useForm } from "react-hook-form";
function LoginPage() {
  const { register, handleSubmit } = useForm();
  const onSubmit = handleSubmit((data) => {
    console.log(data);
  });


  return (

    <div className="h-[calc(100vh-64px)] flex items-center justify-center">

      <Card>

        <h1 className="text-4x1 font-bold my-2 text-center">Iniciar sesión</h1>

        <form onSubmit={onSubmit}>

          <Label htmlFor="email">Email</Label>
          <Input type="email" placeholder="Ingrese su email"{
            ...register("email", {
              required: true,
            })}>
          </Input>

          <Label htmlFor="password">Contraseña</Label>
          <Input type="password" placeholder="Ingrese su contraseña"{
            ...register("password", {
              required: true,
            })}>
          </Input>
          
          <Button>Ingresar</Button>

        </form>

        <div className="flex justify-between my-4">
          <p>¿No tienes una cuenta?</p>
          <Link to="/register">Registrate</Link>
        </div>
      </Card>

    </div>
  )
}

export default LoginPage