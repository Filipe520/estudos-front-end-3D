import "./css/cubo3D_v3.css";

export default function Cubo3D() {
  return (
    <div className="palco">
      <div className="cubo">
        <div className="face frente">Frente</div>
        <div className="face tras">Trás</div>
        <div className="face direita">Direita</div>
        <div className="face esquerda">Esquerda</div>
        <div className="face cima">Cima</div>
        <div className="face baixo">Baixo</div>
      </div>
    </div>
  );
}
