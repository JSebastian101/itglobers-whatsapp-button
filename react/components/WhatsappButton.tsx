import React from 'react';
import PropTypes from 'prop-types';

type Props = {
  logo: string,
  phone: string,
  message: string,
  width: number,
  height: number
}

const WhatsappButton = ({logo, phone, message, width, height}: Props) => {
  const formatMessage = message.replace(/ /g, "%20")
  console.log(formatMessage);
  
  return (
    <div className='fixed bottom-2 right-2 flex flexColumn'>
      <a 
      href={`https://wa.me/${phone}?text=${formatMessage}`}
      target= '_blank'
      rel='noreferrer noopener'
      >
        <img src={logo} width={width} height={height} alt="whatsapp-logo" />
      </a>
    </div>  
  )
}
WhatsappButton.propTypes = {
  logo: PropTypes.string.isRequired,
  phone: PropTypes.string.isRequired,
  message: PropTypes.string,
  width: PropTypes.number,
  height: PropTypes.number
}

WhatsappButton.defaultProps = {
  logo: "mi-logo.png",
  phone : "3176723596",
  message: "Hola, bienvenido!",
  width: 40,
  height: 40
}

WhatsappButton.schema = {
  title : "whatsapp-button",
  type : "object",
  properties : {
    logo: {
      title : "whatsapp-logo",
      type : "string",
      widget : {
        "ui:widget" : "image-uploader"
      }
    },
    phone : {
      title : "phone-number",
      description : "add phone-number",
      type : "string"
    },
    message : {
      title : "template-message",
      description : "add template-message",
      type : "string",
      widget : {
        "ui:widget" : "textarea"
      }
    },
    width : {
      title : "width",
      description : "whatsapp-logo width",
      type : "number"
    },
    height : {
      title : "height",
      description : "whatsapp-logo height",
      type : "number"
    }
  }
}

export default WhatsappButton;