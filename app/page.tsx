import VideoCarousel from "@/components/VideoCarousel";
import Aula01_3D from "@/components/Cubo3D";
import Cubo2D_v1 from "@/components/Cubo2D";
import Cubo2D_v2 from "@/components/Cubo2D_v2";
import Cubo3D from "@/components/Cubo3D_v3";
import CuboGiratorio from "@/components/CuboGiratorio";
import Card3D from "@/components/Card3D";
import Galeria3D from "@/components/Galeria3D";
import Piramide3D from "@/components/Piramide3D";
import Carrossel3D_v2 from "@/components/carrossel3D_v2";

export default function Home() {
  const videos = ["/videos/v1.mp4", "/videos/v2.mp4", "/videos/v3.mp4"];

  return (
    <div className="flex items-center justify-center  bg-gray-900 flex-col ">
      {/* <h1 className="text-gray-400 font-extralight text-xl pb-10">
        Laboratório 3D
      </h1> */}
      {/* <VideoCarousel videos={videos} /> */}
      <Carrossel3D_v2 />
    </div>
  );
}
