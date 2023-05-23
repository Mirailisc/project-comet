/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
*/

import { useGLTF } from '@react-three/drei'

const NightCat = (props) => {
  const { nodes, materials } = useGLTF('/nightcat.gltf')

  return (
    <group {...props} dispose={null}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['voxel-nightcat'].geometry}
        material={materials.palette}
        rotation={[Math.PI / 2, 0, 0]}
      />
    </group>
  )
}

export default NightCat

useGLTF.preload('/nightcat.gltf')
