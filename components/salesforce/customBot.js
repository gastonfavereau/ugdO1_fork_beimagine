"use client";
import React, { useEffect } from "react";
import Script from "next/script";
const ChatbotComponent = () => {
  function initEmbeddedMessaging() {
    console.log("initEmbeddedMessaging");
    try {
      console.log("initEmbeddedMessaging:Try");
      embeddedservice_bootstrap.settings.language = "es"; // For example, enter 'en' or 'en-US'

      embeddedservice_bootstrap.init(
        "00DHp000001rh2f",
        "Web_UGD",
        "https://fundacionipesmi.my.site.com/ESWWebUGD1704222990712",
        {
          scrt2URL: "https://fundacionipesmi.my.salesforce-scrt.com",
        }
      );
    } catch (err) {
      console.error("Error loading Embedded Messaging: ", err);
    }
  }

  return (
    <Script
      type="text/javascript"
      src="https://fundacionipesmi.my.site.com/ESWWebUGD1704222990712/assets/js/bootstrap.min.js"
      onLoad={initEmbeddedMessaging}
    />
  );
};

export default ChatbotComponent;
