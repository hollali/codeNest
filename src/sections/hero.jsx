import { PerspectiveCamera } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import HackerRoom from "../components/hackerRoom";
import { Suspense } from "react";
import CanvasLoader from "../components/canvasLoader";
import { Leva } from "leva";
import { useMediaQuery } from "react-responsive";
import { calculateSizes } from '../constants/index.js';
import Target from "../components/target.jsx";
import ReactLogo from "../components/reactLogo.jsx";
import Cube from "../components/cube.jsx";
import Rings from "../components/rings.jsx";

const Hero = () => {
	const isSmall = useMediaQuery({maxWidth: 440});
	const isMobile = useMediaQuery({ maxWidth: 768 });
	const isTablet = useMediaQuery({minWidth: 768, maxWidth: 1024});

	const sizes = calculateSizes(isSmall, isMobile, isTablet);

	return (
		<section className="min-h-screen w-full  flex-col relative">
			<div className="w-full mx-auto flex flex-col sm:mt-36 mt-20 c-space gap-3">
				<p className="sm:text-3xl text-xl font-medium text-white text-center font-generalsans">
					Hi, We are CodeNest <span className="waving-hand">👋</span>
				</p>
				<p className="hero_tag text-gray_gradient">
					Building Products & Brands
				</p>
			</div>
			<div className="w-full h-full absolute inset-0">
			<Leva/>
				<Canvas className="w-full h-full">
					<Suspense fallback={<CanvasLoader/>}>
						<PerspectiveCamera makeDefault position={[0, 0, 20]} />
						<HackerRoom
						scale={sizes.deskScale}
						position={sizes.deskPosition}
						rotation={[0.1, -Math.PI, 0]}
						/>
						<group>
							<Target position={sizes.targetPosition}/>
							<ReactLogo position={sizes.reactLogoPosition}/>
							<Cube position={sizes.cubePosition}/>
							<Rings position={sizes.ringPosition}/>
						</group>
						<ambientLight intensity={1}/>
						<directionalLight position={[10,10,10]} intensity={0.5}
						/>
					</Suspense>
				</Canvas>
			</div>
		</section>
	);
};

export default Hero;
