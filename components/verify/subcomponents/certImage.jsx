import style from "../certificate.module.css";
import Image from "next/image";


const CertImage = ({ usecert }) => {
  const imagesrc = usecert.certDetails
    ? usecert.certDetails.image
      ? usecert.certDetails.image
      : "/icons/imageplaceholder.svg"
    : "/icons/imageplaceholder.svg";
  return (
    <div
      className={style.container}
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: "var(--padding-main)",
        backgroundColor: "#1C3564",
      }}
    >
      <div
        style={{
          // position: "absolute",
          // top: "-1rem",
          left: "var(--padding-main)",
          color: "white",
          fontSize: "1.5rem",
          fontWeight: "700",
        }}
      >
        Certificate
      </div>
      <div
        style={{
          width: "100%",
          maxWidth: "var(--template-width)",
          aspectRatio: "4/3",
          position: "relative",
        }}
      >
        <Image
          src={imagesrc}
          alt={"Certificate"}
          fill={true}
          className={style.previewimage}
        />
      </div>
      <div style={{ width: "fit-content" }}>
        {/* <LinkButton
          href={imagesrc}
          target="_blank"
          text="Download"
          variant={"primary"}
          endIcon={"download"}
        /> */}
        <button style={{
          alignContent:"center",
          width:"100px",
          height:"50px",
          backgroundColor:"#005FAF",
          color:"white",
          padding:"5px",
          borderRadius:"5px"
        }}
        >Download</button>
      </div>
    </div>
  );
};

export default CertImage;
