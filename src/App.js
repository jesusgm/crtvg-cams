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
      src: "//www.crtvg.es/camweb/cam.php?c=coruna"
    },
    {
      name: "A Coruña movil",
      src: "//www.crtvg.es/camweb/cam.php?c=mcoruna"
    },
    {
      name: "Bando, San Marcos",
      src: "//www.crtvg.es/camweb/cam.php?c=bando"
    },
    {
      name: "Cabo Fisterra",
      src: "//www.crtvg.es/camweb/cam.php?c=fisterra"
    },
    {
      name: "Ferrol",
      src: "//www.crtvg.es/camweb/cam.php?c=ferrol"
    },
    {
      name: "Monte Pedroso",
      src: "//www.crtvg.es/camweb/cam.php?c=pedroso"
    },
    {
      name: "Ortigueira",
      src: "//www.crtvg.es/camweb/cam.php?c=ortigueira"
    },
    {
      name: "Praza das Praterías",
      src: "//www.crtvg.es/camweb/cam.php?c=praterias"
    },
    {
      name: "Praza do Obradoiro",
      src: "//www.crtvg.es/camweb/cam.php?c=obradoiro"
    },

    /**
     * Lugo
     */
    {
      name: "Lugo",
      src: "//www.crtvg.es/camweb/cam.php?c=lugo"
    },
    {
      name: "O Cebreiro",
      src: "//www.crtvg.es/camweb/cam.php?c=cebreiro"
    },
    {
      name: "Portomarín",
      src: "//www.crtvg.es/camweb/cam.php?c=portomarin"
    },

    /**
     * Ourense
     */
    {
      name: "A Rúa",
      src: "//www.crtvg.es/camweb/cam.php?c=arua"
    },
    {
      name: "Cabeza de Manzaneda",
      src: "//www.crtvg.es/camweb/cam.php?c=manzaneda"
    },
    {
      name: "Cabeza de Manzaneda - Estación 1",
      src: "//www.crtvg.es/camweb/cam.php?c=oca_manzaneda_1"
    },
    {
      name: "Cabeza de Manzaneda - Estación 2",
      src: "//www.crtvg.es/camweb/cam.php?c=oca_manzaneda_2"
    },
    {
      name: "Cabeza de Manzaneda - Estación 3",
      src: "//www.crtvg.es/camweb/cam.php?c=oca_manzaneda_3"
    },
    {
      name: "Celanova",
      src: "//www.crtvg.es/camweb/cam.php?c=celanova"
    },
    {
      name: "Ourense (móbil)",
      src: "//www.crtvg.es/camweb/cam.php?c=mourense"
    },
    {
      name: "Ourense fixa",
      src: "//www.crtvg.es/camweb/cam.php?c=ourense"
    },
    {
      name: "Verín",
      src: "//www.crtvg.es/camweb/cam.php?c=verin"
    },
    /**
     * Pontevedra
     */
    {
      name: "A Guarda",
      src: "//www.crtvg.es/camweb/cam.php?c=aguarda"
    },
    {
      name: "Baiona",
      src: "//www.crtvg.es/camweb/cam.php?c=baiona"
    },
    {
      name: "Lalín",
      src: "//www.crtvg.es/camweb/cam.php?c=lalin"
    },
    {
      name: "O Grove",
      src: "//www.crtvg.es/camweb/cam.php?c=ogrove"
    },
    {
      name: "Pontevedra",
      src: "//www.crtvg.es/camweb/cam.php?c=pontevedra"
    },
    {
      name: "Portonovo",
      src: "//www.crtvg.es/camweb/cam.php?c=portonovo"
    },
    {
      name: "Sanxenxo",
      src: "//www.crtvg.es/camweb/cam.php?c=sanxenxo"
    },
    {
      name: "Tui",
      src: "//www.crtvg.es/camweb/cam.php?c=tui"
    },
    {
      name: "Vigo (móbil)",
      src: "//www.crtvg.es/camweb/cam.php?c=mvigo"
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
