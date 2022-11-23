import st from "./Cards.module.css";

import { faPenToSquare, faTrash } from "@fortawesome/free-solid-svg-icons";
import { Buttons } from "../../../../../../../0-GeneralComp/1-Buttons/Buttons";

import { Ref } from "./components/Ref";
import swal from "sweetalert";
import { RemovalCamada } from "../../../../../../../../firebase/funtions/AddInformation";

export function Cards({ editor, stages, item }) {
  const cm = (
    <div className={st.container}>
      {editor?.length === 1 ? (
        <>
          <div className={st.panelId}>Editor: {editor}</div>
        </>
      ) : (
        <>
          <div className={st.panelId}>
            Editores:
            {editor?.map((u) => (
              <h1> {"* " + u}</h1>
            ))}
          </div>
        </>
      )}
      <div className={st.btnEdit}>
        <div>
          <Buttons
            route="/formEditRepro"
            label="Editar"
            direction="bottom"
            btnIconText={faPenToSquare}
          />
        </div>
        <div>
          <Buttons
            route="#"
            label="Borrar"
            direction="bottom"
            btnIconText={faTrash}
            btnClick={() => {
              swal({
                title: "¿Esta seguro que desea eliminar esta cuenta?",
                text: "Una vez eliminada no podrá recuperarla",
                dangerMode: true,
                icon: "warning",
                buttons: ["No", "Si"],
              }).then((respuesta) => {
                if (respuesta) {
                  RemovalCamada({ uid: item.uid, uidMother: item.uidMother });
                }
              });
            }}
          />
        </div>
      </div>
      <br />

      <div className={st.panelInfo}>
        <div className={st.pi}>
          {stages?.map((element, index) => {
            return <Ref key={index} stage={element} />;
          })}
        </div>
      </div>
      <br />
      <br />
    </div>
  );
  return cm;
}