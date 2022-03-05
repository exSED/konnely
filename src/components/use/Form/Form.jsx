import style_F from '../../css/Form/Form.module.css';
import app from "../../firebase/credentials";
import { getFirestore, collection, addDoc } from "firebase/firestore";
import { useState } from "react";
import { getStorage, ref, uploadBytes, getDownloadURL } from "firebase/storage";
import { Inputs } from '../Tools/Inputs';
const db = getFirestore(app);
const storage = getStorage(app);

export function Form (props){

	const init = {};
	const [image, setImage] = useState();
	const [values, setValues] = useState(init);
	const [stateM, setStateM] = useState(false);
	const [stateH, setStateH] = useState(false);

	function HaveImage(e) {
		setImage(e);
	}

	const handleChange = (e) => {
		const { name, value } = e.target;
		setValues({ ...values, [name]: value });
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		addInfo(values);
	};

	const addInfo = async (Objeto) => {
		try {
			const storageRef = ref(storage, image.name);
			await uploadBytes(storageRef, image);
			const urlDescarga = await getDownloadURL(storageRef);
			Objeto.url = urlDescarga;
			await addDoc(collection(db, "conejos"), { Objeto });
		} catch (e) {
			console.error("Error adding document: ", e);
		}
	};

    return(
    <>
        <div className={props.clsName}>
            <div className={style_F.panel}>
			    <Inputs clsName={style_F.file_1} type_="file"/>

            </div>
        </div>
    </>
    );
}