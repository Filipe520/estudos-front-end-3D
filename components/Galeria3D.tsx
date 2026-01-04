import "./css/ConfigStyleGaleria3D.css";

import "./css/gallery-cubes/cubeRed.css";
import "./css/gallery-cubes/cubeYellow.css";
import "./css/gallery-cubes/cubeGreen.css";
import "./css/gallery-cubes/cubeViolet.css";

export default function Galeria3D() {
  return (
    <div className="mesa3D ">
      Mesa 3D
      <div className="cubeRed">
        <div className="face front">Frente</div>
        <div className="face back">Trás</div>
        <div className="face left">Esquerda</div>
        <div className="face right">Direita</div>
        <div className="face top">Cima</div>
        <div className="face bottom">Baixo</div>
      </div>
      <div className="cubeYellow">
        <div className="face front">Frente</div>
        <div className="face back">Trás</div>
        <div className="face left">Esquerda</div>
        <div className="face right">Direita</div>
        <div className="face top">Cima</div>
        <div className="face bottom">Baixo</div>
      </div>
      <div className="cubeGreen">
        <div className="face front">Frente</div>
        <div className="face back">Trás</div>
        <div className="face left">Esquerda</div>
        <div className="face right">Direita</div>
        <div className="face top">Cima</div>
        <div className="face bottom">Baixo</div>
      </div>
      <div className="cubeViolet">
        <div className="face front">Frente</div>
        <div className="face back">Trás</div>
        <div className="face left">Esquerda</div>
        <div className="face right">Direita</div>
        <div className="face top">Cima</div>
        <div className="face bottom">Baixo</div>
      </div>
    </div>
  );
}
