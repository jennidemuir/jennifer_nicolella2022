import React from "react";
import Icon1 from "../../Media/cat_color.png"
import Icon2 from "../../Media/dog-color.png";
import Icon3 from "../../Media/horse-color.png";
import {
  ServicesContainer,
  ServicesH1,
  ServicesWrapper,
  ServiceCard,
  ServicesIcon,
  ServicesH2,
  ServicesDiv,
  ContactBtn,
  ContactBtnLink
} from "./ServicesElements";

const Services = () => {
  return (
    <>
      <ServicesContainer id="services">
        <ServicesH1>Services</ServicesH1>
        <ServicesWrapper>
          <ServiceCard>
            <ServicesIcon src={Icon1} />

            <ServicesDiv>
              <ServicesH2>Book a Consultation</ServicesH2>
              <p>Consultations are done over the phone by appointment only.</p>
              <br></br>
              <p>All appointment times are in EASTERN STANDARD TIME</p>{" "}
              <br></br>
              <p>
                Payment as well as a picture of each animal, with their name and
                age, is due at least 24 hours prior to the appointment.
              </p>
            </ServicesDiv>
          </ServiceCard>
          <ServiceCard>
            <ServicesIcon src={Icon2} />

            <ServicesDiv>
              <ServicesH2>What to Expect</ServicesH2>
              <p>
                I will call you at the appointment time, you then ask the
                questions you have for your animal(s)
              </p>{" "}
              <br></br>
              <p>
                You do not need to be present with the animal(s) at the time of
                the call.
              </p>
              <br></br>
              <p>
                I receive the answers in images, words, smells, feelings, body
                sensations and emotions.
              </p>
              <br></br>
            </ServicesDiv>
          </ServiceCard>
          <ServiceCard>
            <ServicesIcon src={Icon3} />

            <ServicesDiv>
              <ServicesH2>Rates</ServicesH2>
              <p>
                15 minute $35 best for brief, straight forward 1-2 questions
              </p>
              <br></br>
              <p>For a more detailed Consultation I also offer:</p>
              <br></br>
              <p>up to 30 minutes $50 best for 1-2 animals</p>
              <br></br>
              <p> up to 60 minutes $90 best for multiple animals </p>
              <br></br>
              <br></br>
            </ServicesDiv>
          </ServiceCard>
        </ServicesWrapper>
        <ContactBtn>
          <ContactBtnLink to='/contact'>
            Schedule Now
          </ContactBtnLink>
        </ContactBtn>
      </ServicesContainer>
    </>
  );
};

export default Services;
