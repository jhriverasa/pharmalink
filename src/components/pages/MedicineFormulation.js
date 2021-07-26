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
                <div className="flex flex-row w-full">
                    <div className="flex flex-col w-15/16 bg-white border-blue-base-1 border-2 rounded-2xl mt-1 mr-0.5">
                        <div className="flex justify-between items-stretch my-1">
                            <label className="ml-4 mr-1">Antecedentes:</label>
                            <div className="flex flex-stretch w-3/8 ml-0 mr-2">
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
                            <div className="flex flex-col ml-1 mr-4">
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
                                <label className="mr-1">Ambulatoria</label>
                                <label className="mr-1">Concilación</label>
                                <label className="mr-1">Esquema</label>
                            </div>
                        </div>
                        <div className="flex justify-between items-stretch w-7/8 my-1">
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
                        <div className="flex justify-between items-stretch w-7/8 my-1">
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
                    <div className="flex flex-col flex-end w-1/16 h-1/2 bg-white border-blue-base-1 border-2 rounded-2xl mt-1 mr-0.5">

                    </div>
                </div>
            </div>
        </div>
    );
};

export default MedicineFormulation;