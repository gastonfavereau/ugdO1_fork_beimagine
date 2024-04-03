import Image from "next/image";
import Link from "next/link";

const WhatsAppIcon = () =>{
  return(
  <div style={{
    position:"fixed",
    bottom:"2rem",
    right:"2rem",
    zIndex:100,
    cursor:"pointer",
  }}>
    <Link href={"https://wa.me/5493765180053"} target="_blank"><Image src={"/whatsappIcon.gif"} width={50} height={50} /></Link>
  </div>
  )
}

export default WhatsAppIcon;
