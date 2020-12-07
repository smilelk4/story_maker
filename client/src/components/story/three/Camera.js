import React, { useEffect, useRef } from 'react';
import { a } from '@react-spring/three';
import { useFrame, useThree } from 'react-three-fiber';
import CanvasScroll from './CanvasScroll';

const Camera = (props) => {
  const [x] = CanvasScroll([1, 100], { domTarget: props.reference });
  const ref = useRef()
  const { setDefaultCamera } = useThree()
  useEffect(() => void setDefaultCamera(ref.current), [])
  useFrame(() => ref.current.updateMatrixWorld())

  return ( 
    <a.perspectiveCamera ref={ref} {...props} 
          fov="10" position-x={x.to((x) => (x / 500) * 25)}/>
   );
}
 
export default Camera;