import st from './RigthTopButtons.module.css';

import { Link } from 'react-router-dom';
import { useAuth } from '../../../../../context/AuthContext';
import { Buttons } from '../../1-Buttons/Buttons';

export function RigthTopButtons({ BTNS, u, click }) {
	const { user } = useAuth();
	return (
		<>
			<div className={st.container}>
				{u !== false ? (
					<div className={st.opUser}>
						<figure id="photo" title="Preferencias" tooltip-dir="left">
							<Link to="/users">
								<button className={st.Photo}>
									<img src={user.photoURL} alt="" />
								</button>
							</Link>
						</figure>
					</div>
				) : (
					<></>
				)}

				<div className={st.optPrincipal}>
					{BTNS.map((options) => {
						return (
							<div className={st.option} key={options.id}>
								<Buttons
									label={options.label}
									direction="top"
									route={options.path}
									btnId={options.id}
									btnName={options.label}
									btnIconText={options.icon}
									btnClick={u === false && options.path === '#' ? click : null}
								/>
							</div>
						);
					})}
				</div>
			</div>
		</>
	);
}
