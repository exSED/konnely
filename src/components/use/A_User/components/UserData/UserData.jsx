import st from "./UserData.module.css";

import { useAuth } from "../../../../../context/AuthContext";
import { Themes } from "./conponents/Themes/Themes";
import { Buttons } from "../../../0-GeneralComp/1-Buttons/Buttons";
import {
  faPassport,
  faPenToSquare,
  faTrash,
} from "@fortawesome/free-solid-svg-icons";
import { recuperarUser } from "../../../0-GeneralComp/0-StaticData/dataProv";
import { GetDocument } from "../../../../firebase/funtions/GetInformation";
import { Modal } from "../../../0-GeneralComp/0-StaticData/Modals/Modal";
import { useModal } from "../../../0-GeneralComp/0-StaticData/Modals/useModal";
import { useState } from "react";
import {
  ChangePassword,
  RemovalUser,
} from "../../../../firebase/funtions/AddInformation";
import swal from "sweetalert";

export function UserData() {
  const { user } = useAuth();
  const usuario = GetDocument({ coleccion: "users", list: user.uid }).props
    .children[0];
  const [isOpenModal, openModal, closeModal] = useModal(false);
  const [inputstate, setInputstate] = useState("password");
  const [oldpassword, setOldpassword] = useState(null);
  const [newpassword, setNewpassword] = useState(null);
  const [auxpassword, setAuxpassword] = useState(null);

  return (
    <>
      <div className={st.userData}>
        <div className={st.profilePhoto}>
          <img src={user.photoURL} alt="" href="" />
        </div>
        <div className={st.thc}>
          <div>
            <Buttons
              route="/user"
              label="Editar información"
              direction="bottom"
              btnIconText={faPenToSquare}
              btnClick={() => {
                recuperarUser(usuario);
              }}
            />
          </div>
          <div>
            <Buttons
              route="#"
              label="Editar contraseña"
              direction="bottom"
              btnIconText={faPassport}
              btnClick={() => {
                openModal();
              }}
            />
          </div>
          <div>
            {" "}
            <Buttons
              route="#"
              label="Borrar cuenta"
              direction="bottom"
              btnIconText={faTrash}
              btnClick={() => {
                swal({
                  text: "¿Desea borrar su cuenta?",
                  dangerMode: true,
                  buttons: ["No", "Si"],
                }).then((respuesta) => {
                  if (respuesta) {
                    swal("Es necesario que escriba su contraseña", {
                      dangerMode: true,
                      content: {
                        element: "input",
                        attributes: {
                          placeholder: "Contraseña",
                          type: "password",
                        },
                      },
                    }).then((value) => {
                      RemovalUser({
                        data: usuario,
                        contraseña: value,
                        user: user,
                      });
                    });
                  }
                });
              }}
            />
          </div>
        </div>

        <hr />
        <br />
        <div className={st.paragraph}>
          <div>{user.displayName}</div>
          <div>{user.email}</div>
          <br />
          <div>Otros datos del usuario</div>
        </div>
        <Themes />
      </div>
      <Modal isOpen={isOpenModal} closeModal={closeModal}>
        {isOpenModal && (
          <>
            <input
              type={inputstate}
              placeholder="Digite su contraseña anterior"
              onChange={(e) => {
                e.preventDefault();
                setOldpassword(e.target.value);
              }}
            />
            <input
              type={inputstate}
              placeholder="Digite su nueva contraseña"
              onChange={(e) => {
                e.preventDefault();
                setNewpassword(e.target.value);
              }}
            />
            <input
              type={inputstate}
              placeholder="Confirme su nueva contraseña"
              onChange={(e) => {
                e.preventDefault();
                setAuxpassword(e.target.value);
              }}
            />
            {inputstate === "password" && (
              <button
                onClick={() => {
                  setInputstate("text");
                }}
              >
                ver
              </button>
            )}
            {inputstate === "text" && (
              <button
                onClick={() => {
                  setInputstate("password");
                }}
              >
                No ver
              </button>
            )}
            <button
              onClick={async (e) => {
                e.preventDefault();
                if (newpassword === auxpassword) {
                  swal({
                    title: "¿Esta seguro que desea cambiar su contraseña?",
                    icon: "warning",
                    buttons: ["No", "Si"],
                  }).then((respuesta) => {
                    if (respuesta) {
                      ChangePassword({
                        newpassword: newpassword,
                        oldpassword: oldpassword,
                      });
                    }
                  });
                  closeModal();
                } else {
                  swal({
                    title: "Las contraseñas no coinciden",
                    icon: "warning",
                    buttons: "Aceptar",
                  });
                }
              }}
            >
              Enviar
            </button>
          </>
        )}
      </Modal>
    </>
  );
}
