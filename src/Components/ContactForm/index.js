import React from "react";
import {
  ContactWrapper,
  FormWrapper,
  Form,
  FormInput,
  FormTextArea,
  FormBtn,
  ContactH1,
  HomeBtn,
  HomeBtnLink,
} from "./ContactFormElements";

const ContactForm = () => {
  return (
    <ContactWrapper id="contact">
      <HomeBtn>
        <HomeBtnLink to="/">Home</HomeBtnLink>
      </HomeBtn>

      <FormWrapper>
        <ContactH1>Jennifer Nicolella</ContactH1>
        <Form
          id="contactForm"
          action="https://getform.io/f/d9f2d70f-9cf8-438e-a2ad-ae678bb083b9"
          method="POST"
        >
          {/* <FormLabel >Name</FormLabel> */}
          <FormInput placeholder="Name" type="text" name="name" required />
          {/* <FormLabel>Email</FormLabel> */}
          <FormInput placeholder="Email" type="email" name="email" required />
          {/* <FormLabel>Message</FormLabel> */}
          <FormTextArea
            placeholder="Message"
            rows="6"
            cols="50"
            type="text"
            name="message"
          />
          <FormBtn type="submit" form="contactForm" value="Submit">
            Send
          </FormBtn>
        </Form>
      </FormWrapper>
    </ContactWrapper>
  );
};

export default ContactForm;
