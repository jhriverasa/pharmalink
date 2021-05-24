const Home = () => {
  return (
    <div className="flex bg-pic-login h-screen bg-center bg-no-repeat bg-cover">
      <div className="flex h-5/6 w-3/4 m-auto rounded-2xl">
        <div className="flex flex-col border-2 border-green-600 h-full w-1/2 rounded-l-2xl">
          <div className="flex bg-white h-1/3 w-full rounded-tl-2xl"> 
            <img className="p-4 h-full m-auto" src={'/logo_pl1.png'}></img>
          </div>
          <div className="flex bg-white h-2/3 w-full rounded-bl-2xl">
            <form className="mx-auto">
              <label className="font-sans text-xl">
                Usuario<br></br>
                <input type="text" name="user" className="h-12 border-2 p-7 text-center border-gray-300 bg-gray-100 rounded-2xl"/>
                <br></br>
                <br></br>
              </label>
              <label className="font-sans text-xl">
                Contraseña<br></br>
                <input type="text" name="password" className="h-12 border-2 p-7 text-center border-gray-300 bg-gray-100 rounded-2xl"/>
              </label>
              <br></br>
              <br></br>
              <input type="submit" value="Iniciar sesión" className="p-3 w-full my-10 rounded-2xl bg-gray-500 text-xl text-white font-bold"/>
            </form>
          </div>
        </div>
        <div className="flex bg-gradient-to-b from-indigo-300 via-blue-300 to-green-400 h-full w-1/2 rounded-r-2xl">
          <p className="m-auto text-white text-center text-2xl">
            ¡Bienvenid@!<br></br>Ingresa tus datos para acceder a tu plataforma
          </p>
        </div>
      </div>
    </div>
  );
};

export default Home;
