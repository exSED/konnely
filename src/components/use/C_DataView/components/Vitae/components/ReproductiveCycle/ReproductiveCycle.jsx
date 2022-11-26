import st from "./ReproductiveCycle.module.css";

import { faRectangleList } from "@fortawesome/free-solid-svg-icons";
import { Option } from "./components/Option";
import { Buttons } from "../../../../../0-GeneralComp/1-Buttons/Buttons";

import { QueriesSimple_ } from "../../../../../../firebase/funtions/GetInformation";

export function ReproductiveCycle({ reproductivecycle, uid }) {
	const reproductiveCycles = QueriesSimple_({
		coleccion: "reproductive",
		parametro: "uidMother",
		busqueda: uid,
	}).props.children;
	const cm = (
		<>
			<div className={st.tit}>
				Camada
				<div>
					<Buttons
						route='/litterList'
						label='Lista de camadas'
						direction='bottom'
						btnIconText={faRectangleList}
					/>
				</div>
			</div>
			<br />
			<Option op={reproductivecycle} uid={uid} rep={reproductiveCycles} />
		</>
	);
	return cm;
}
