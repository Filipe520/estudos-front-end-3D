import "./css/cubo2d_v2.css";

export default function Cubo2D_v2() {
  return (
    <div className="mesa2D">
      <p>Mesa 2D</p>
      <div className="childs2d">
        <div className="quadrado eixoX">EIXO X</div>
        <div className="quadrado eixoZ">EIXO Z</div>
        <div className="quadrado eixoY">EIXO Y</div>
        <div className="quadrado rollsColors">Cor váriado</div>
      </div>
    </div>
  );
}
