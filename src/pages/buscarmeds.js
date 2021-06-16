import DataBase from "../data/database.json"

function BusqMeds({data}) {

  var user;

  for (let i = 0; i < DataBase.length; i++) {
    if (data==DataBase[i].username) {
      user = data;
      break;
    }
  }

  return (
    <div className="flex bg-pic-login h-screen bg-center bg-no-repeat bg-cover font-Rosario">
      <div className="flex flex-col h-5/6 w-11/12 bg-blue-500 m-auto rounded-2xl">
        <div className="">
          Bienvenid@, {user}!
        </div>
      </div>
    </div>
  );
}

export default BusqMeds
