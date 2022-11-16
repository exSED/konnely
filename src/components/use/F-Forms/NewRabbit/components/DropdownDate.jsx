import { Inputs } from "../../../0-GeneralComp/1-Inputs/Inputs";

export function DropdownDate(props) {
  const date_ = props.date;
  const { handleChange } = props;
  function phase() {
    if (
      Date.now() - Date.parse(date_) <= 2629800000 &&
      Date.now() - Date.parse(date_) > 0
    ) {
      return 1;
    } else if (
      Date.now() - Date.parse(date_) > 2629800000 &&
      Date.now() - Date.parse(date_) <= 5259600000
    ) {
      return 2;
    } else if (
      Date.now() - Date.parse(date_) > 5259600000 &&
      Date.now() - Date.parse(date_) <= 7889400000
    ) {
      return 3;
    } else if (
      Date.now() - Date.parse(date_) > 7889400000 &&
      Date.now() - Date.parse(date_) <= 10519200000
    ) {
      return 4;
    } else if (Date.now() - Date.parse(date_) > 10519200000) {
      return 5;
    }
  }
  return (
    <>
      {phase() === 1 && (
        <>
          {/* <Inputs
                        leyend='Peso al nacer'
                        name='peso'
                        placeholder='Ingrese el peso'
                        type='number'
                        inputmode='numeric'
                        handleChange={handleChange}
                    /> */}
        </>
      )}
      {phase() === 2 && (
        <>
          <Inputs
            leyend="Fecha de finalización de levante"
            name="levantefin"
            placeholder="Ingrese el peso"
            type="date"
            inputmode="numeric"
            handleChange={handleChange}
          />
          <Inputs
            leyend="Peso final en levante"
            name="levante"
            placeholder="Ingrese el peso"
            type="number"
            inputmode="numeric"
            handleChange={handleChange}
          />
        </>
      )}
      {phase() === 3 && (
        <>
          <Inputs
            leyend="Fecha de finalización de levante"
            name="levantefin"
            placeholder="Ingrese el peso"
            type="date"
            inputmode="numeric"
            handleChange={handleChange}
          />
          <Inputs
            leyend="Peso final en levante"
            name="levante"
            placeholder="Ingrese el peso"
            type="number"
            inputmode="numeric"
            handleChange={handleChange}
          />
          <Inputs
            leyend="Fecha de finalización de engorde"
            name="engordefin"
            placeholder="Ingrese el peso"
            type="date"
            inputmode="numeric"
            handleChange={handleChange}
          />
          <Inputs
            leyend="Peso final en engorde"
            name="engorde"
            placeholder="Ingrese el peso"
            type="number"
            inputmode="numeric"
            handleChange={handleChange}
          />
        </>
      )}
      {phase() === 4 && (
        <>
          <Inputs
            leyend="Fecha de finalización de levante"
            name="levantefin"
            placeholder="Ingrese el peso"
            type="date"
            inputmode="numeric"
            handleChange={handleChange}
          />
          <Inputs
            leyend="Peso final en levante"
            name="levante"
            placeholder="Ingrese el peso"
            type="number"
            inputmode="numeric"
            handleChange={handleChange}
          />
          <Inputs
            leyend="Fecha de finalización de engorde"
            name="engordefin"
            placeholder="Ingrese el peso"
            type="date"
            inputmode="numeric"
            handleChange={handleChange}
          />
          <Inputs
            leyend="Peso final en engorde"
            name="engorde"
            placeholder="Ingrese el peso"
            type="number"
            inputmode="numeric"
            handleChange={handleChange}
          />
          <Inputs
            leyend="Fecha de finalización de ceba"
            name="cebafin"
            placeholder="Ingrese el peso"
            type="date"
            inputmode="numeric"
            handleChange={handleChange}
          />
          <Inputs
            leyend="Peso final en ceba"
            name="ceba"
            placeholder="Ingrese el peso"
            type="number"
            inputmode="numeric"
            handleChange={handleChange}
          />
        </>
      )}
    </>
  );
}
