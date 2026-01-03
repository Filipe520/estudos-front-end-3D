import VideoCarousel from "@/components/VideoCarousel";
import Aula01_3D from "@/components/Cubo3D";
import Cubo2D_v1 from "@/components/Cubo2D";
import Cubo2D_v2 from "@/components/Cubo2D_v2";
import Cubo3D from "@/components/Cubo3D_v3";
import CuboGiratorio from "@/components/CuboGiratorio";
import Card3D from "@/components/Card3D";

export default function Home() {
  const videos = ["/videos/v1.mp4", "/videos/v2.mp4", "/videos/v3.mp4"];

  return (
    <div className="flex items-center justify-center h-screen bg-gray-900">
      {/* <VideoCarousel videos={videos} /> */}
      <Card3D />
    </div>
  );
}
