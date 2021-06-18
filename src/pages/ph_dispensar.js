import InputPac from "../components/inputbarpatient";
import DataTable from "../components/collapsibletable";
import Conven from "../components/convention";
import { useState } from "react";

function PhDisp() {
  const [name, setName] = useState("");

  const handleChangeInput = (e) => {
    setName(e.target.value);
  };


  return (
    <div className="flex flex-col bg-pic-login h-screen bg-center bg-no-repeat bg-cover font-Rosario">
      <div className="flex flex-col mx-auto mt-1 h-1/5 w-15/16 rounded-2xl">
        <div className="m-0 bg-white border-green-600 border-2 rounded-3xl h-1/3 w-full text-center text-2xl text-green-600 font-bold">
          Dispensación de Medicamentos
        </div>
        <div className="mx-0 mt-1 bg-white border-green-600 border-2 rounded-2xl h-2/3 w-full">
          <div className="flex flex-row m-0 rounded-2xl h-1/2 w-full">
            <div className="bg-green-600 rounded-br-2xl rounded-tl-xl px-5 py-1 border-green-600 border-2 text-white text-xl">
              Paciente
            </div>
            <InputPac
              value={name}
              onChange={handleChangeInput}
              id="name"
              title="Nombre"
            />
            <InputPac
              value={name}
              onChange={handleChangeInput}
              id="ident"
              title="Identificación"
            />
            <InputPac
              value={name}
              onChange={handleChangeInput}
              id="cama"
              title="Cama"
            />
            <InputPac
              value={name}
              onChange={handleChangeInput}
              id="serv"
              title="Servicio"
            />
          </div>
          <div className="flex flex-row m-0 rounded-2xl h-1/2 w-full">
            <InputPac
              value={name}
              onChange={handleChangeInput}
              id="fecha"
              title="Buscar desde"
            />
            <InputPac
              value={name}
              onChange={handleChangeInput}
              id="nombregen"
              title="Nombre Genérico"
            />
            {name !== "juan" && (
              <InputPac
                value={name}
                onChange={handleChangeInput}
                id="bodega"
                title="Bodega que despacha"
              />
            )}
          </div>
        </div>
      </div>
      <div className="flex flex-row mx-auto	my-2 h-4/5 w-15/16">
        <div className="flex flex-col ml-0 mr-2 w-13/16">
          <div className="bg-white border-green-600 border-2 rounded-2xl h-7/8">
            <DataTable />
          </div>
          <div className="flex justify-between bg-white border-green-600 border-2 rounded-3xl mt-1 h-1/8">
            <div className="ml-5">
              <img
                src="/logo_pl.png"
                alt="logo Pharma-Link"
                className="h-16 pb-1"
              ></img>
            </div>
            <div className="flex flex-row-reverse mr-5">
              <button className="my-3 px-12 bg-green-600 text-white text-center font-bold rounded-3xl cursor-pointer ml-5">
                Aceptar
              </button>
              <button className="my-3 px-12 bg-green-600 text-white text-center font-bold rounded-3xl cursor-pointer ml-5">
                Imprimir
              </button>
              <button className="my-3 px-12 bg-green-600 text-white text-center font-bold rounded-3xl cursor-pointer">
                Ayuda
              </button>
            </div>
          </div>
        </div>
        <div className="flex flex-col m-0 rounded-2xl w-3/16">
          <div className="flex flex-col mb-1 bg-white border-green-600 border-2 rounded-2xl h-3/12">
            <div className="text-center text-green-600 font-bold text-sm h-1/4 hover: cursor-default">
              Tiempo en espera
            </div>
            <Conven color="#FEFE33" op="0.6" text="&lt; 6 horas" />
            <Conven color="#66B032" op="0.6" text="&gt;= 6 horas" />
            <Conven color="#8601AF" op="0.5" text="&gt;= 12 horas" />
          </div>
          <div className="flex flex-col mb-1 bg-white border-green-600 border-2 rounded-2xl h-3/12">
            <div className="text-center text-green-600 font-bold text-sm h-1/4 hover: cursor-default">
              Prioridad
            </div>
            <Conven color="#FE2712" op="0.6" text="Urgentes" />
            <Conven color="#A3C8EF" op="0.6" text="Sugeridos" />
            <Conven color="#FB9902" op="0.6" text="Maternidad gratuita" />
          </div>
          <div className="flex flex-col bg-white border-green-600 border-2 rounded-2xl h-6/12">
            <div className="text-center text-green-600 font-bold text-sm h-1/4 hover: cursor-default">
              Estado
            </div>
            <Conven color="#153437" op="0.6" text="Autorización en trámite" />
            <Conven color="#DBE4CF" op="1" text="Formulación con esquema" />
            <Conven color="#288568" op="0.6" text="Formulación modificados" />
            <Conven color="#FFD1BA" op="0.6" text="Interacción medicamentosa" />
            <Conven
              color="#0391CE"
              op="0.6"
              text="Interacción + Conciliación"
            />
            <Conven color="#A7194B" op="0.6" text="Suministro suspendido" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default PhDisp;
