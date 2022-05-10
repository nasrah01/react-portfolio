import styled from "styled-components"
import { useRef } from "react";
import emailjs from "@emailjs/browser";


const Contact = () => {


  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_up6y4mq', 'template_2o21u6l', form.current, '00dUGjViC-sqVuNuT')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
  };


  return (
    <ContactContainer>
      <FormContainer>
        <Form ref={form} onSubmit={sendEmail}>
          <FormInput>
            <label htmlFor="name">_name:</label>
            <input type="text" name="name"/>
          </FormInput>
          <FormInput>
            <label htmlFor="email">_email:</label>
            <input type="email" name="email" />
          </FormInput>
          <FormInput>
            <label htmlFor="subject">_subject:</label>
            <input type="text" name="subject" />
          </FormInput>
          <FormInput>
            <label htmlFor="message">_message:</label>
            <textarea rows="5" name="message"></textarea>
          </FormInput>
          <button type="submit" value='send'>Send</button>
        </Form>
      </FormContainer>
    </ContactContainer>
  );
};

export default Contact;

const ContactContainer = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;

  @media screen and (max-height: 800px) {
    margin: 40px 0;
  }
`;

const FormContainer = styled.div`
  @media screen and (max-width: 600px) {
    width: 100%;
    padding: 0 30px;
  }
`;

const Form = styled.form`
  border: ${(props) => props.theme.border};
  box-shadow: ${(props) => props.theme.boxShadow};
  padding: 30px;
  border-radius: 10px;

  button {
    background-color: ${(props) => props.theme.body};

    border: 1.5px solid ${(props) => props.theme.primaryColor};
    color: ${(props) => props.theme.primaryColor};
    border-radius: 5px;
    padding: 10px 30px;
    margin: 20px 0;
  }

  @media screen and (max-width: 600px) {
    width: 100%;
  }
`;

const FormInput = styled.div`
  display: flex;
  flex-direction: column;
  padding: 10px 0;

  label {
    padding: 5px;
    color: ${(props) => props.theme.primaryColor};
  }

  input,
  textarea {
    width: 400px;
    padding: 10px 5px;
    border-radius: 5px;
    outline: none;
    border: none;
    border: ${(props) => props.theme.border};
    background-color: ${(props) => props.theme.bodyOffSet};
    color: ${(props) => props.theme.textColor};

    @media screen and (max-width: 600px) {
      width: 100%;
    }
  }

  input:focus,
  textarea:focus {
    border: 2px solid ${(props) => props.theme.tertiaryColor};
  }
`;