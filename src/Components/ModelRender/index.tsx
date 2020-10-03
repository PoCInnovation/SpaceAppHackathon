import React, { useRef, Suspense } from 'react';
import { Canvas } from 'react-three-fiber';

import Model from './Cran';

export default function ModelRender(): JSX.Element {
  return (
    <Canvas>
      <ambientLight intensity={0.5} />
      <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} />
      <pointLight position={[-10, -10, -10]} />
      <Suspense fallback={null}>
        <Model />
      </Suspense>
    </Canvas>
  );
}
