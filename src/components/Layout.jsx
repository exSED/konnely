import st from './Layout.module.css';
import app from '../components/firebase/credentials';

import { useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { collection, getDocs, getFirestore, query, where } from 'firebase/firestore';

import { useAuth } from '../context/AuthContext';
import { ProtectedRoute } from './protectedRoute/ProtectedRoute';
import { themesData } from './use/0-GeneralComp/0-StaticData/customThemeData';

import { User } from './use/A_User/User';
// import { Invoice } from './use/Invoice/Invoice';
import { NewTrat } from './use/F-Forms/NewTrats/NewTrat';
import { DataView } from './use/C_DataView/DataView';
import { ViewIsList } from './use/B_VitaeIsList/VitaeIsList';
import { EditUserData } from './use/F-Forms/EditUserData/EditUserData';
import { LoginRegister } from './use/A_LoginRegister/LoginRegister';
import { EditRabbitData } from './use/F-Forms/EditRabbitData/EditRabbitData';
import { ReproView } from './use/C_ReproView/ReproView';
import { EditLife } from './use/F-Forms/EditLifedata/EditLife';
import { EditRepro } from './use/F-Forms/EditReproData/EditRepro';
import { EditTrats } from './use/F-Forms/EditTrats/EditTrats';
import { RemovalTratament } from './firebase/funtions/AddInformation';

const db = getFirestore(app);

export function Layout() {
    const { user } = useAuth();

    useEffect(() => {
        if (user) {
            let u = { theme: 0 };
            const getData = async () => {
                const query_ = query(collection(db, 'users'), where('uid', '==', user.uid));
                const querySnapshot = await getDocs(query_);
                querySnapshot.forEach((doc) => {
                    u = doc.data();
                });
                document
                    .getElementById('lay')
                    .style.setProperty('background-image', `url(${themesData[u.theme].theme})`);
                document.getElementById('lay').style.setProperty('background-repeat', 'no-repeat');
                document.getElementById('lay').style.setProperty('background-size', 'cover');
            };
            const getTrataments = async () => {
                const trataments = await getDocs(collection(db, 'trataments'));
                trataments.forEach((doc) => {
                    if (doc.data().state !== null && Date.now() - Date.parse(doc.data().removalDate) > 5259600000) {
                        RemovalTratament(doc.data().uid);
                    }
                });
            };
            getData();
            getTrataments();
        }
    }, [user]);

    return (
        <>
            <div className={st.container} id='lay'>
                <Router>
                    <Routes>
                        <Route
                            exact
                            path='/'
                            element={
                                <div className={st.initContainer}>
                                    <LoginRegister />
                                </div>
                            }
                        />
                        <Route
                            exact
                            path='/users'
                            element={
                                <ProtectedRoute>
                                    <User />
                                </ProtectedRoute>
                            }
                        />
                        <Route
                            exact
                            path='/vitaeslist'
                            element={
                                <ProtectedRoute>
                                    <div className={st.componentContainer}>
                                        <ViewIsList />
                                    </div>
                                </ProtectedRoute>
                            }
                        />
                        <Route
                            exact
                            path='/vitae'
                            element={
                                <ProtectedRoute>
                                    <div className={st.componentContainer}>
                                        <DataView />
                                    </div>
                                </ProtectedRoute>
                            }
                        />
                        <Route
                            exact
                            path='/user'
                            element={
                                <ProtectedRoute>
                                    <EditUserData />
                                </ProtectedRoute>
                            }
                        />
                        <Route
                            exact
                            path='/formEdit'
                            element={
                                <ProtectedRoute>
                                    <div className={st.componentContainer}>
                                        <EditRabbitData />
                                    </div>
                                </ProtectedRoute>
                            }
                        />
                        <Route exact path='/analitics' element={<ProtectedRoute></ProtectedRoute>} />
                        <Route exact path='/record' element={<ProtectedRoute></ProtectedRoute>} />
                        <Route
                            exact
                            path='/addTrat'
                            element={
                                <ProtectedRoute>
                                    <div className={st.componentContainer}>
                                        <NewTrat />
                                    </div>
                                </ProtectedRoute>
                            }
                        />
                        <Route
                            exact
                            path='/litterList'
                            element={
                                <ProtectedRoute>
                                    <div className={st.componentContainer}>
                                        <ReproView />
                                    </div>
                                </ProtectedRoute>
                            }
                        />
                        <Route
                            exact
                            path='/editLife'
                            element={
                                <ProtectedRoute>
                                    <div className={st.componentContainer}>
                                        <EditLife />
                                    </div>
                                </ProtectedRoute>
                            }
                        />
                        <Route
                            exact
                            path='/formEditRepro'
                            element={
                                <ProtectedRoute>
                                    <div className={st.componentContainer}>
                                        <EditRepro />
                                    </div>
                                </ProtectedRoute>
                            }
                        />
                        <Route
                            exact
                            path='/editTrats'
                            element={
                                <ProtectedRoute>
                                    <div className={st.componentContainer}>
                                        <EditTrats />
                                    </div>
                                </ProtectedRoute>
                            }
                        />
                    </Routes>
                </Router>
            </div>
        </>
    );
}
