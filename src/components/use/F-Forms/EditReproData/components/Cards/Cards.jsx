import st from './Cards.module.css';

import { Ref } from './components/Ref/Ref';
import { Editors } from './components/Editors/Editors';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFloppyDisk } from '@fortawesome/free-solid-svg-icons';
import {
    conditionalBasisEdit,
    conditionalNextEdit,
} from '../../../../0-GeneralComp/0-StaticData/Dates/conditionals';
import { useState } from 'react';
import { useAuth } from '../../../../../../context/AuthContext';
import { formatCycleReproductive } from '../../../../0-GeneralComp/0-StaticData/Dates/format';
import { UpdateReproductiveCycle } from '../../../../../firebase/funtions/AddInformation';

export function Cards({ id, item, stages }) {
    const { user } = useAuth();
    const [date, setDate] = useState(stages[0].date);
    function handleChange(e) {
        if (e.target.name === 'DateInitial') {
            e.target.value = conditionalBasisEdit(e.target.value, null);
            setDate(e.target.value);
        } else {
            e.target.value = conditionalNextEdit(e.target.value, null, date);
        }
        if (e.target.name === 'DateInitial' && e.target.value === '') {
            setDate(null);
            e.target.value = null;
        }
    }
    return (
        <div className={st.container}>
            <div className={st.panelId}>
                {id}
                <br />
                <Editors />
            </div>
            <br />
            <form
                className={st.panelInfo}
                onSubmit={(e) => {
                    e.preventDefault();
					UpdateReproductiveCycle(formatCycleReproductive(e, item, user));
                }}>
                {stages?.map((element) => {
                    return (
                        <>
                            <Ref stage={element} handleChange={handleChange} date={date} />
                        </>
                    );
                })}
                <div className={st.btn}>
                    <button type='submit'>
                        <button
                            onClick={() => {
                                window.history.back();
                            }}>
                            <figure title='Guardar cambios' tooltip-dir='top'>
                                <FontAwesomeIcon icon={faFloppyDisk} />
                            </figure>
                        </button>
                    </button>
                </div>
            </form>
        </div>
    );
}
