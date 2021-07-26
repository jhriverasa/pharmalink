import Inputbarlogin from "../components/inputbarlogin";
import { useState } from "react";
import { Button } from "~/components/primitive";
import { useRouter } from "next/router";
import database from "~/data/database.json";

const Login = () => {
  const router = useRouter();
  //Creación de variables y funciones para modificarlas
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  //Muestra de entradas en ventana de bienvenida
  const handleLogin = (e, user, pass) => {
    e.preventDefault();
    const userData = database.users.find((reg) => {
      return reg.username === user && reg.password === pass;
    });
    if (!userData) {
      console.log("invalid user");
    } else {
      router.push(`/buscarmeds/${userData.id}`);
    }
  };
  //Renderizado
  return (
    <div className="flex bg-pic-login h-screen bg-center bg-no-repeat bg-cover font-Rosario">
      <div className="flex h-5/6 w-3/4 m-auto rounded-2xl">
        <div className="flex flex-col border-2 border-green-600 h-full w-1/2 rounded-l-2xl">
          <div className="flex bg-white h-1/3 w-full rounded-tl-2xl">
            <img className="p-4 h-full m-auto" src={"/logo_pl1.png"}></img>
          </div>
          <div className="flex bg-white h-2/3 w-full rounded-bl-2xl">
            <form className="mx-auto">
              <label className="text-xl">
                Usuario
                <Inputbarlogin
                  picurl="/usuario_login.jpeg"
                  alt="ícono usuario"
                  tip="text"
                  name="usuario"
                  val={username}
                  update={setUsername}
                />
              </label>
              <br></br>
              <label className="text-xl">
                Contraseña
                <Inputbarlogin
                  picurl="/llave_login.png"
                  alt="ícono contraseña"
                  tip="password"
                  name="contraseña"
                  val={password}
                  update={setPassword}
                />
              </label>
              <Button
                value="Iniciar Sesión"
                data={username}
                onClick={(e) => {
                  handleLogin(e, username, password);
                }}
              />
            </form>
          </div>
        </div>
        <div className="flex bg-gradient-to-b from-login-blue via-blue-300 to-login-green h-full w-1/2 rounded-r-2xl">
          <p className="m-auto text-white text-center text-3xl">
            ¡Bienvenid@!<br></br>Ingresa tus datos para acceder a tu plataforma
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
