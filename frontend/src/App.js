import React,{useState} from 'react';
import './App.css';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import HomeComponent from './components/HomeComponent';
import HeaderComponent from './components/HeaderComponent';
import ListarEstudiantesComponent from './components/ListarEstudiantes';
import CrearEstudianteComponent from './components/CrearEstudiante';
import CrearCuotaComponent from './components/CrearCuota';
import ListarCuotasComponent from './components/ListarCuotas';
import ModificarCuotaComponent from './components/modificarCuota';
function App() {
  const [childData, setChildData] = useState('Home'); 
  function handleChildData (data) { 
    setChildData(data);
  };
  
  return (

    <div className="App">
      <HeaderComponent onChildData={handleChildData} />
      {childData==="Home" && <HomeComponent />}
      {childData==="CrearEstudiantes" && <CrearEstudianteComponent/>}
      {childData==="ListaEstudiantes" && <ListarEstudiantesComponent/>}
      {childData==="CrearCuota" && <CrearCuotaComponent/>}
      {childData==="ListarCuotas" && <ListarCuotasComponent/>}
      {childData==="ModificarCuota" && <ModificarCuotaComponent/>}
      {childData==="CargarNotas" && <CargarNotasComponent/>}
      <ToastContainer />
    </div>
  );
}

export default App;
