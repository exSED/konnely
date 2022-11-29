import st from './NewSemen.module.css';

import { faXmark } from '@fortawesome/free-solid-svg-icons';

import { Buttons } from '../../0-GeneralComp/1-Buttons/Buttons';
import { FormSemen } from './components/FormTrats/FormSemen';

export function NewSemen() {
    return (
        <>
            <div className={st.leftMenu}>
                <div className={st.btnBack}>
                    {/**Este boton tiene que enviar los datos del conejo para lograr regresar a al componenete de la ruta '/vitae'*/}
                    <Buttons direction='rigth' btnIconText={faXmark} label='Cancelar' route='/vitae' />
                </div>
            </div>
            <div className={st.optionContainer}>
                <FormSemen />
            </div>
        </>
    );
}