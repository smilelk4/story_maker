import { useEffect, useCallback } from 'react';
import { useGesture } from 'react-use-gesture';
import { useSpring, config } from '@react-spring/core';
import clamp from "lodash/clamp";

const CanvasScroll = (bounds, props) => {
  const [{ x }, set] = useSpring(() => ({ x: 0, config: config.slow }));
  const fn = useCallback(
    ({ xy: [cx, ], previous: [, px], memo = x.get() }) => {
      const newX = clamp(memo + cx - px, ...bounds);
      set({ x: newX });
      return newX;
    },
    [bounds, x, set]
  );
  const bind = useGesture({ onWheel: fn, onDrag: fn }, props);
  useEffect(() => props && props.domTarget && bind(), [props, bind]);
  return [x, bind];
}
 
export default CanvasScroll;