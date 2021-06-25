import { FormInput } from "~/components/primitive";
import DataTable from "../collapsibletable";
import Convention from "../convention";
import { useState } from "react";

const MedicineDispensing = () => {
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
            <FormInput
              value={name}
              name="name"
              title="Nombre"
              type="text"
              onChange={handleChangeInput}
            />
            <FormInput
              value={name}
              name="id"
              title="Identificación"
              type="text"
              onChange={handleChangeInput}
            />
            <FormInput
              value={name}
              name="bed"
              title="Cama"
              type="text"
              onChange={handleChangeInput}
            />
            <FormInput
              value={name}
              name="service"
              title="Servicio"
              type="text"
              onChange={handleChangeInput}
            />
          </div>
          <div className="flex flex-row m-0 rounded-2xl h-1/2 w-full">
            <FormInput
              value={name}
              name="date"
              title="Buscar desde"
              type="date"
              onChange={handleChangeInput}
            />
            <FormInput
              value={name}
              name="generic"
              title="Nombre Genérico"
              type="text"
              onChange={handleChangeInput}
            />
            {name !== "juan" && (
              <FormInput
                value={name}
                name="warehouse"
                title="Bodega que despacha"
                type="text"
                onChange={handleChangeInput}
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
            <Convention color="#FEFE33" opacity="0.6" text="&lt; 6 horas" />
            <Convention color="#66B032" opacity="0.6" text="&gt;= 6 horas" />
            <Convention color="#8601AF" opacity="0.5" text="&gt;= 12 horas" />
          </div>
          <div className="flex flex-col mb-1 bg-white border-green-600 border-2 rounded-2xl h-3/12">
            <div className="text-center text-green-600 font-bold text-sm h-1/4 hover: cursor-default">
              Prioridad
            </div>
            <Convention color="#FE2712" opacity="0.6" text="Urgentes" />
            <Convention color="#A3C8EF" opacity="0.6" text="Sugeridos" />
            <Convention
              color="#FB9902"
              opacity="0.6"
              text="Maternidad gratuita"
            />
          </div>
          <div className="flex flex-col bg-white border-green-600 border-2 rounded-2xl h-6/12">
            <div className="text-center text-green-600 font-bold text-sm h-1/4 hover: cursor-default">
              Estado
            </div>
            <Convention
              color="#153437"
              opacity="0.6"
              text="Autorización en trámite"
            />
            <Convention
              color="#DBE4CF"
              opacity="1"
              text="Formulación con esquema"
            />
            <Convention
              color="#288568"
              opacity="0.6"
              text="Formulación modificados"
            />
            <Convention
              color="#FFD1BA"
              opacity="0.6"
              text="Interacción medicamentosa"
            />
            <Convention
              color="#0391CE"
              opacity="0.6"
              text="Interacción + Conciliación"
            />
            <Convention
              color="#A7194B"
              opacity="0.6"
              text="Suministro suspendido"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default MedicineDispensing;
