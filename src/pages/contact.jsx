import styled from "styled-components"
import { useForm } from "react-hook-form";
import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { MdOutlineKeyboardArrowDown, MdOutlineMail } from "react-icons/md";


const Contact = (props) => {
  const form = useRef();
  const { register, reset, formState: { errors }, handleSubmit } = useForm();
  const [isSubmit, setIsSubmit] = useState(false)

  const sendEmail = (formData) => {
    setIsSubmit(true);

    emailjs.sendForm('service_up6y4mq', 'template_2o21u6l', form.current, '00dUGjViC-sqVuNuT')
    .then((result) => {
        console.log(result.text);
    }, (error) => {
        console.log(error.text);
    }); 
    
    reset();
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
            I&apos;d love to hear from you, leave me a message or shoot me an
            email
          </p>
          <ContactMail>
            <MdOutlineMail size={18} />
            <p>contact@nasrah.dev</p>
          </ContactMail>
        </ContactInfo>
      </ContactSidebar>
      <FormContainer>
        {isSubmit && (
          <Success>
            <p>Thank you, your message has been sent!</p>
          </Success>
        )}
        <Form ref={form} onSubmit={handleSubmit(sendEmail)}>
          <FormInput>
            <label htmlFor="name">_name:</label>
            <input
              type="text"
              name="name"
              {...register("name", { required: true })}
            />
            {errors.name && <span>*Fill in your name</span>}
          </FormInput>
          <FormInput>
            <label htmlFor="email">_email:</label>
            <input
              type="text"
              name="email"
              {...register("email", {
                required: "*Please enter your email",
                pattern: {
                  value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                  message: "*Invalid email",
                },
              })}
            />
            {errors.email && <span>{errors.email.message}</span>}
          </FormInput>
          <FormInput>
            <label htmlFor="subject">_subject:</label>
            <input
              type="text"
              name="subject"
              {...register("subject", { required: true })}
            />
            {errors.subject && <span>*Enter a subject</span>}
          </FormInput>
          <FormInput>
            <label htmlFor="message">_message:</label>
            <textarea
              rows="5"
              name="message"
              {...register("message", { required: true })}
            ></textarea>
            {errors.message && <span>*Leave me a message!</span>}
          </FormInput>
          <button type="submit" value="send" className="btn">
            <div>Send Message</div>  
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
  z-index: ${(props) => props.theme.zindex};
`;

const ContactSidebar = styled.div`
  flex: 20%;
  border-right: ${(props) => props.theme.border};
  background: ${(props) => props.theme.bodyOffSet};
  padding: 20px 10px;

  @media screen and (max-width: 700px) {
    border-right: none;
  }
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
  flex-direction: column;
  justify-content: center;
  align-items: center;

  @media screen and (max-width: 700px) {
    margin-top: 80px;
  }

  @media screen and (max-width: 600px) {
    width: 100%;
    padding: 0 30px;
    margin-top: 40px;
  }

  @media screen and (max-width: 500px) {
    width: 100%;
    padding: 0 10px;
  }
`;

const Success = styled.div`
  color: ${props => props.theme.textColor};
  padding-bottom: 30px;
`;

const Form = styled.form`
  padding: 30px;
  border-radius: 10px;

  button {
    font-family: "Karma", serif;
    font-size: 18px;
    background-color: ${(props) => props.theme.body};
    padding: 5px;
    border: 1.5px solid ${(props) => props.theme.primaryColor};
    color: ${(props) => props.theme.body};
    margin: 30px 10px;

    div {
      margin: 0.5px;
      padding: 10px 30px;
      border-radius: 50px;
      background-color: ${(props) => props.theme.plain};
    }

    &:hover {
      border: 2px solid ${(props) => props.theme.tertiaryColor};
    }
  }

  @media screen and (max-width: 700px) {
    margin-bottom: 80px;
  }

  @media screen and (max-width: 600px) {
    width: 100%;
    margin-bottom: 40px;
    padding: 10px;
  }
`;

const FormInput = styled.div`
  display: flex;
  flex-direction: column;
  padding: 10px 0;

  span {
    color: ${(props) => props.theme.tertiaryColor};
    font-size: 12px;
    padding: 10px;
    font-weight: 600;
  }

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
    border-bottom: 2px solid ${(props) => props.theme.primaryColor};
    background-color: transparent;
    color: ${(props) => props.theme.textColor};
    font-size: 16px;

    @media screen and (max-width: 600px) {
      width: 100%;
    }
  }

  input:focus,
  textarea:focus {
    border: 2px solid ${(props) => props.theme.tertiaryColor};
  }
`; 
    