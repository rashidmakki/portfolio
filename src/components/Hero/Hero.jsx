import React, { useContext, useState, useEffect } from 'react';
import { Container } from 'react-bootstrap';
import Fade from 'react-reveal/Fade';
import Particles from 'react-particles-js';
import PortfolioContext from '../../context/context';

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

const Header = () => {
  const { hero } = useContext(PortfolioContext);
  const { title, name, subtitle, cta } = hero;

  const [isDesktop, setIsDesktop] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    if (window.innerWidth > 769) {
      setIsDesktop(true);
      setIsMobile(false);
    } else {
      setIsMobile(true);
      setIsDesktop(false);
    }
  }, []);

  return (
    <div className="Hero">
      <Particles height="100vh" width="220vh" className="particles" params={particleShape} />
      <section id="hero" className="jumbotron">
        <Container>
          <Fade left={isDesktop} bottom={isMobile} duration={1000} delay={500} distance="30px">
            <h1 className="hero-title">
              {title} <span className="text-color-main">{name}</span>
              <br />
              {subtitle}
            </h1>
          </Fade>
          <Fade left={isDesktop} bottom={isMobile} duration={1000} delay={1000} distance="30px">
            <p className="hero-cta">
              <a className="cta-btn cta-btn--hero" href="#about">
                {cta || 'Know more'}
              </a>
            </p>
          </Fade>
        </Container>
      </section>
    </div>
  );
};

export default Header;
