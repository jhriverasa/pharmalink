import "tailwindcss/tailwind.css";
import { Fragment } from "react";
import Head from "next/head";
import { dataUser } from "./api/dataUser";
import { users } from "./index";

const numbers = [1, 2, 3, 4, 5];
const Main = () => {
  return (
    <div className="flex bg-cover h-screen bg-center bg-no-repeat font-Rosario" style={{ backgroundImage: 'url(/background1.png)' }}>
      <div className="flex-1 rounded-l-lg border border-green-300 bg-white py-14 px-28 my-20 ml-60">
        <div className="text-gray-800 text-xl border-black">
          <table class="table-auto w-80">
            <tbody>
              <tr className="border-b-2 border-black">
                <td>A</td>
              </tr>
              <tr className="border-b-2 border-gray-400">
                <td>Administración de cuentas</td>
              </tr>
              <tr className="border-b-2 border-gray-400">
                <td>Admisiones</td>
              </tr>
              <tr className="border-b-2 border-gray-400">
                <td>Apoyo terapéutico</td>
              </tr>
            </tbody>
          </table>
        </div>

      </div>
      <div className="flex-1 border border-transparent rounded-r-lg text-center py-12 px-24 bg-gradient-to-b from-blue to-green my-20 mr-60">
        {
          dataUser.map((data) => {
            if (data.estado == 1) {
              return (
                <div className="text-white text-4xl pt-12">
                  {"Bienvenid@ " + data.name}
                </div>
              );
            }
          })
        }
      </div>
    </div>
  );
};

export default Main;
