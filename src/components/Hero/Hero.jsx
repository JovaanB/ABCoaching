import React, { useContext, useState, useEffect } from 'react';
import { Container } from 'react-bootstrap';
import Fade from 'react-reveal/Fade';
import PortfolioContext from '../../context/context';
import Background from '../Background/Background';

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
    <Background>
      <section id="hero">
        <Container className="left-section">
          <Fade left={isDesktop} bottom={isMobile} duration={1000} delay={500} distance="30px">
            <h1 className="hero-title">
              {title || "Hey, moi c'est "}{' '}
              <span className="text-color-main">{name || 'Alvin'}</span>
              <br />
              {subtitle || 'Je suis'} <span className="text-color-main">coach</span> sportif.
            </h1>
          </Fade>
          <Fade left={isDesktop} bottom={isMobile} duration={1000} delay={1000} distance="30px">
            <p className="hero-cta">
              <a className="cta-btn cta-btn--hero" href="#about">
                {cta || 'En savoirs plus'}
              </a>
            </p>
          </Fade>
        </Container>
      </section>
    </Background>
  );
};

export default Header;
