import st from './NewRepro.module.css';

import { newTreats } from '../../0-GeneralComp/0-StaticData/options';

import { LeftBottomMenu } from '../../0-GeneralComp/1-PanelButtons/LeftBottomMenu/LeftBottomMenu';

import { litterPrueba } from '../../0-GeneralComp/2-FakeData/reproductiveCycle';
import { Cards } from './components/Cards/Cards';

export function NewRepro() {
    return (
        <>
            <LeftBottomMenu
                backCancel={newTreats}
                click={() => {
                    window.history.back();
                }}
            />
            <div className={st.optionContainer}>
                {litterPrueba?.map((item, index) => (
                    <Cards key={index} id={item.id} litterPrueba={litterPrueba[0]} stages={item.stages} />
                ))}
            </div>
        </>
    );
}