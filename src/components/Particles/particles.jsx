import React from 'react';
import Particles from 'react-particles-js';

const particleShape = {
  particles: {
    number: {
      value: 160,
      density: {
        enable: false,
      },
    },
    size: {
      value: 10,
      random: true,
    },
    move: {
      direction: 'bottom',
      out_mode: 'out',
    },
    line_linked: {
      enable: false,
    },
  },
  interactivity: {
    events: {
      onclick: {
        enable: true,
        mode: 'remove',
      },
    },
    modes: {
      remove: {
        particles_nb: 10,
      },
    },
  },
};

const ParticlesEffect = () => {
  return (
    <Particles
      className="particles"
      style={{
        position: 'absolute',
        width: '100%',
        height: '100%',
        top: 0,
        left: 0,
      }}
      params={particleShape}
    />
  );
};

export default ParticlesEffect;
