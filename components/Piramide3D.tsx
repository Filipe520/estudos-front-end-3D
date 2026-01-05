import "./css/piramide3D.css";

export default function Piramide3D() {
  return (
    <div className="table3D">
      Mesa 3D
      <div className="pyramid3D">
        <div className="confgFace front">Frente</div>
        <div className="confgFace back">Atrás</div>
        <div className="confgFace left">Esquerda</div>
        <div className="confgFace right">Direita</div>
        <div className="confgFace bottom">Baixo</div>
      </div>
    </div>
  );
}
