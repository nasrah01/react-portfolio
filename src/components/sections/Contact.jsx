import styled from "styled-components"
import { useForm } from "react-hook-form";
import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { MdOutlineMail } from "react-icons/md";
import ImageThree from '../../Images/image3.png'
import ImageFour from "../../Images/image4.png";

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
    <ContactContainer id='contact'>
      <ImageBox>
        <ImageOne>
          <img src={ImageThree} alt="illustration" />
        </ImageOne>
        <ImageTwo>
          <img src={ImageFour} alt="illustration" />
        </ImageTwo>
      </ImageBox>
      <FormContainer>
        <ContactHeader>
          <h2>Contact Me</h2>
          <p>
            Currently looking for new projects and opportunities I&apos;d love
            to hear from you, leave me a message or shoot me an email
          </p>
          <ContactMail>
            <Icon>
              <MdOutlineMail />
            </Icon>
            <p>contact@nasrah.dev</p>
          </ContactMail>
        </ContactHeader>
        <FormBox>
          {isSubmit && (
            <Success>
              <p>Thank you, your message has been sent!</p>
            </Success>
          )}
          <Form ref={form} onSubmit={handleSubmit(sendEmail)}>
            <FormInput>
              <label htmlFor="name">Name:</label>
              <input
                type="text"
                name="name"
                {...register("name", { required: true })}
              />
              {errors.name && <span>*Fill in your name</span>}
            </FormInput>
            <FormInput>
              <label htmlFor="email">Email:</label>
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
              <label htmlFor="subject">Subject:</label>
              <input
                type="text"
                name="subject"
                {...register("subject", { required: true })}
              />
              {errors.subject && <span>*Enter a subject</span>}
            </FormInput>
            <FormInput>
              <label htmlFor="message">Message:</label>
              <textarea
                rows="5"
                name="message"
                {...register("message", { required: true })}
              ></textarea>
              {errors.message && <span>*Leave me a message!</span>}
            </FormInput>
            <button type="submit" value="send">
              <div>Send Message</div>
            </button>
          </Form>
        </FormBox>
      </FormContainer>
    </ContactContainer>
  );
};

export default Contact;

const ContactContainer = styled.div`
  padding: 5rem calc(8px + 1.5625vw);
  display: flex;
 
  @media screen and (max-width: 1000px) {
    flex-direction: column;
  }
`;

const ImageBox = styled.div`
  flex: 50%;
  position: relative;
`;

const ImageOne = styled.div`
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);

  img {
    width: 100%;
  }
`;

const ImageTwo = styled.div`

  img {
    width: 100%;
  }
`;

const FormContainer = styled.div`
  flex: 50%;
  padding: 2rem;

  @media screen and (max-width: 1000px) {
    padding-top: 5rem;
  }
`;

const ContactHeader = styled.div`
  text-align: center;

  h2 {
    font-size: 1.4rem;
    text-transform: uppercase;
    font-weight: 600;
    margin-bottom: 0.5rem;
    color: ${(props) => props.theme.brightColor};
  }

  p {
    font-size: 1.6rem;
    color: ${(props) => props.theme.secondaryText};
    font-weight: 500;
  }
`;

const ContactMail = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Icon = styled.div`
  font-size: 2.5rem;
  color: ${props => props.theme.secondaryText};
`

const FormBox = styled.div`
  display: flex;
  justify-content: center;
`

const Success = styled.div`
 
`;

const Form = styled.form`
  padding: 2rem;

  @media screen and (max-width: 500px) {
    flex: 1;
    padding: 0;
  }

  button {
    border: 2px solid ${(props) => props.theme.primaryText};
    background: transparent;
    margin-top: 2rem;
    border-radius: 50px;
    cursor: pointer;

    div {
      background-color: ${(props) => props.theme.primaryText};
      color: ${(props) => props.theme.lightPrimary};
      font-size: 1.6rem;
      margin: 0.6rem;
      padding: 0.5rem 1rem;
      border-radius: 50px;
    }
  }
`;

const FormInput = styled.div`
  display: flex;
  flex-direction: column;
  flex-wrap: nowrap;
  justify-content: center;
  padding: 1rem 0;

  label,
  input,
  textarea {
    font-size: 1.6rem;
    color: ${(props) => props.theme.secondaryText};
  }

  input,
  textarea {
    width: 450px;

    @media screen and (max-width: 500px) {
      width: 100%;
    }
  }

  span {
    font-size: 1.2rem;
    color: ${props => props.theme.primary};
  }
`; 
    