import "./css/cuboGiratorio.css";

export default function CuboGiratorio() {
  return (
    <div className="table3D">
      <p>Table 3D</p>
      <div className="cube3D">
        <p>Cube 3D</p>
        <div className="face front">Frente</div>
        <div className="face back">Atrás</div>
        <div className="face left">Esquerda</div>
        <div className="face right">Direita</div>
        <div className="face top">Cima</div>
        <div className="face bottom">Baixo</div>
      </div>
    </div>
  );
}
