import style from "../certificate.module.css";

const Receiver = ({ usecert }) => {
  return (
    <div style={{
      backgroundColor: "white",
      borderRadius: "10px",
      boxShadow: "0 8px 8px 0 rgba(0,0,0,0.2)",
    }}className={style.detailContainer}>
      <div
        style={{
          position: "absolute",
          top: "-1rem",
          left: "var(--padding-main)",
          color: "var(--primary-50)",
          fontSize: "1.5rem",
          fontWeight: "700",
        }}
      >
        Received By
      </div>
      {usecert.certDetails &&
        usecert.certDetails.variablevalues.length > 0 &&
        usecert.certDetails.variablevalues.map((variable, index) => (
          <div key={"variable-" + index}>
            <div
              style={{
                color: "var(--primary-50)",
              }}
            >
              <b>{variable.variable_name}:</b>
            </div>
            <div>{variable.value}</div>
          </div>
        ))}
      <div
        style={{
          color: "var(--primary-50)",
        }}
      >
        <b>Email:</b>
      </div>
      <div>{usecert.certDetails && usecert.certDetails.email}</div>
      <div
        style={{
          color: "var(--primary-50)",
          wordWrap: "break-word",
          wordBreak: "break-all",
        }}
      >
        <b>Wallet:</b>
      </div>
      <div>{usecert.certDetails && usecert.certDetails.wallet}</div>
    </div>
  );
};

export default Receiver;
