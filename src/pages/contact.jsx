import styled from "styled-components"
import { useRef } from "react";
import emailjs from "@emailjs/browser";
import { MdOutlineKeyboardArrowDown, MdOutlineMail } from "react-icons/md";


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
      <ContactSidebar>
        <ContactHeader>
          <MdOutlineKeyboardArrowDown />
          <h2>Contact Me</h2>
        </ContactHeader>
        <ContactInfo>
          <p>
            I&apos;d love to here from you, leave me a message or shoot me an
            email
          </p>
          <ContactMail>
            <MdOutlineMail size={18}/>
            <p>contact@nasrah.dev</p>
          </ContactMail>
        </ContactInfo>
      </ContactSidebar>
      <FormContainer>
        <Form ref={form} onSubmit={sendEmail}>
          <FormInput>
            <label htmlFor="name">_name:</label>
            <input type="text" name="name" />
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
          <button type="submit" value="send">
            Send
          </button>
        </Form>
        
      </FormContainer>
    </ContactContainer>
  );
};

export default Contact;

const ContactContainer = styled.div`
  flex: 1;
  display: flex;

  @media screen and (max-width: 700px) {
    flex-direction: column;
  }
`;

const ContactSidebar = styled.div`
  flex: 20%;
  border-right: ${(props) => props.theme.border};
  border-top: ${(props) => props.theme.border};
  background: ${(props) => props.theme.bodyOffSet};
  padding: 20px 10px;
`;

const ContactHeader = styled.div`
  display: flex;
  align-items: flex-start;

  h2 {
    font-size: 12px;
    font-weight:  700;
    text-transform: uppercase;
  }
`

const ContactInfo = styled.div`
  font-size: 14px;
  padding: 10px 20px;
  color: ${(props) => props.theme.primaryColor};
`;

const ContactMail = styled.div`
  display: flex;
  align-items: center;
  padding: 5px 0;
  color: ${(props) => props.theme.primaryColor};

  p {
    padding-left: 5px;
  }
`;

const FormContainer = styled.div`
  flex: 80%;
  display: flex;
  justify-content: center;
  align-items: center;

  @media screen and (max-width: 600px) {
    width: 100%;
    padding: 0 30px;
  }
`;

const Form = styled.form`
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

  @media screen and (max-width: 700px) {
    margin: 80px 0;
  }

  @media screen and (max-width: 600px) {
    width: 100%;
    margin: 40px 0;
    padding: 10px;
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
    border-bottom: 2px solid ${(props) => props.theme.bodyOffSet};
    background-color: ${(props) => props.theme.body};
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