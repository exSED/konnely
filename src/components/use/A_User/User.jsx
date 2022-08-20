import st from './style/User.module.css';

import { useEffect, useState } from 'react';

import { optionsData } from './scripts/optionsData';

import { UserData } from './components/UserData';
import { Option } from './components/Option';

export function User() {
	const [optionSelect, setOptionSelect] = useState(0);

	useEffect(() => {
		async function setSelect() {
			if (optionSelect !== null) {
				try {
					const recuest = optionSelect;
					if (recuest === String) {
						console.log(recuest);
					}
				} catch (error) {
					console.log();
				}
			}
		}
		setSelect();
	}, [optionSelect]);

	return (
		<>
			<div className={st.container}>
				<div className={st.menuLeft}>
					{optionsData.map((option) => {
						return (
							<button
								key={option.id}
								className={st.optionST}
								onClick={() => {
									setOptionSelect(option.id);
								}}
							>
								{option.icon}
							</button>
						);
					})}
				</div>
				<div className={st.panel}>
					<Option op={optionSelect}></Option>
				</div>
				<div className={st.menuRigth}>
					<UserData />
				</div>
			</div>
		</>
	);
}
