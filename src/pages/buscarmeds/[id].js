import { useRouter } from "next/router";
import { Separator } from "~/components/primitive";
import database from "~/data/database.json";

function BusqMeds() {
  const router = useRouter();
  const { id } = router.query;

  const userData = database.users.find((reg) => {
    return reg.id.toString() === id;
  });

  return (
    <div className="flex items-center justify-center bg-pic-login h-screen bg-center bg-no-repeat bg-cover font-Rosario">
      <div className="flex rounded-lg border border-green-base-1 w-2/3">
        <div className="w-1/2 bg-white px-14 pt-7 pb-16">
          <div className="flex flex-col justify-center">
            <h1 className="text-center text-green-base-1 text-3xl font-bold mb-14">
              Farmacia
            </h1>

            <div
              className="font-bold pb-2 pt-2 text-2xl cursor-pointer hover:text-green-base-1 hover:bg-gray-200"
              onClick={(e) => {
                e.preventDefault();
                router.push("/dispensing");
              }}
            >
              Dispensación
            </div>
            <Separator color="#000000" size="2px" />
            <div className="font-bold pb-2 pt-9 text-2xl">Despacho</div>
            <Separator color="#000000" size="2px" />
            <div className="ml-3">
              <div className="py-3 text-2xl cursor-pointer hover:text-green-base-1 hover:bg-gray-200">
                Farmacia
              </div>
              <Separator color="#a4a0a0" size="1px" />
              <div className="py-3 text-2xl cursor-pointer hover:text-green-base-1 hover:bg-gray-200">
                Directos
              </div>
              <Separator color="#a4a0a0" size=  "1px" />
              <div className="py-3 text-2xl cursor-pointer hover:text-green-base-1 hover:bg-gray-200">
                Remisión
              </div>
              <Separator color="#a4a0a0" size="1px" />
              <div className="py-3 text-2xl cursor-pointer hover:text-green-base-1 hover:bg-gray-200">
                Especiales
              </div>
              <Separator color="#a4a0a0" size="1px" />
            </div>
            <div className="pt-6">
              <div className="font-bold pb-2 pt-3 text-2xl cursor-pointer hover:text-green-base-1 hover:bg-gray-200">
                Devoluciones
              </div>
            </div>

            <Separator color="#000000" size="2px" />
          </div>
        </div>
        <div className="flex justify-center w-1/2 p-12 bg-gradient-to-b from-login-blue to-login-green">
          <div className="text-xl">{`Bienvenid@, ${userData.name} !`}</div>
        </div>
      </div>
    </div>
  );
}

export default BusqMeds;
