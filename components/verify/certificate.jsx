
import PrimaryDetails from "./subcomponents/primaryDetails";
import Issuer from "./subcomponents/issuer";
import Receiver from "./subcomponents/receiver";
import CertImage from "./subcomponents/certImage";
import style from "./certificate.module.css";
import usecertificate from "./usecertificate";
import Image from "next/image";


const Certificate = async ({ params }) => {
  const usecert = await usecertificate(params);
  
  if (!usecert.certDetails || usecert.certDetails.issuer.id !== 43)
    return (
      <div
        style={{
          width: "100%",
          height: "100vh",
          minHeight: "var(--min-height-screen)",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          gap: "var(--padding-main)",
          wordWrap: "break-word",
          backgroundImage:"url(/cool-background.png)"
        }}
      >
        <div
          style={{
            width: "400px",
            height: "500px",
            backgroundColor: "white",
            borderRadius: "10px",
            boxShadow: "0 8px 8px 0 rgba(0,0,0,0.2)",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            gap: "var(--padding-main)",
            wordWrap: "break-word",
          }}
        >
        <Image
          src={`/unverified.svg`}
          height={250}
          width={250}
          alt={"Unverified"}
        />
  

        <div
          style={{
            color: "var(--primary-50)",
            fontSize: "3rem",
            fontWeight: "700",
          }}
        >
          Unverified
        </div>
        </div>
      </div>
    );




  return (
    <div
      style={{
        width: "100%",
        minHeight: "var(--min-height-screen)",
        display: "flex",
        flexDirection: "column",
        gap: "var(--padding-large)",
        wordWrap: "break-word",
        backgroundImage:"url(/cool-background.png)"
      }}
      className={style.certificateMain}
    >
      <PrimaryDetails usecert={usecert} />

      <div className={style.details}>
        <Issuer usecert={usecert} />
        <Receiver usecert={usecert} />
      </div>
      <CertImage usecert={usecert} />
      {/* <Advertisment /> */}
    </div>
  );
};

export default Certificate;
