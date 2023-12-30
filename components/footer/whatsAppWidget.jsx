// components/WhatsAppWidget.js
"use client";
// components/WhatsAppWidget.js
import React, { useEffect } from 'react';

const WhatsAppWidget = () => {
  useEffect(() => {
    const initializeWhatsAppWidget = () => {
      var options = {
        whatsapp: "54 9 3765180053", // WhatsApp number
        call_to_action: "Contacto", // Call to action
        position: "right", // Position may be 'right' or 'left'
      };

      var proto = document.location.protocol,
        host = "getbutton.io",
        url = proto + "//static." + host;

      var s = document.createElement('script');
      s.type = 'text/javascript';
      s.async = true;
      s.src = url + '/widget-send-button/js/init.js';
      s.onload = function () {
        WhWidgetSendButton.init(host, proto, options);
      };

      var x = document.getElementsByTagName('script')[0];
      x.parentNode.insertBefore(s, x);
    };

    initializeWhatsAppWidget();
  }, []);

  return <></>; // This component doesn't render any visible elements
};

export default WhatsAppWidget;
