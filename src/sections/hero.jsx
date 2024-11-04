import { PerspectiveCamera } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import HackerRoom from "../components/hackerRoom";
import { Suspense } from "react";
import CanvasLoader from "../components/canvasLoader";
import { Leva } from "leva";
import { useMediaQuery } from "react-responsive";

const Hero = () => {
	const isMobile = useMediaQuery({ maxWidth: 768 })
	return (
		<section className="min-h-screen w-full  flex-col relative">
			<div className="w-full mx-auto flex flex-col sm:mt-36 mt-20 c-space gap-3">
				<p className="sm:text-3xl text-2xl font-medium text-white text-center font-generalsans">
					Hi, We are CodeNest <span className="waving-hand">👋</span>
				</p>
				<p className="hero_tag text-gray_gradient">
					Building Products & Brands
				</p>
			</div>
			<div className="w-full h-full absolute inset-0">
			<Leva/>
				<Canvas className="w-full h-full">
					<Suspense fallback={<CanvasLoader />}>
						<PerspectiveCamera makeDefault position={[0, 0, 30]} />
						<HackerRoom
						position={[2, -8, 2]}
						rotation={[0, -Math.PI, 0]}
						scale={isMobile ? 0.07 : 0.1}/>
						<ambientLight intensity={1}/>
						<directionalLight position={[10,10,10]} intensity={0.5}/>
					</Suspense>
				</Canvas>
			</div>
		</section>
	);
};

export default Hero;
