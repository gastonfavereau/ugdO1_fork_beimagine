import lottie from 'lottie-web';
import animationData from './AnimationVerified.json'
import { useEffect, useRef } from "react";

const MyLottieAnimation = () => {
    const container = useRef(null);
  
    useEffect(() => {
      const anim = lottie.loadAnimation({
        container: container.current,
        renderer: 'svg', // You can choose the renderer (svg, canvas, html)
        loop: true,
        autoplay: true,
        animationData: animationData,
      });
  
      return () => {
        // Clean up animation when the component unmounts
        anim.destroy();
      };
    }, []); // Empty dependency array means this effect runs once after the initial render
  
    return <div ref={container} />;
  };
  
  export default MyLottieAnimation;
  