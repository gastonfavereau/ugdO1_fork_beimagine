import style from "../certificate.module.css";


const Advertisment = () => {
  return (
    <div
      className={style.container}
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: "var(--padding-main)",
      }}
    >
      <div
        style={{
          color: "var(--primary-50)",
          fontSize: "2rem",
          fontWeight: "700",
          textAlign: "center",
        }}
      >
        Issue your own verified certificate as NFT
      </div>
      <div
        style={{
          fontSize: "1.5rem",
          maxWidth: "var(--max-width-form)",
          textAlign: "center",
        }}
      >
        You can issue certifications as NFTs and send them to virtual wallets,
        verifying their validity using blockchain technology
      </div>
      <div style={{ width: "fit-content" }}>
        {/* <LinkButton variant="primary" text="Try For Free" href="/trial" /> */}
        <button style={{
          alignContent:"center",
          width:"100px",
          height:"50px",
          backgroundColor:"#005FAF",
          color:"white",
          padding:"5px",
          borderRadius:"5px"
        }}
        >Try For Free</button>
      </div>
    </div>
  );
};

export default Advertisment;
