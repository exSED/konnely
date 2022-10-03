import st from './Form.module.css';

import { faFloppyDisk } from '@fortawesome/free-solid-svg-icons';
import { Buttons } from '../../../../0-GeneralComp/1-Buttons/Buttons';
export function Form({ info }) {
	return (
		<>
			<form
				className={st.container}
				onSubmit={(e) => {
					e.preventDefault();
					for (const element of e.target) {
						if (element.name !== '') {
							console.log(element.name + ': ' + element.value);
						}
					}
				}}
				action=""
			>
				{info?.map((items, index) => {
					return (
						<div key={index} className={items.stage === 'Nacimiento' ? st.bird : st.panel}>
							{items.stage === 'Nacimiento' ? (
								<></>
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
										<input defaultValue={items.weigth} type="number" name={info?.stage} />
										<br />
										<input defaultValue={items.date} type="date" name="date" />
									</div>
								</>
							)}
						</div>
					);
				})}{' '}
				<div className={st.btn}>
					<Buttons
						route="#"
						btnType="submit"
						btnIconText={faFloppyDisk}
						label="Guardar cambios"
						direction="top"
						btnClick={() => {
							window.history.back();
						}}
					/>
				</div>
			</form>
		</>
	);
}