import { OrbitControls, Stage } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import React from "react";
import Atom from "./Atom";
import styled from "styled-components";

const Desc = styled.div`
	width: 200px;
	height: 70px;
	padding: 15px;
	background-color: white;
	border-radius: 10px;
	position:absolute;
	bottom:360px;
	right:200px;
	font-size: 90%;

	@media only screen and (max-width: 768px) {
		top: 0;
		bottom: 250px;
		left: 0;
		right: 0;
		margin: auto;

	}
`
const Development = () => {
	return (
		<>
		<Canvas>
			<Stage environment='studio' intensity={0.6} adjustCamera={1.3}>
				<Atom />
				<OrbitControls enableZoom={false} rotateSpeed={1} autoRotate/>
			</Stage>
		</Canvas>
		<Desc> We design products with a strong focus on both world class design and ensuring your product is a market success.</Desc>
		</>
	);
};

export default Development;
