import React from 'react';

export const AmbientMesh: React.FC = () => {
  return (
    <div className="ambient-mesh" aria-hidden="true">
      <div className="mesh-orb mesh-orb-1" />
      <div className="mesh-orb mesh-orb-2" />
      <div className="mesh-orb mesh-orb-3" />
      <div className="mesh-orb mesh-orb-4" />
    </div>
  );
};

export default AmbientMesh;
