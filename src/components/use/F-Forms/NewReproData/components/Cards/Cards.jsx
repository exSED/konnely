import st from "./Cards.module.css";

import { useState } from "react";

import { Ref } from "./components/Ref/Ref";
import { faFloppyDisk } from "@fortawesome/free-solid-svg-icons";
import {
  conditionalBasisEdit,
  conditionalNextEdit,
} from "../../../../0-GeneralComp/0-StaticData/Dates/conditionals";
import { useAuth } from "../../../../../../context/AuthContext";
import { AddReproductiveCycle } from "../../../../../firebase/funtions/AddInformation";
import { formatCycleReproductive } from "../../../../0-GeneralComp/0-StaticData/Dates/format";
import { Buttons } from "../../../../0-GeneralComp/1-Buttons/Buttons";

export function Cards({ id, litterPrueba, stages }) {
  const { user } = useAuth();
  const [date, setDate] = useState(null);
  function handleChange(e) {
    if (e.target.name === "DateInitial") {
      e.target.value = conditionalBasisEdit(e.target.value, null);
      setDate(e.target.value);
    } else {
      e.target.value = conditionalNextEdit(e.target.value, null, date);
    }
    if (e.target.name === "DateInitial" && e.target.value === "") {
      setDate(null);
      e.target.value = null;
    }
  }

  return (
    <div className={st.container}>
      <div className={st.panelId}>{id}</div>
      <br />
      <form
        onSubmit={(e) => {
          e.preventDefault();
          AddReproductiveCycle(formatCycleReproductive(e, litterPrueba, user));
        }}
        className={st.panelInfo}
      >
        {stages?.map((element, i) => (
          <Ref
            key={i}
            stage={element}
            handleChange={handleChange}
            date={date}
          />
        ))}
        <div className={st.btn}>
          <Buttons
            label="Guardar cambios"
            direction="top"
            btnIconText={faFloppyDisk}
            type="submit"
            route="/vitaeslist"
          />
        </div>
      </form>
    </div>
  );
}
