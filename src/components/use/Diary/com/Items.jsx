import imgCat from '../../../img/ma2.png';
import st from '../css/Com.module.css';

export const Items = ({ items }) => {
	return (
		<>
			{items.map((item) => (
				<div className={st.container}></div>
			))}
		</>
	);
};
