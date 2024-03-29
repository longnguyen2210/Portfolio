import React from "react";
import styled from "styled-components";
import NavBar from "./NavBar";
import { MeshDistortMaterial, OrbitControls, Sphere } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";

const Section = styled.div`
	height: 100vh;
	scroll-snap-align: center;
	display: flex;
	flex-direction: column;
	justify-content: space-between;

	@media only screen and (max-width: 768px) {
		height: 200vh;
	}
`;

const Container = styled.div`
	height: 100%;
	scroll-snap-align: center;
	width: 1400px;
	display: flex;
	justify-content: space-between;
	@media only screen and (max-width: 768px) {
		width: 100%;
		flex-direction: column;
		align-items: center;
		justify-content: center;
	}
`;

const Left = styled.div`
	flex: 2;
	display: flex;
	flex-direction: column;
	justify-content: center;
	gap: 20px;

	@media only screen and (max-width: 768px) {
		flex: 1;
		align-items: center;
	}
`;
const Title = styled.h1`
	font-size: 74px;

	@media only screen and (max-width: 768px) {
		text-align: center;
	}
`;

const WhatWeDo = styled.div`
	display: flex;
	align-items: center;
	gap: 10px;
`;

const Line = styled.img`
	height: 15px;
	width: 25px;
`;
const Subtitle = styled.h2`
	color: #da4ea2;
`;

const Description = styled.p`
	font-size: 24px;
	color: lightgray;

	@media only screen and (max-width: 768px) {
		padding: 20px;
		text-align: center;
	}
`;

const Button = styled.button`
	background-color: #da4ea2;
	color: white;
	font-weight: 500;
	width: 100px;
	padding: 10px;
	border: none;
	border-radius: 5px;
	cursor: pointer;
`;

const Right = styled.div`
	flex: 3;
	position: relative;

	@media only screen and (max-width: 768px) {
		flex: 1;
		width: 100%;
	}
`;
const Img = styled.img`
	width: 500px;
	height: 500px;
	object-fit: contain;
	position: absolute;
	top: 0;
	bottom: 0;
	left: 0;
	right: 200;
	margin: auto;
	animation: animate 2s infinite ease alternate;

	@keyframes animate {
		to {
			transform: translateY(20px);
		}
	}

	@media only screen and (max-width: 768px) {
		width: 300px;
		height: 300px;
		position: absolute;
		right: 300px;
	}
`;

const Hero = () => {
	return (
		<Section>
			<NavBar />
			<Container>
				<Left>
					<Title>Think. Make. Solve.</Title>
					<WhatWeDo>
						<Line src='./img/line.png' />
						<Subtitle> What we do</Subtitle>
					</WhatWeDo>
					<Description>We enjoy creating</Description>
					<Button>Learn More</Button>
				</Left>
				<Right>
					<Canvas
						style={{
							width: "500px",
							position: "absolute",
							right: "700",
							top: "0",
							bottom: "0",
							left: "0",
						}}>
						<OrbitControls enableZoom={false} />
						<ambientLight intensity={1} />
						<directionalLight position={[3, 2, 1]} />

						<Sphere args={[1, 100, 200]} scale={1.75}>
							<MeshDistortMaterial
								color='orange'
								attach='material'
								distort={0.5}
								speed={2}
							/>
						</Sphere>
					</Canvas>

					<Img src='./img/Right.png' />
				</Right>
			</Container>
		</Section>
	);
};

export default Hero;
