import style_Cu from "../../css/Customer/Customer.module.css";
import { Data } from "./Data.js";
import { useState } from "react";
import { UpdateInfoProfile } from "../../firebase/funtions/AddInformation";
import { useAuth } from "../../../context/AuthContext";
import swal from "sweetalert";
import { Navigate } from "react-router-dom";

export function Customer(props) {
    const { user } = useAuth();
    const [f, setF] = useState({ user: null, data: {} });

    const ca = (e) => {
        setF({ ...f, user: user.uid, data: { tema: e.target.id } });
    };

    const c = () => {
        swal({
            title: "¿Desea cambiar el tema predeterminado?",
            icon: "warning",
            buttons: ["No", "Si"],
        }).then((respuesta) => {
            if (respuesta) {
                UpdateInfoProfile(f);
                setTimeout(recargar, 1000);
            }
        });
    };

    function recargar() {
        window.location.reload(true);
    }

    return (
        <>
            <div className={props.clsName}>
                <div className={style_Cu.panel_}>
                    {Data.map((a, index) => {
                        return (
                            <div key={index} className={style_Cu.theme}>
                                <button className={style_Cu.ch} onMouseEnter={ca}>
                                    <img
                                        className={style_Cu.preview_}
                                        id={a.backgroud}
                                        src={a.miniature_1}
                                        // src={require(a.miniature).default}
                                        onClick={c}
                                        href=""
                                        alt=""
                                    />
                                </button>
                            </div>
                        );
                    })}
                </div>
            </div>
        </>
    );
}
