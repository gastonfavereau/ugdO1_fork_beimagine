"use client";
import style from "../certificate.module.css";
import Image from "next/image";
import Link from "next/link";
import MyLottieAnimation from "./animationVerify";


const PrimaryDetails = ({ usecert }) => {
  const verificationstatus = usecert.certDetails.is_verified
    ? "verified"
    : "unverified";


  return (
    <div
      className={style.container}
      style={{
        display: "flex",
        flexWrap: "wrap",
        marginTop: "var(--padding-main)",
        backgroundColor: "white",
        borderRadius: "10px",
        boxShadow: "0 8px 8px 0 rgba(0,0,0,0.2)",
      }}
    >
      {/* <Image
        src={`/${verificationstatus}.svg`}
        height={200}
        width={200}
        alt={verificationstatus}
      /> */}
      <div
        style={{
          height: "200px",
          width: "200px",
        }}
        >
      <MyLottieAnimation />
      </div>
      <div
        style={{
          position: "absolute",
          top: "-2rem",
          left: "50%",
          transform: "translateX(-50%)",
          color: "#1C3564",
          fontSize: "3rem",
          fontWeight: "700",
        }}
       
      >
        {verificationstatus === "verified" ? "Verified" : "Unverified"}
      </div>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start",
          justifyContent: "center",
          width: "100%",
        }}
      >
        <div><b>Certificate id:</b> {usecert.certDetails.id}</div>
        <div style={{ width: "100%" }}>
          <b>CID:</b>
          {usecert.certDetails.cid}
        </div>
        {usecert.txId && (
          <div style={{ width: "100%" }}><b>Tx Id:</b> {usecert.txId.tx_id}</div>
        )}
        {usecert.txId && (
          <Link
            href={process.env.NEXT_PUBLIC_EXPLORER + usecert.txId.tx_id}
            target="_blank"
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontSize: "1.25rem",
              color: "var(--primary-50)",
            }}
          >
            Explorer{" "}
            <Image
              src={"/new-tab.svg"}
              width={25}
              height={25}
              alt="explorer"
            />
          </Link>
        )}
      </div>
    </div>
  );
};

export default PrimaryDetails;
