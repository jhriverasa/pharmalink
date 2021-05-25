import "tailwindcss/tailwind.css";
import { Fragment } from "react";
import Head from "next/head";


const Home = () => {
  return (
    <div className="flex bg-cover h-screen bg-center bg-no-repeat font-Rosario" style={{backgroundImage: 'url(/background1.png)'}}>
      <div className="flex-1 rounded-l-lg border border-green-300 bg-white py-14 px-32 my-20 ml-60">
        <img src={'/logo.png'} className="min-w-full"/>
        
        <div className="text-black text-xl pt-12">Usuario</div>
        <input className="border border-gray-300 rounded-2xl w-80 h-14 bg-gray-100"></input>
        
        <div className="text-black text-xl pt-7">Contraseña</div>
        <input className="border border-gray-300 rounded-2xl w-80 h-14 bg-gray-100"></input>

        <button className="border border-gray-600 rounded-2xl w-80 h-14 bg-gray-500 mt-16 text-white font-bold text-xl">
          Iniciar sesión
        </button>
      </div>
      <div className="flex-1 border border-transparent rounded-r-lg text-center py-12 px-28 bg-gradient-to-b from-blue to-green my-20 mr-60">
        <div className="text-white text-3xl pt-44">¡Bienvenido!</div>
        <div className="text-white text-3xl">Ingresa tus datos para poder comenzar a disfrutar de la plataforma</div>
      </div>    
    </div>
  );
};

export default Home;
