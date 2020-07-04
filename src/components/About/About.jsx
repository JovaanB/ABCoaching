import React, { useContext, useState, useEffect } from 'react';
import Fade from 'react-reveal/Fade';
import { Container, Row, Col } from 'react-bootstrap';
import Title from '../Title/Title';
import AboutImg from '../Image/AboutImg';
import PortfolioContext from '../../context/context';

const About = () => {
  const { about } = useContext(PortfolioContext);
  const { img, paragraphOne, paragraphTwo, paragraphThree } = about;

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
    <section id="about">
      <Container>
        <Title title="À propos de moi" />
        <Row className="about-wrapper">
          <Col md={6} sm={12}>
            <Fade bottom duration={1000} delay={600} distance="30px">
              <div className="about-wrapper__image">
                <AboutImg alt="profile picture" filename={img} />
              </div>
            </Fade>
          </Col>
          <Col md={6} sm={12}>
            <Fade left={isDesktop} bottom={isMobile} duration={1000} delay={1000} distance="30px">
              <div className="about-wrapper__info">
                <p className="about-wrapper__info-text">
                  {paragraphOne ||
                    "Comme tu le sais déjà, je m'appelle Alvin. J'habites à Lyon mais ne t'inquiètes pas je peux te coacher à distance ! Je fais de la boxe française et anglaise. Tu as un but à atteindre ? Que ce soit pour du renforcement musculaire, de la préparation physique, une perte de poids. Je suis là pour t'aider à l'atteindre ! N'hèsites pas à me contacter."}
                </p>
                <p className="about-wrapper__info-text">
                  {paragraphTwo ||
                    "Tu peux retrouver tous mes programmes et tarifs en dessous, mais également plus d'informations sur mes réseaux"}
                </p>
                <p className="about-wrapper__info-text">{paragraphThree || 'Alvin.'}</p>
              </div>
            </Fade>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default About;
