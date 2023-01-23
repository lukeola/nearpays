import React from "react";
import { Emailcontainer, EmailIcon, EmailInput } from "./NewsletterElements";
import SendIcon from '../../images/sendicon.png'

// a basic form
const SimpleForm = ({ status, message, className, style, onSubmitted }) => {
  let input;
  const submit = () =>
    input &&
    input.value.indexOf("@") > -1 &&
    onSubmitted({
      EMAIL: input.value
    });

  return (
    <div className={className} style={style}>
     <Emailcontainer>
      {status === "sending" && <div style={{ color: "#fff" , marginTop:'40px', position:'absolute'}}>sending...</div>}
      {status === "error" && (
        <div
          style={{ color: "red" }}
          dangerouslySetInnerHTML={{ __html: message }}
        />
      )}
      {status === "success" && (
        <div
          style={{ color: "#5DAF60", position:'absolute', top:'40px' }}
          dangerouslySetInnerHTML={{ __html: message }}
        />
      )}
     
      <EmailInput
        ref={node => (input = node)}
        type="email"
        placeholder="Your email"
      />
      <EmailIcon onClick={submit}><img alt='' src={SendIcon}/></EmailIcon>
      </Emailcontainer>
    </div>
  );
};

export default SimpleForm;
