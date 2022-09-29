import st from './Cards.module.css';

export function Cards({ stageId, info }) {
    function peso(weigth) {
        if (weigth !== 'Sin datos') return weigth + ' kg';
        return weigth;
    }
    return (
        <>
            {info?.lifecycle.map((items, index) => {
                return (
                    <form key={index} className={items.stage === 'Nacimiento' ? st.bird : st.container} action=''>
                        {items.stage === 'Nacimiento' ? (
                            <>
                                <div className={st.idName}>
                                    {items.stage}
                                    <br />
                                    <br />
                                    <hr />
                                </div>
                                <br />
                                <br />
                                <br />
                                <br />
                                <div className={st.titles}>
                                    Camada:
                                    <br />
                                    Fecha:
                                    <br />
                                    Peso al destete:
                                </div>
                                <div className={st.ask}>
                                    {items.state}
                                    <br />
                                    {items.date}
                                    <br />
                                    {peso(items.weigth)}
                                </div>
                            </>
                        ) : (
                            <>
                                <div className={st.idName}>{items.stage}</div>
                                <hr />
                                <br />
                                <br />
                                <br />
                                <div className={st.titles}>
                                    Fecha pronosticada:
                                    <br />
                                    <br />
                                    Peso final:
                                    <br />
                                    Fecha real:
                                </div>
                                <div className={st.ask}>
                                    {items.approDate}
                                    <br />
                                    <br />
                                    {peso(items.weigth)}
                                    <br />
                                    {items.date}
                                </div>
                            </>
                        )}
                    </form>
                );
            })}
        </>
    );
}
