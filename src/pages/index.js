import "tailwindcss/tailwind.css";
import { Fragment } from "react";
import Head from "next/head";
import { useState } from "react";
import Button from "./Button";
import Input from "./Input";
import { dataUser } from "./api/dataUser";

const Home = () => {
  const [username, setUsername] = useState("");
  const [password, setpassword] = useState("");
  const handleSend = () => {
    alert(`User: ${username}, Password: ${password}`);
  }

  return (
<<<<<<< HEAD
    <div className="flex bg-cover h-screen bg-center bg-no-repeat font-Rosario" style={{ backgroundImage: 'url(/background1.png)' }}>
      <div className="flex flex-row m-auto">
        <div className="flex flex-col w-1/2 rounded-l-lg border border-green-300 bg-white py-14 px-32 my-20 ml-60">
          <img src={'/logo.png'} className="min-w-full" />

          <div className="text-black text-xl pt-12">Usuario</div>
          <Input tipo="text" nombre="username" valueF={username} setFunction={setUsername} />
          {
            dataUser.map((data) => {
              if (data.username == username) {
                { data.estado = 1 }
                return (
                  <div>
                    {data.name}
                  </div>
                );
              } else {
                { data.estado = 0 }
              }
            })
          }
          <div className="text-black text-xl pt-7">Contraseña</div>
          <Input tipo="password" nombre="password" valueF={password} setFunction={setpassword} />

          <Button onSend={handleSend} value="Iniciar sesión" hyper="/mainmenu" />
        </div>
        <div className="flex flex-col w-1/2 border border-transparent rounded-r-lg text-center py-12 px-28 bg-gradient-to-b from-blue to-green my-20 mr-60">
          <div className="text-white text-3xl pt-44">¡Bienvenido!</div>
          <div className="text-white text-3xl">Ingresa tus datos para poder comenzar a disfrutar de la plataforma</div>
        </div>
      </div>

    </div>
=======
    <div>WELCOME</div>
>>>>>>> main
  );
};

export default Home;
