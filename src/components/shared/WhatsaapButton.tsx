import { FloatingWhatsApp } from "react-floating-whatsapp";

export const WhatsaapButton = () => {
  return (
    <FloatingWhatsApp 
        phoneNumber='+543765300783'
        accountName='InforMatteo'
        avatar="/logo/logo.jpg"
        statusMessage="Generalmente contesta muy rápido"
        placeholder="Escribe tu mensaje aquí"
        style={{
          color:'#000'
        }}
        chatMessage='Hola, en que puedo ayudarte?'

      />
  )
}
