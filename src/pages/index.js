import Inputbarlogin from "C:/Users/juanc/Documents/UNAL/2021 - 1/TPI/Interfaz/pl/pharmalink/src/components/inputbarlogin";

const Home = () => {
  return (
    <div className="flex bg-pic-login h-screen bg-center bg-no-repeat bg-cover font-Rosario">
      <div className="flex h-5/6 w-3/4 m-auto rounded-2xl">
        <div className="flex flex-col border-2 border-green-600 h-full w-1/2 rounded-l-2xl">
          <div className="flex bg-white h-1/3 w-full rounded-tl-2xl"> 
            <img className="p-4 h-full m-auto" src={'/logo_pl1.png'}></img>
          </div>
          <div className="flex bg-white h-2/3 w-full rounded-bl-2xl">
            <form className="mx-auto">
              <label className="text-xl">
                Usuario
               <Inputbarlogin picurl="/usuario_login.jpeg" alt="ícono usuario"/>
              </label>
              <label className="text-xl">
                Contraseña<br></br>
                <img src={'/llave_login.png'} className="h-7 float-left"></img>
                <input type="text" name="password" className="h-12 border-2 p-7 text-center border-gray-300 bg-gray-100 rounded-2xl"/>
              </label><br></br><br></br>
              <input type="submit" value="Iniciar sesión" className="p-3 w-full my-10 rounded-2xl bg-gray-500 hover:bg-gray-400 text-xl text-white font-bold"/>
            </form>
          </div>
        </div>
        <div className="flex bg-gradient-to-b from-login-blue via-blue-300 to-login-green h-full w-1/2 rounded-r-2xl">
          <p className="m-auto text-white text-center text-3xl">¡Bienvenid@!<br></br>Ingresa tus datos para acceder a tu plataforma</p>
        </div>
      </div>
    </div>
  );
};

export default Home;
