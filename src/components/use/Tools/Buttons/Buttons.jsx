import { Link } from 'react-router-dom';
import st from './css/Buttons.module.css';

export function Buttons(props) {
	return (
		<>
			<div className={props.clsName}>
				<div className={st.panel_}>
					<button onClick={props.click_} onChange={props.change_} name={props.name_}>
						<Link to={props.link_}>
							<h1>{props.text_}</h1>
							<img src={props.icon_} onClick={props.cliLoa_} href="" alt="" />
						</Link>
					</button>
				</div>
			</div>
		</>
	);
}
