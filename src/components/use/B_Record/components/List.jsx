import st from "./Cards/CardRecord.module.css";

import { CardRecord } from "./Cards/CardRecord";

export function List({ setOptionSelect, tratamentsActivos, tratamentsInactivos, stateCam }) {
	let trataments = [];
	if (stateCam === true) {
		trataments = tratamentsActivos;
	} else if (stateCam === false) {
		trataments = tratamentsInactivos;
	}
	return (
		<>
			{trataments !== [] ? (
				trataments.map((item, index) => (
					<>
						<CardRecord
							key={item.uid}
							id={index + 1}
							uid={item.uid}
							date={item.date}
							signs={item.signs}
							diagnosis={item.diagnosis}
							tratament={item.treatment}
							result={item.result}
							professional={item.professional}
							trataments={item}
							uidAudit={item.uidAudit}
							state={item.state}
							setOptionSelect={setOptionSelect}
						/>
					</>
				))
			) : (
				<div className={st.pan}>
					<h1>Cargando por favor espere...</h1>
				</div>
			)}
		</>
	);
}
