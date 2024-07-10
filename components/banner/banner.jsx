// components/banner.js
import './banner.css'

const Banner = ({ src }) => {
  return (
    <div className={"gifContainer"}>
      <img src={src} alt="Animated GIF" className={"gifImage"} />
    </div>
  );
};

export default Banner;

