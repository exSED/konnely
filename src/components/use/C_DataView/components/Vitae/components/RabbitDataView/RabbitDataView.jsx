import st from './RabbitDataView.module.css';

import app from '../../../../../../firebase/credentials';

import { useEffect, useState } from 'react';
import { basicData } from '../../../../../0-GeneralComp/0-StaticData/dataProv';
import { collection, getFirestore, onSnapshot, query, where } from 'firebase/firestore';
import { Buttons } from '../../../../../0-GeneralComp/1-Buttons/Buttons';
import { faPenToSquare } from '@fortawesome/free-solid-svg-icons';

const db = getFirestore(app);

export function RabbitDataView({ stageId }) {
	const [data_, setData_] = useState([]);
	useEffect(() => {
		const q = query(collection(db, 'rabbits'), where('id', '==', stageId));
		onSnapshot(q, (snapshot) => setData_(snapshot.docs.map((doc) => ({ ...doc.data() }))));
	}, [stageId]);

	return (
		<>
			{basicData.id !== null && (
				<>
					<div className={st.initInfo}>
						<div className={st.rabbitImg}>
							<img src={data_[0]?.url} alt="" />
						</div>
						<br />
						{data_[0]?.id}
						<br />
						<br />
						<hr />
						<br />
					</div>
					<div className={st.tit}>
						Datos Básicos
						<div>
							<Buttons
								route="/formEdit"
								label="Editar"
								direction="bottom"
								btnIconText={faPenToSquare}
							/>
						</div>
					</div>
					<br />
					<br />
					<br />
					<div className={st.panelData}>
						<div className={st.titles}>
							Estado:
							<br />
							<br />
							Raza:
							<br />
							Genero:
							<br />
							<br />
							Concepción:
							<br />
							Fecha:
							<br />
							Procedencia:
							<br />
							<br />
							ID. Madre:
							<br />
							ID. Padre:
						</div>
						<div className={st.ask}>
							----------------------------
							<br />
							<br />
							{data_[0]?.raza} ({data_[0]?.porcentaje}%)
							<br />
							{data_[0]?.genero}
							<br />
							<br />
							{data_[0]?.concepcion}
							<br />
							{data_[0]?.nacimiento}
							<br />
							{data_[0]?.origen}
							<br />
							<br />
							{data_[0]?.idMadre}
							<br />
							{data_[0]?.idPadre}
						</div>
					</div>
					<br />
					<br />
					<br />
				</>
			)}
		</>
	);
}
