/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.2.16 chair.gltf --transform 
Files: chair.gltf [379.32KB] > C:\Users\LongN\Downloads\office_chair\chair-transformed.glb [214.43KB] (43%)
Author: j.a.m (https://sketchfab.com/j.a.m)
License: CC-BY-4.0 (http://creativecommons.org/licenses/by/4.0/)
Source: https://sketchfab.com/3d-models/office-chair-41973aa1808d4a13b84c24497fc77c63
Title: Office Chair
*/

import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";

export default function Chair(props) {
	const { nodes, materials } = useGLTF("/chair-transformed.glb");
	return (
		<group {...props} dispose={null}>
			<mesh
				geometry={nodes.Cylinder01_Matteplastic_0.geometry}
				material={materials.Matteplastic}
				position={[-21.91, 2.302, -108.052]}
				rotation={[-Math.PI / 2, 0, 0]}
			/>
			<mesh
				geometry={nodes.Cylinder01_BlackMetal_0.geometry}
				material={materials.BlackMetal}
				position={[-21.91, 2.302, -108.052]}
				rotation={[-Math.PI / 2, 0, 0]}
			/>
			<mesh
				geometry={nodes.Box01_Lether_0.geometry}
				material={materials.Lether}
				position={[7.49, 34.373, -108.052]}
				rotation={[-Math.PI / 2, 0, 0]}
			/>
			<mesh
				geometry={nodes.Box02_Chairback_0.geometry}
				material={materials.Chairback}
				position={[-51.39, 55.287, -133.687]}
				rotation={[-Math.PI / 2, 0, 0]}
			/>
			<mesh
				geometry={nodes.Rectangle02_Chrome_0.geometry}
				material={materials.Chrome}
				position={[-21.91, -0.065, -108.052]}
				rotation={[-Math.PI / 2, 0, 0]}
			/>
		</group>
	);
}

useGLTF.preload("/chair-transformed.glb");
