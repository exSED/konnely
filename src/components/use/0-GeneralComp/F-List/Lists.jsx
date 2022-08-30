import st from './styles/Lists.module.css';

export function Lists(props) {
    const action = (e) => {
        props.handleChange(e);
    };

    return (
        <>
            {props.listar[0] !== 'Loading...' && (
                <div className={st.container}>
                    <h1>{props.leyend}</h1>
                    <select className={st.list_} name={props.name_} onChange={action} defaultValue={props.value_}>
                        {props.listar?.map((a) => (
                            <option key={a} value={a}>
                                {a}
                            </option>
                        ))}
                    </select>
                </div>
            )}
        </>
    );
}
