import style from "../certificate.module.css";

const Issuer = ({ usecert }) => {
  return (
    <div style={{
      backgroundColor: "#1C3564",
      borderRadius: "10px",
      boxShadow: "0 8px 8px 0 rgba(0,0,0,0.2)",
    }} className={style.detailContainer}>
      <div
        style={{
          // position: "absolute",
          // top: "1rem",
          left: "var(--padding-main)",
          color: "white",
          fontSize: "1.5rem",
          fontWeight: "700",
        }}
      >
        Issued By
      </div>
      <div
        style={{
          fontSize: "1.5rem",
          fontWeight: "700",
          color: "white",
        }}
      >
        {usecert.certDetails && usecert.certDetails.issuer.name}
      </div>
      <div
        style={{
          color: "white",
        }}
      >
        <b>Address:</b>
      </div>
      <div  style={{
          color:"white",
        }}>{usecert.certDetails && usecert.certDetails.issuer.address}</div>
      <div
        style={{
          color:"white",
        }}
      >
       <b>Country:</b> 
      </div>
      <div  style={{
          color:"white",
        }}>{usecert.certDetails && usecert.certDetails.issuer.country}</div>
      <div
        style={{
          color: "white",
        }}
      >
        <b>Website:</b>
      </div>
      <div  style={{
          color:"white",
        }}>{usecert.certDetails && usecert.certDetails.issuer.website}</div>
      <div
        style={{
          color: "white",
        }}
      >
        <b>Description:</b>
      </div>
      <div  style={{
          color:"white",
        }}>{usecert.certDetails && usecert.certDetails.issuer.description}</div>
    </div>
  );
};

export default Issuer;
