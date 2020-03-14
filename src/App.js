import React from "react";
import CamSlider from "./components/slider/";
import "./App.css";

function App() {
  const camList = [
    /**
     * A Coruña
     */
    {
      name: "A Coruña",
      src: "http://www.crtvg.es/camweb/cam.php?c=coruna"
    },
    {
      name: "A Coruña movil",
      src: "http://www.crtvg.es/camweb/cam.php?c=mcoruna"
    },
    {
      name: "Bando, San Marcos",
      src: "http://www.crtvg.es/camweb/cam.php?c=bando"
    },
    {
      name: "Cabo Fisterra",
      src: "http://www.crtvg.es/camweb/cam.php?c=fisterra"
    },
    {
      name: "Ferrol",
      src: "http://www.crtvg.es/camweb/cam.php?c=ferrol"
    },
    {
      name: "Monte Pedroso",
      src: "http://www.crtvg.es/camweb/cam.php?c=pedroso"
    },
    {
      name: "Ortigueira",
      src: "http://www.crtvg.es/camweb/cam.php?c=ortigueira"
    },
    {
      name: "Praza das Praterías",
      src: "http://www.crtvg.es/camweb/cam.php?c=praterias"
    },
    {
      name: "Praza do Obradoiro",
      src: "http://www.crtvg.es/camweb/cam.php?c=obradoiro"
    },

    /**
     * Lugo
     */
    {
      name: "Lugo",
      src: "http://www.crtvg.es/camweb/cam.php?c=lugo"
    },
    {
      name: "O Cebreiro",
      src: "http://www.crtvg.es/camweb/cam.php?c=cebreiro"
    },
    {
      name: "Portomarín",
      src: "http://www.crtvg.es/camweb/cam.php?c=portomarin"
    },

    /**
     * Ourense
     */
    {
      name: "A Rúa",
      src: "http://www.crtvg.es/camweb/cam.php?c=arua"
    },
    {
      name: "Cabeza de Manzaneda",
      src: "http://www.crtvg.es/camweb/cam.php?c=manzaneda"
    },
    {
      name: "Cabeza de Manzaneda - Estación 1",
      src: "http://www.crtvg.es/camweb/cam.php?c=oca_manzaneda_1"
    },
    {
      name: "Cabeza de Manzaneda - Estación 2",
      src: "http://www.crtvg.es/camweb/cam.php?c=oca_manzaneda_2"
    },
    {
      name: "Cabeza de Manzaneda - Estación 3",
      src: "http://www.crtvg.es/camweb/cam.php?c=oca_manzaneda_3"
    },
    {
      name: "Celanova",
      src: "http://www.crtvg.es/camweb/cam.php?c=celanova"
    },
    {
      name: "Ourense (móbil)",
      src: "http://www.crtvg.es/camweb/cam.php?c=mourense"
    },
    {
      name: "Ourense fixa",
      src: "http://www.crtvg.es/camweb/cam.php?c=ourense"
    },
    {
      name: "Verín",
      src: "http://www.crtvg.es/camweb/cam.php?c=verin"
    },
    /**
     * Pontevedra
     */
    {
      name: "A Guarda",
      src: "http://www.crtvg.es/camweb/cam.php?c=aguarda"
    },
    {
      name: "Baiona",
      src: "http://www.crtvg.es/camweb/cam.php?c=baiona"
    },
    {
      name: "Lalín",
      src: "http://www.crtvg.es/camweb/cam.php?c=lalin"
    },
    {
      name: "O Grove",
      src: "http://www.crtvg.es/camweb/cam.php?c=ogrove"
    },
    {
      name: "Pontevedra",
      src: "http://www.crtvg.es/camweb/cam.php?c=pontevedra"
    },
    {
      name: "Portonovo",
      src: "http://www.crtvg.es/camweb/cam.php?c=portonovo"
    },
    {
      name: "Sanxenxo",
      src: "http://www.crtvg.es/camweb/cam.php?c=sanxenxo"
    },
    {
      name: "Tui",
      src: "http://www.crtvg.es/camweb/cam.php?c=tui"
    },
    {
      name: "Vigo (móbil)",
      src: "http://www.crtvg.es/camweb/cam.php?c=mvigo"
    }
  ];

  return (
    <div className="App">
      <CamSlider
        height={100}
        dots
        arrows
        slides={camList}
        autoSlideSeconds={3}
      />
    </div>
  );
}

export default App;
