import st from './css/NewTrats.module.css';

import { useState } from 'react';
import { Inputs } from '../Tools/Inputs/Inputs';
import { QueriesArray } from '../../firebase/funtions/QueriesArray';

export function NewTrats() {
    const [values, setValues] = useState({});
    function handleChange(e) {
        const { name, value } = e.target;
        setValues({ ...values, [name]: value });
    }
    QueriesArray();
    return (
        <div className={st.container}>
            <div className={st.backBTN}></div>
            <div className={st.panel}>
                <Inputs name_='tratamiento' type_='text' handleChange={handleChange} leyend='ID.Tratamiento' />

                <Inputs leyend='Fecha' type_='text' handleChange={handleChange} />

                <Inputs name_='Enfremedad' leyend='Enfermedad' type_='text' handleChange={handleChange} />

                <Inputs name_='Chequeo' leyend='Chequeo' type_='text' handleChange={handleChange} />

                <div className={st.obse}>
                    <Inputs name_='Observaciones' leyend='Obserbaciones' type_='text' handleChange={handleChange} />
                </div>

                <div className={st.imgs}>
                    <Inputs
                        name_='Imagenes'
                        leyend='Imagenes'
                        type_='file'
                        HaveImage={(e) => {
                            console.log(e);
                        }}
                    />
                </div>
            </div>
            <div className={st.saveBTN}></div>
        </div>
    );
}