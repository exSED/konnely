import  style_Li from '../../css/List/List.module.css'
import { Cards } from '../Tools/Cards';

export function List(props){

	return(
		<>
			<div className={props.clsName}>
				<div className={style_Li.panel_}>
					{/* {data.map((a) => (
					<Cards url={a.Objeto.url} rabitDataName={a.Objeto.nombre} 
							data={a} data1={a.Objeto.raza} data2 ={a.Objeto.estado}/>
					))} */}
				</div>
			</div>
		</>
	);
}