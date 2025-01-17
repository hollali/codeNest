import { useState } from "react";
import Globe from "react-globe.gl";
import Button from "../components/button.jsx";

const About = () => {
	const [hasCopied, setHasCopied] = useState(false);
	const handleCopy = () => {
		navigator.clipboard.writeText("dheztinykartel@gmail.com");
		setHasCopied(true);
		setTimeout(() => {
			setHasCopied(false);
		}, 2000);
	};
	return (
		<section className="c-space my-20">
			<div className="grid xl:grid-cols-3 xl:grid-rows-6 md:grid-cols-2 grid-cols-1 gap-5 h-full">
				<div className="col-span-1 xl:row-span-3">
					<div className="grid-container">
						<img
							src="assets/grid1.png"
							alt="grid-1"
							className="w-full sm:h-[276px] h-fit object-contain"
						/>
						<div>
							<p className="grid-headtext">Hi, We are CodeNest</p>
							<p className="grid-subtext">
								With half a decade of experience, We have honed my skills in
								both frontend , backend and mobile development, creating dynamic
								and responsive websites.
							</p>
						</div>
					</div>
				</div>
				<div className="col-span-1 xl:row-span-3">
					<div className="grid-container">
						<img
							src="assets/grid2.png"
							alt="grid-2"
							className="w-full sm:h-[276px] h-fit object-contain"
						/>
						<div>
							<p className="grid-headtext">Tech Stack</p>
							<p className="grid-subtext">
								We specialize in a variety of languages, frameworks, and tools
								that allow me to build robust and scalable applications
							</p>
						</div>
					</div>
				</div>
				<div className="col-span-1 xl:row-span-4">
					<div className="grid-container">
						<div className="rounded-3xl w-full sm:h-[326px] h-fit flex justify-center items-center">
							<Globe
								height={326}
								width={326}
								backgroundColor="rgba(0, 0, 0, 0)"
								backgroundImageOpacity={0.5}
								showAtmosphere
								showGraticules
								globeImageUrl="//unpkg.com/three-globe/example/img/earth-night.jpg"
								bumpImageUrl="//unpkg.com/three-globe/example/img/earth-topology.png"
								labelsData={[
									{
										lat: 40,
										lng: -100,
										text: "Accra, Ghana",
										color: "white",
										size: 15,
									},
								]}
							/>
						</div>
						<div>
							<p className="grid-headtext">
								We very flexible with time zone communications & locations
							</p>
							<p className="grid-subtext">
								We are based in Accra, Ghana and open to remote work worldwide.
							</p>
							<Button name="Contact Me" isBeam containerClass="w-full mt-10" />
						</div>
					</div>
				</div>
				<div className="xl:col-span-2 xl:row-span-3">
					<div className="grid-container">
						<img
							src="assets/grid3.png"
							alt="grid-3"
							className="w-full sm:h-[266px] h-fit object-contain"
						/>
						<div>
							<p className="grid-headtext">Our Passion for Coding</p>
							<p className="grid-subtext">
								We love solving problems and building things through code.
								Programming isn&apos;t just our profession, it&apos;s our passion.
								We enjoy exploring new technologies, and enhancing our skills.
							</p>
						</div>
					</div>
				</div>
				<div className="xl:col-span-1 xl:row-span-2">
					<div className="grid-container">
						<img
							src="assets/grid4.png"
							alt="grid-4"
							className="w-full md:h-[126px] sm:h-[276px] h-fit object-cover sm:object-top"
						/>
						<div className="space-y-2">
							<p className="grid-subtext text-center">Contact Us</p>
							<div className="copy-container" onClick={handleCopy}>
								<img
									src={hasCopied ? "assets/tick.svg" : "assets/copy.svg"}
									alt="copy"
								/>
								<p className="lg:text-2xl md:text-xl font-medium text-gray_gradient text-white">
									dheztinykartel@gmail.com
								</p>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default About;
