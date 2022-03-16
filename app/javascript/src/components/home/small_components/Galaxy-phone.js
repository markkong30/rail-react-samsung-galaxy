/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
author: AR Quick Look USDZ (https://sketchfab.com/pewcus-tunbek-4Buvso)
license: CC-BY-4.0 (http://creativecommons.org/licenses/by/4.0/)
source: https://sketchfab.com/3d-models/samsung-galaxy-s22-ultra-fcfe3ca49ff243d4be1493c7fcc1c751
title: Samsung Galaxy S22 Ultra
*/

import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";
import phoneGLTF from "@images/galaxy-phone.gltf";

export default function Model({ ...props }) {
  const group = useRef();
  const { nodes, materials } = useGLTF(phoneGLTF);
  return (
    <group ref={group} {...props} dispose={null}>
      <group rotation={[-Math.PI / 2, 0, 0]}>
        <group rotation={[Math.PI / 2, 0, 0]}>
          <group scale={30}>
            <group position={[0.03, -0.02, 0]}>
              <mesh geometry={nodes.S_Pen_Tip_1.geometry} material={nodes.S_Pen_Tip_1.material} />
            </group>
            <group position={[0.03, -0.02, 0]}>
              <mesh geometry={nodes.S_Pen_Point_1.geometry} material={materials.Pen_Top} />
            </group>
            <group position={[0, -0.05, 0]}>
              <mesh geometry={nodes.S_Pen_Button_1.geometry} material={materials.Pen_Button} />
            </group>
            <group position={[0, -0.05, 0]}>
              <mesh geometry={nodes.S_Pen_Body_1.geometry} material={materials.Pen_Body} />
            </group>
            <group position={[-0.03, 0.03, 0]}>
              <mesh geometry={nodes.S_Pen_Ball_1.geometry} material={materials.Pen_Ball} />
            </group>
            <mesh geometry={nodes.Display_ActiveArea.geometry} material={materials.Display_ActiveArea} />
            <mesh geometry={nodes.Antenna_Plastic.geometry} material={materials.Antenna_Plastic} />
            <mesh geometry={nodes.Black_hole.geometry} material={nodes.Black_hole.material} />
            <mesh geometry={nodes.Flash_Glass.geometry} material={materials.Flash_Glass} />
            <mesh geometry={nodes.AF_Sensor_Glass.geometry} material={materials.Sensor} />
            <mesh geometry={nodes.SAMSUNG_LOGO.geometry} material={materials.SAMSUNG_LOGO} />
            <mesh geometry={nodes.BackCover_Glass.geometry} material={materials.Back_Cover_Glass} />
            <mesh geometry={nodes.BackCover_Glass_hole.geometry} material={materials.BackCover_Glass_hole} />
            <mesh geometry={nodes.Back_Cam_Deco_2.geometry} material={materials.BackCamDeco} />
            <mesh geometry={nodes.usb_2.geometry} material={materials.Usb_2} />
            <mesh geometry={nodes.usb_1.geometry} material={materials.Usb_1} />
            <mesh geometry={nodes.Bezel.geometry} material={materials.Bezel} />
            <mesh geometry={nodes.Rearcase_hole.geometry} material={materials.Rearcase_hole} />
            <mesh geometry={nodes.Back_Cam_Deco.geometry} material={materials.Cam_Bezel} />
            <mesh geometry={nodes.Flash.geometry} material={materials.Flash} />
            <mesh geometry={nodes.Zoom_Cam.geometry} material={materials.Zoom_Cam} />
            <mesh geometry={nodes.Cam.geometry} material={materials.Cam_lens} />
            <mesh geometry={nodes.Rear_Case.geometry} material={nodes.Rear_Case.material} />
            <mesh geometry={nodes.Cam_Body.geometry} material={materials.Cam_Body} />
            <mesh geometry={nodes.Cam_Glass.geometry} material={materials.Cam_Glass} />
            <mesh geometry={nodes.Back_Cam_Deco_3.geometry} material={nodes.Back_Cam_Deco_3.material} />
          </group>
        </group>
      </group>
    </group>
  );
}

useGLTF.preload(phoneGLTF);
