import { Parallax } from "react-parallax";

const Banner = () => {
  return (
    <Parallax bgImage="banner-img.jpg" strength={200}>
      <div className="h-96 overflow-hidden relative">
        <div className="h-full bg-gray-600 bg-opacity-20 flex items-center justify-center text-center text-white relative">
          <div className="mt-18">
            <h1 className="text-5xl">Ideas</h1>
            <p>Where all our great things begin</p>
          </div>
        </div>
        <div className="absolute -bottom-20 left-0 right-0 h-40 transform -skew-y-6 bg-white"></div>
      </div>
    </Parallax>
  );
};

export default Banner;
