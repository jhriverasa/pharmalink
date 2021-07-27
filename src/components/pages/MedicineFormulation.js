import { useState } from "react";
import { Check, FormInput, InformationBox, Select } from "~/components/primitive";
import Checkbox from '@material-ui/core/Checkbox';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import DataTable from "../collapsibletable";
import Convention from "../convention";

const MedicineFormulation = () => {
    const [name, setName] = useState("");

    const handleChangeInput = (e) => {
        setName(e.target.value);
    };
    const [state, setState] = useState({
        checkedA: true,
        checkedB: true,
        checkedF: true,
        checkedG: true,
    });

    const handleChange = (event) => {
        setState({ ...state, [event.target.name]: event.target.checked });
    };
    return (
        <div className="flex flex-col bg-pic-login h-screen bg-center bg-no-repeat bg-cover font-Rosario">
            <div className="flex flex-col mx-auto mt-1 h-1/5 w-15/16 rounded-2xl">
                <div className="m-0 bg-white border-blue-base-1 border-2 rounded-3xl h-1/3 w-full text-center text-2xl text-blue-base-1 font-bold p-1.5">
                    Formulación de Medicamentos
                </div>
                <div className="flex flex-row w-full">
                    <div className="flex flex-col w-1/2 bg-white border-blue-base-1 border-2 rounded-2xl mt-1 mr-0.5">
                        <div className="flex justify-between items-stretch w-full">
                            <div className="bg-blue-base-1 rounded-r-2xl rounded-tl-xl px-5 py-1 border-blue-base-1 text-white text-xl">
                                Paciente
                            </div>
                        </div>
                        <div className="flex justify-between items-stretch mx-4 my-1">
                            <InformationBox
                                value="Segundo Rojas Rojas"
                                name="name"
                                title="Nombre"
                            />
                        </div>
                        <div className="flex justify-between items-stretch my-1">
                            <div className="flex justify-between items-stretch w-1/3 ml-4 mr-1">
                                <InformationBox
                                    value="CC"
                                    name="name"
                                    title="Identificación"
                                />
                            </div>
                            <div className="flex justify-between items-stretch w-1/3 ml-0 mr-2">
                                <InformationBox
                                    value="781900"
                                    name="name"
                                />
                            </div>
                            <div className="flex justify-between items-stretch w-1/3 ml-1 mr-4">
                                <InformationBox
                                    value="85"
                                    name="name"
                                    title="Edad"
                                />
                            </div>
                        </div>
                        <div className="flex justify-between items-stretch my-1">
                            <div className="flex justify-between items-stretch w-2/3 ml-4 mr-2">
                                <InformationBox
                                    value="Masculino"
                                    name="name"
                                    title="Género"
                                />
                            </div>
                            <div className="flex justify-between items-stretch w-1/3 ml-1 mr-4">
                                <InformationBox
                                    value="74 kg"
                                    name="name"
                                    title="Peso"
                                />
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-col w-1/2 bg-white border-blue-base-1 border-2 rounded-2xl mt-1 ml-0.5">
                        <div className="flex justify-between items-stretch w-full">
                            <div className="bg-blue-base-1 rounded-r-2xl rounded-tl-xl px-5 py-1 border-blue-base-1 text-white text-xl">
                                Datos de interés
                            </div>
                        </div>
                        <div className="flex justify-between items-stretch my-1">
                            <div className="flex justify-between items-stretch w-2/3 ml-4 mr-2">
                                <InformationBox
                                    value="355458"
                                    name="name"
                                    title="No. Historia"
                                />
                            </div>
                            <div className="flex justify-between items-stretch w-1/3 ml-1 mr-4">
                                <InformationBox
                                    value="209"
                                    name="name"
                                    title="Cama"
                                />
                            </div>
                        </div>
                        <div className="flex justify-between items-stretch my-1">
                            <div className="flex justify-between items-stretch w-2/3 ml-4 mr-2">
                                <InformationBox
                                    value="Café Salud EPS"
                                    name="name"
                                    title="EPS"
                                />
                            </div>
                            <div className="flex justify-between items-stretch w-1/3 ml-1 mr-4">
                                <InformationBox
                                    value="9513"
                                    name="name"
                                    title="Registro"
                                />
                            </div>
                        </div>
                        <div className="flex justify-between items-stretch mx-4 my-1">
                            <InformationBox
                                value="Gastroenteritis"
                                name="name"
                                title="Último Dx"
                            />
                        </div>
                    </div>
                </div>
                <div className="flex flex-row w-full items-end">
                    <div className="flex flex-col w-19/20 bg-white border-blue-base-1 border-2 rounded-2xl mt-1 mr-0.5">
                        <div className="flex justify-between items-stretch my-1">
                            <label className="ml-4 mr-1">Antecedentes:</label>
                            <div className="flex flex-stretch w-9/20 ml-0 mr-2">
                                <FormInput
                                    value={name}
                                    name="precedent"
                                    type="text"
                                    onChange={handleChangeInput}
                                />
                            </div>
                            <div className="flex flex-col ml-1 mr-1">
                                <label className="mr-1">Suministro:</label>
                                <label className="mr-1">Urgente</label>
                                {/*<FormControlLabel
                                    control={<Checkbox checked={state.checkedA} onChange={handleChange} name="checkedA" />}
                                    label="Urgente"
                                />*/}
                            </div>
                            <div className="flex flex-stretch w-1/4 ml-0 mr-2">
                                <FormInput
                                    value={name}
                                    name="supply"
                                    type="text"
                                    onChange={handleChangeInput}
                                />
                            </div>
                            <div className="flex flex-col ml-1 mr-4 w-1/12">
                                {/*<FormControlLabel
                                    control={<Checkbox checked={state.checkedA} onChange={handleChange} name="checkedA" />}
                                    label="Ambulatoria"
                                />
                                <FormControlLabel
                                    control={<Checkbox checked={state.checkedA} onChange={handleChange} name="checkedA" />}
                                    label="Concilación"
                                />
                                <FormControlLabel
                                    control={<Checkbox checked={state.checkedA} onChange={handleChange} name="checkedA" />}
                                    label="Esquema"
                                />*/}
                                <label className="mr-1 -mb-1">Ambulatoria</label>
                                <label className="mr-1 -mb-1">Concilación</label>
                                <label className="mr-1">Esquema</label>
                            </div>
                        </div>
                        <div className="flex flex-row w-full justify-between items-stretch">
                            <div className="flex flex-col w-7/8">
                                <div className="flex justify-between items-stretch my-1">
                                    <div className="flex justify-between items-stretch w-2/10 ml-4 mr-2">
                                        <InformationBox
                                            value="1"
                                            name="name"
                                            title="Dosis"
                                        />
                                    </div>
                                    <div className="flex justify-between items-stretch w-2/10 ml-2 mr-2">
                                        <InformationBox
                                            value="Oral"
                                            name="name"
                                            title="Vía"
                                        />
                                    </div>
                                    <div className="flex justify-between items-stretch w-2/10 ml-2 mr-2">
                                        <InformationBox
                                            value="1"
                                            name="name"
                                            title="Días Trata"
                                        />
                                    </div>
                                    <div className="flex justify-between items-stretch w-3/10 ml-2 -mr-2 pl-3">
                                        <label className="mr-1">Observaciones:</label>
                                    </div>
                                </div>
                                <div className="flex justify-between items-stretch my-1">
                                    <div className="flex justify-between items-stretch w-2/10 ml-4 mr-2">
                                        <InformationBox
                                            value="mg"
                                            name="name"
                                            title="Unidad"
                                        />
                                    </div>
                                    <div className="flex justify-between items-stretch w-2/10 ml-2 mr-2">
                                        <InformationBox
                                            value=""
                                            name="name"
                                            title="Fr/Hora"
                                        />
                                    </div>
                                    <div className="flex justify-between items-stretch w-2/10 ml-2 mr-2">
                                        <InformationBox
                                            value="100 mg"
                                            name="name"
                                            title="Cant.Solic"
                                        />
                                    </div>
                                    <div className="flex justify-between items-stretch w-3/10 ml-2 -mr-2 pl-3 -mt-2.5">
                                        <InformationBox
                                            value=""
                                            name="observation"
                                        />
                                    </div>
                                </div>
                            </div>
                            <div className="flex w-1/12 mr-4 mb-1">
                                <button className="bg-blue-base-1 text-white text-center font-bold rounded-3xl cursor-pointer">
                                    Búsqueda de Medicamento
                                </button>
                            </div>
                        </div>
                    </div>

                    <div className="flex flex-col w-1/20 h-1/2 bg-white border-blue-base-1 border-2 rounded-2xl mr-0.5 justify-center items-center">
                        <div className="flex bg-blue-base-1 rounded-xl p-2 h-ful">
                            <img src="/search-icon-topbar.png" width="30px"></img>
                        </div>
                    </div>

                </div>
                <div className="flex flex-row w-full">
                    <div className="flex flex-col w-8/10">
                        <div className="flex w-full  h-60 bg-white border-blue-base-1 border-2 rounded-2xl mt-1 mr-0.5">

                        </div>
                        <div className="flex justify-between w-full bg-white border-blue-base-1 border-2 rounded-2xl mt-1 mr-0.5">
                            <div className="ml-5">
                                <img
                                    src="/logo_pl.png"
                                    alt="logo Pharma-Link"
                                    className="h-16 pb-1"
                                ></img>
                            </div>
                            <div className="flex flex-row-reverse mr-4 my-3">
                                <button className="bg-blue-base-1 text-white text-center font-bold rounded-3xl cursor-pointer px-4 mx-1">
                                    Aceptar
                                </button>
                                <button className="bg-blue-base-1 text-white text-center font-bold rounded-3xl cursor-pointer px-4 mx-1">
                                    Imprimir
                                </button>
                                <button className="bg-blue-base-1 text-white text-center font-bold rounded-3xl cursor-pointer px-4 mx-1">
                                    Ayuda
                                </button>
                                <button className="bg-blue-base-1 text-white text-center font-bold rounded-3xl cursor-pointer px-4 mx-1">
                                    Histórico formulación
                                </button>
                                <button className="bg-blue-base-1 text-white text-center font-bold rounded-3xl cursor-pointer px-4 mx-1">
                                    Generar CTC
                                </button>
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-col w-2/10 justify-between items-stretch">
                        <div className="flex flex-row bg-white border-blue-base-1 border-2 rounded-2xl mt-1 ml-0.5">
                            <label className="text-blue-base-1 font-bold ml-4 mr-1.5 my-1">Profesional: </label>
                            <label className="ml-1.5 my-1">Pepito Pérez Pinto</label>
                        </div>
                        <div className="flex flex-col w-full bg-white border-blue-base-1 border-2 rounded-2xl mt-1 ml-0.5 pb-1">
                            <div className="text-blue-base-1 font-bold text-center mt-1">
                                Prioridad
                            </div>
                            <Convention color="#FE7D71" opacity="1" text="Urgentes" />
                            <Convention color="#FDC267" opacity="1" text="Marternidad gratuita" />
                        </div>
                        <div className="flex flex-col w-full bg-white border-blue-base-1 border-2 rounded-2xl mt-1 ml-0.5 pb-1">
                            <div className="text-blue-base-1 font-bold text-center mt-1">
                                Estado
                            </div>
                            <Convention color="#FEFE85" opacity="1" text="NO POS" />
                            <Convention color="#A3D084" opacity="1" text="Promoción y prevención" />
                            <Convention color="#FFD1BA" opacity="0.6" text="Interacción medicamentosa" />
                            <Convention color="#0391CE" opacity="0.6" text="Interacción + Conciliación" />
                            <Convention color="#A7194B" opacity="0.6" text="Conciliación Farmacoterapéutica" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MedicineFormulation;