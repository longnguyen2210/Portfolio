import { OrbitControls, Stage } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import React from "react";
import Mac from "./Mac";
import { styled } from "styled-components";

const Desc = styled.div`
	width: 200px;
	height: 70px;
	padding: 15px;
	background-color: white;
	border-radius: 10px;
	position: absolute;
	bottom: 50px;
	right: 50px;
	font-size: 90%;

	@media only screen and (max-width: 768px) {
		top: 0;
		bottom: 50px;
		left: 0;
		right: 0;
		margin: auto;
	}
`;
const WebDesign = () => {
	return (
		<>
			<Canvas>
				<Stage environment='studio' intensity={0.6} adjustCamera={1.3}>
					<Mac />
					<OrbitControls enableZoom={false} rotateSpeed={1} />
				</Stage>
			</Canvas>
			<Desc>
				{" "}
				We design products with a strong focus on both world class design and
				ensuring your product is a market success.
			</Desc>
		</>
	);
};

export default WebDesign;
