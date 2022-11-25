import st from './PrintView.module.css';

import { newTreats } from '../../../0-GeneralComp/0-StaticData/options';

import { Body } from './components/Body/Body';
import { LeftBottomMenu } from '../../../0-GeneralComp/1-PanelButtons/LeftBottomMenu/LeftBottomMenu';
import { basicData } from '../../../0-GeneralComp/0-StaticData/dataProv';
import { QueriesSimple_ } from '../../../../firebase/funtions/GetInformation';

import s from '../../../../img/LogoUDEC.png';

import { useReactToPrint } from 'react-to-print';
import { useRef } from 'react';
import { Buttons } from '../../../0-GeneralComp/1-Buttons/Buttons';

import { faPrint } from '@fortawesome/free-solid-svg-icons';
import { Head } from "./components/0_Head/Head";

export function PrintView() {
    const componentRef = useRef();
    const cicles = QueriesSimple_({
        coleccion: 'reproductive',
        parametro: 'uidMother',
        busqueda: basicData.info.uid,
    }).props.children;
    const trataments = QueriesSimple_({
        coleccion: 'trataments',
        parametro: 'uidRabbit',
        busqueda: basicData.info.uid,
    }).props.children;

  	const print = useReactToPrint({
    		content: () => componentRef.current,
    		documentTitle: 'New paper',
  	});

  const cm = (
    <>
      <LeftBottomMenu
        backCancel={newTreats}
        click={() => {
          window.history.back();
        }}
      />

      <div className={st.btnPrint}>
        <Buttons label="Imprimir" direction="rigth" btnClick={print} route="#" btnIconText={faPrint}/>
      </div>
      <div className={st.optionContainer} ref={componentRef}>
        <div className={st.containerObj}>
          <div className={st.headPi}>
            <div className={st.con}>
              <div>
                <img src={s} alt="" />
              </div>
              <table>
                <thead>
                  <tr>
                    <tr>
                      <th>MARCO PROCESO DE APOYO</th>
                    </tr>
                    <tr>
                      <th>PROCESO GÉSTION DE PROCESO ACADÉMICO</th>
                    </tr>
                    <tr>
                      <th>HOJA DE VIDA SEMOVIENTE HEMBRA</th>
                    </tr>
                    <th>
                      <tr>
                        <th>CÓDIGO: AAAr031</th>
                      </tr>
                      <tr>
                        <th>VERSIÓN: 7</th>
                      </tr>
                      <th>
                        FECHA:
                        {window
                          .Date()
                          .replace(" GMT-0500 (hora estándar de Colombia)", "")}
                      </th>
                    </th>
                  </tr>
                </thead>
              </table>
            </div>

            <br />
            <hr />
            <br />
            <br />
          </div>
          <Body cicles={cicles} trataments={trataments} />
          <div className={st.foot}>
            <br />
            <br />
            <hr />
            <br />
            <br />
            <br />
            <p>
              Calle 6 N° 9-80 Ubate – Cundinamarca Teléfono (091) 855 3055/3056
            </p>
            <p>Ext.127 Línea Gratuita 018000180414</p>
            <p>
              {" "}
              <a href="www.ucundinamarca.edu.co">
                www.ucundinamarca.edu.co{" "}
              </a>{" "}
              E-mail:{" "}
              <a href="info@ucundinamarca.edu.co">info@ucundinamarca.edu.co</a>
            </p>
            <p>NIT: 890.680.062-2</p>
          </div>
        </div>
      </div>

    </>
  );
  return cm;
}
