import "./css/card3D.css";

export default function Card3D() {
  return (
    <div className="card3D">
      <div className="card3D-inner">
        <div className="card3D-front">
          <h2>Frente</h2> <p>Imagem ou título aqui</p>
        </div>
        <div className="card3D-back">
          <h2>Verso</h2> <p>Descrição ou botão aqui</p>
        </div>
      </div>
    </div>
  );
}
