import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";

const Banner = () => {
  return (
    <Carousel className="w-8/12 mx-auto z-index: -1;">
      <div>
        <img src="https://i.postimg.cc/2SRJ1Z4X/01.jpg" />
        <p className="legend">কুইজ প্রতিযোগিতার পুরস্কার প্রদান</p>
      </div>
      <div>
        <img src="https://i.postimg.cc/3R5CBXxP/02.jpg" />
        <p className="legend">সম্প্রসারিত নতুন ভবনে উপস্থিত ছাত্রীদের একাংশ</p>
      </div>
      <div>
        <img src="https://i.postimg.cc/TYL1RZ9J/03.jpg"/>
        <p className="legend">বাংলা নববর্ষ উদযাপন</p>
      </div>
      <div>
        <img src="https://i.postimg.cc/0yvCDdrF/04.jpg"/>
        <p className="legend">বিদায়ী ছাত্রছাত্রীদের সাথে শিক্ষকবৃন্দ</p>
      </div>
      <div>
        <img src="https://i.postimg.cc/J0bkzv3n/05.jpg"/>
        <p className="legend">নব বর্ষ উদযাপন</p>
      </div>
      <div>
        <img src="https://i.postimg.cc/W16xkw6f/06.jpg"/>
        <p className="legend">স্কাউটস এর কর্মসূচী</p>
      </div>
    </Carousel>
  );
};

export default Banner;
