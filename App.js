
// src/App.jsx
import React, { useState, useEffect } from 'react';
import logo from './Parrilla.jpg';
import './App.css';
function App() {




  const [activeTab, setActiveTab] = useState('ultimos');

  // Datos ejemplo: COMPLETA hasta 10 registros si necesitas
  
  const [ultimosParrilleros, setUltimosParrilleros] = useState([
    {
    Cedula_Cliente: 201001001,Nombre_Cliente: 'Juan Diego Pérez',
    Correo_Cliente: 'juaperez@gmail.com',Telefono_Cliente: 3101112222
  },
  {
    Cedula_Cliente: 201002002, Nombre_Cliente: 'María Isabel López Valencia',
    Correo_Cliente: 'mariloval@hotmail.com', Telefono_Cliente: 3112223333
  },
  {
    Cedula_Cliente: 201003003, Nombre_Cliente: 'Carlos Ernesto Díaz Samper',
    Correo_Cliente: 'carlosds10@gmail.com.com', Telefono_Cliente: 3123334444
  },
  {
    Cedula_Cliente: 201004004,
    Nombre_Cliente: 'Laura González Martinez',
    Correo_Cliente: 'laurag2024@gmail.com.com',
    Telefono_Cliente: 3133334444
  },
  {
    Cedula_Cliente: 201005005,
    Nombre_Cliente: 'Pedro Ismael Ramírez Ortega',
    Correo_Cliente: 'pedrogamer@gmail.com',
    Telefono_Cliente: 3144445555
  },
  {
    Cedula_Cliente: 201006006,
    Nombre_Cliente: 'Sofía Molina Zapata',
    Correo_Cliente: 'sofiazapato@gmail.com',
    Telefono_Cliente: 3155556666
  },
  {
    Cedula_Cliente: 201007007,
    Nombre_Cliente: 'Diego Alejandro Sánchez Torres',
    Correo_Cliente: 'dsanchezt@unal.edu.co',
    Telefono_Cliente: 3166667777
  },
  {
    Cedula_Cliente: 201008008,
    Nombre_Cliente: 'Andrea Torres Escobar',
    Correo_Cliente: 'andrea.escobar@gmail.com',
    Telefono_Cliente: 3177778888
  },
  {
    Cedula_Cliente: 201009009,
    Nombre_Cliente: 'Luis Ignacio Herrera Moreno',
    Correo_Cliente: null,
    Telefono_Cliente: 3188889999
  },
  {
    Cedula_Cliente: 201010010,
    Nombre_Cliente: 'Marta Salas Hernandez',
    Correo_Cliente: 'martasahernandez@gmail.com',
    Telefono_Cliente: 3199990000
  }
  ]);

  useEffect(() => {
  // Solo arrancar el interval cuando la pestaña sea "ultimos"
  if (activeTab !== 'ultimos') return;

  const refreshRate = 30 * 1000; // cada 30 segundos (ajústalo a tu necesidad)

  const intervalId = setInterval(() => {
    // Aquí podrías:
    // 1) Hacer fetch a tu API y setUltimosParrilleros(data)
    // 2) Actualizar algún campo de timestamp para re-renderizar
    // 3) Reordenar o “shuffle” los datos, etc.
    
    // Ejemplo simulado (vuelve a disparar render):
    setUltimosParrilleros(prev => [...prev]);
  }, refreshRate);

  // Limpieza al cambiar de pestaña o desmontar
  return () => clearInterval(intervalId);
}, [activeTab]);

  const parrillerosFrecuentes = [
    {
    Cedula_Cliente: 10546789, Nombre_Cliente: 'Juan Carlos Torres Pardo',
    Correo_Cliente: 'jctorresp@unal.edu.co', Telefono_Cliente: 3154302137
  },
  {
    Cedula_Cliente: 1265908431,
    Nombre_Cliente: 'Luis Carlos Jimenez Campo',
    Correo_Cliente: 'luisjicam@hotmail.com',
    Telefono_Cliente: 3113457011
  },
  {
    Cedula_Cliente: 12456009,
    Nombre_Cliente: 'Roberto Francisco Gomez Bolaños',
    Correo_Cliente: 'chavogomez@gmail.com',
    Telefono_Cliente: 3009875328
  },
  {
    Cedula_Cliente: 1086711329,
    Nombre_Cliente: 'Emanuel Salamanca Rodriguez',
    Correo_Cliente: 'emasalamanca10@gmail.com',
    Telefono_Cliente: 3133334444
  },
  {
    Cedula_Cliente: 1666987412,
    Nombre_Cliente: 'Jereson Silva Valencia',
    Correo_Cliente: 'jsilvalencia@gmail.com',
    Telefono_Cliente: 3165715000
  },
  {
    Cedula_Cliente: 15678390,
    Nombre_Cliente: 'Fredy Rolando García Hernandez',
    Correo_Cliente: 'fogarciaher@unal.edu.co',
    Telefono_Cliente: 3155556666
  },
  {
    Cedula_Cliente: 87520216,
    Nombre_Cliente: 'Wliam Daniel Cristancho Valenzuela',
    Correo_Cliente: 'wildanielcris@gmail.com',
    Telefono_Cliente: 3166667777
  },
  {
    Cedula_Cliente: 1079543218,
    Nombre_Cliente: 'Angel Bautista Barrera',
    Correo_Cliente: 'angelybautista@gmail.com',
    Telefono_Cliente: 3178009547
  },
  
  ];
  const parrillerosMayorGasto = [{
    Cedula_Cliente: 18760432, Nombre_Cliente: 'Sergio Ramirez Cespedes',
    Correo_Cliente: 'serramirezc@gmail.com', Telefono_Cliente: 3132115569
  },
  {
    Cedula_Cliente: 1099654389, Nombre_Cliente: 'David Esteban Tapiero Jara',
    Correo_Cliente: 'dacidjara23@gmail.com', Telefono_Cliente: 3150087129
  },
  {
    Cedula_Cliente: 10546789, Nombre_Cliente: 'Juan Carlos Torres Pardo',
    Correo_Cliente: 'jctorresp@unal.edu.co', Telefono_Cliente: 316708954
  },
  {
    Cedula_Cliente: 1111367546, Nombre_Cliente: 'Karen Viviana Lopez Naranjo',
    Correo_Cliente: 'karencitavivi@gmail.com', Telefono_Cliente: 3186659126
  },
  {
    Cedula_Cliente: 13490861, Nombre_Cliente: 'Andres Felipe Garzon Daza',
    Correo_Cliente: 'felipegarzon546@hotmail.com', Telefono_Cliente: null
  },
  ];

  const parrillerosConMembresia = [{
    Cedula_Cliente: 1030456431,
    Nombre_Cliente: 'Nicole Juliana Forero Franco',
    Correo_Cliente: 'nicolijuf@gmail.com',
    Telefono_Cliente: 3199094328
  },
  {
    Cedula_Cliente: 1035675431,
    Nombre_Cliente: 'Maria Jose Ortiz Martinez',
    Correo_Cliente: 'mariajosort@gmail.com',
    Telefono_Cliente: 3056784316
  },
  {
    Cedula_Cliente: 1287590376,
    Nombre_Cliente: 'Manuel Alejandro Palacio Novoa',
    Correo_Cliente: 'manunovoa@gmail.com',
    Telefono_Cliente: 3165006780
  },
  {
    Cedula_Cliente: 17549674,
    Nombre_Cliente: 'Eduardo Felipe Camacho Lara',
    Correo_Cliente: 'edupipe@gmail.com',
    Telefono_Cliente: 3486504876
  },
  {
    Cedula_Cliente: 201005005,
    Nombre_Cliente: 'Pedro Sebastian Ramírez Fernandez',
    Correo_Cliente: 'pedritoram12@gmail.com',
    Telefono_Cliente: null
  },
  {
    Cedula_Cliente: 201006006,
    Nombre_Cliente: 'Sofía Samper Molina',
    Correo_Cliente: 'sofia.sammol@hotmail.com',
    Telefono_Cliente: 3174071953
  },
  {
    Cedula_Cliente: 201007007,
    Nombre_Cliente: 'Diego Sánchez',
    Correo_Cliente: 'diego.sanchez@example.com',
    Telefono_Cliente: 3166667777
  },
  {
    Cedula_Cliente: 13477305,
    Nombre_Cliente: 'Andrea Ximena Torres Tobar',
    Correo_Cliente: 'andreax.torres@gmail.com.com',
    Telefono_Cliente: 3178112643
  },
  {
    Cedula_Cliente: 1010100010,
    Nombre_Cliente: 'James David Rodriguez Escobar',
    Correo_Cliente: 'jjjjames10col@gmail.com',
    Telefono_Cliente: 3108103710
  }
  ];

  const parrillerosEstrella = [{
    Cedula_Cliente: 13876025,
    Nombre_Cliente: 'Luis Ernesto Bello Moreno',
    Correo_Cliente: 'erenstobello@gmail.com',
    Telefono_Cliente: 3139971625
  },
  {
    Cedula_Cliente: 1023082730,
    Nombre_Cliente: 'Santiago Ballesteros Daza',
    Correo_Cliente: 'santiagoball@gmail.com',
    Telefono_Cliente: 3142186721
  },
  {
    Cedula_Cliente: 1073673403,
    Nombre_Cliente: 'Juan Diego Vega Ramirez',
    Correo_Cliente: 'juandivega@gmail.com',
    Telefono_Cliente: 3177008924
  },
  {
    Cedula_Cliente: 1034779316,
    Nombre_Cliente: 'Angie Tatiana Rubio Niño',
    Correo_Cliente: 'angieniño@hotmail.com',
    Telefono_Cliente: 3155663219
  },
  {
    Cedula_Cliente: 1000133600,
    Nombre_Cliente: 'Cristian Felipe Gutierrez Espitia',
    Correo_Cliente: 'cgutierreze@unal.edu.co',
    Telefono_Cliente: 3112167519
  },
  {
    Cedula_Cliente: 1123804070,
    Nombre_Cliente: 'Esteban Alexander Valencia Jara',
    Correo_Cliente: 'esvalenciaj@unal.edu.co',
    Telefono_Cliente: 3276519030
  },
  {
    Cedula_Cliente: 1078536457,
    Nombre_Cliente: 'Diego Alejandro Paredes Diaz',
    Correo_Cliente: 'diego.alejito@gmail.com',
    Telefono_Cliente: 3167308120
  },
  {
    Cedula_Cliente: 201008008,
    Nombre_Cliente: 'Andrea Camila Torres Gimenez',
    Correo_Cliente: 'andrea2030@gmail.com',
    Telefono_Cliente: 3186112064
  },
  {
    Cedula_Cliente: 1013262476,
    Nombre_Cliente: 'Luis Alexander Pimiento Agudelo',
    Correo_Cliente: 'luis.alexander.15@gmail.com',
    Telefono_Cliente: 3165009811
  }
  ];

  const parrillerosSocios = [{
    Cedula_Cliente: 1030548467,
    Nombre_Cliente: 'Fredy Santiago García Sordo',
    Correo_Cliente: 'frgarciaa@unal.edu.co',
    Telefono_Cliente: 3059062395
  },
  {
    Cedula_Cliente:  1030548464,
    Nombre_Cliente: 'Juan David Amado Rubio',
    Correo_Cliente: 'juamador@unal.edu.co',
    Telefono_Cliente: 3053980051
  },
  {
    Cedula_Cliente: 1079535218,
    Nombre_Cliente: 'Diever Santiago Urbano Samboni',
    Correo_Cliente: 'durbanos@unal.edu.co',
    Telefono_Cliente: 3108163965
  },
  {
    Cedula_Cliente:  1138524587,
    Nombre_Cliente: 'Katherinne Lucia Olaya Paguatian',
    Correo_Cliente: 'laura.gonzalez@example.com',
    Telefono_Cliente: 3162947113
  }
  ];

  // Renderiza cualquier tabla con 4 columnas
  const renderTabla = (data, titulo) => (
    <div className="table-container">
      <h2>{titulo}</h2>
      <table>
        <thead>
          <tr>
            <th>Cédula</th>
            <th>Nombre</th>
            <th>Correo</th>
            <th>Teléfono</th>
          </tr>
        </thead>
        <tbody>
          {data.map(item => (
            <tr key={item.Cedula_Cliente}>
              <td>{item.Cedula_Cliente}</td>
              <td>{item.Nombre_Cliente}</td>
              <td>{item.Correo_Cliente}</td>
              <td>{item.Telefono_Cliente}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
  
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="imagen-redonda" alt="logo" />
        <p>Panel de nuestros parrilerros</p>
      </header>

      {/* Menú de pestañas */}
      <div className="tabs">
        <button
          className={`tab-button ${activeTab === 'ultimos' ? 'active' : ''}`}
          onClick={() => setActiveTab('ultimos')}
        >
          Últimos 10 Parrilleros
        </button>
        <button
          className={`tab-button ${activeTab === 'frecuentes' ? 'active' : ''}`}
          onClick={() => setActiveTab('frecuentes')}
        >
          Parrilleros más Frecuentes
        </button>
        <button
          className={`tab-button ${activeTab === 'mayorGasto' ? 'active' : ''}`}
          onClick={() => setActiveTab('mayorGasto')}
        >
          Parrilleros con Mayor Gasto
        </button>
        <button
          className={`tab-button ${activeTab === 'conMembresia' ? 'active' : ''}`}
          onClick={() => setActiveTab('conMembresia')}
        >
          Parrilleros con Membresía
        </button>
        <button
          className={`tab-button ${activeTab === 'estrella' ? 'active' : ''}`}
          onClick={() => setActiveTab('estrella')}
        >
          Parrilleros Estrella
        </button>
        <button
          className={`tab-button ${activeTab === 'socios' ? 'active' : ''}`}
          onClick={() => setActiveTab('socios')}
        >
          Parrilleros Socios
        </button>
      </div>

      {/* Contenido de pestañas */}
      {activeTab === 'ultimos' &&
  renderTabla(ultimosParrilleros, 'Últimos 10 Parrilleros')}

      {activeTab === 'frecuentes' &&
        renderTabla(parrillerosFrecuentes, 'Parrilleros más Frecuentes')}
      {activeTab === 'mayorGasto' &&
        renderTabla(parrillerosMayorGasto, 'Parrilleros con Mayor Gasto')}
      {activeTab === 'conMembresia' &&
        renderTabla(parrillerosConMembresia, 'Parrilleros con Membresía')}
      {activeTab === 'estrella' &&
        renderTabla(parrillerosEstrella, 'Parrilleros Estrella')}
      {activeTab === 'socios' &&
        renderTabla(parrillerosSocios, 'Parrilleros Socios')}
    </div>
  );
}

export default App;
