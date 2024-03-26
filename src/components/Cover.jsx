import image from "../images/Photo.png";
import image1 from "../images/Photo (1).png";
import image2 from "../images/Photo (2).png";
import image3 from "../images/Photo (3).png";
import image4 from "../images/Photo (4).png";

function Cover() {
  return (
    <div className="flex flex-wrap gap-5 justify-center items-start">
      <div className="base:ml-auto md:ml-0">
        <img src={image} alt="The Dandy Chair" />
        <p className="text-white">The Dandy Chair</p>
        <p className="text-white">$250</p>
      </div>

      {/* Other items remain unchanged */}
      <div>
        <img className="mt-16" src={image1} alt="" />
        <p className="text-white">...</p>
        <p className="text-white"></p>
      </div>

      <div>
        <img src={image2} alt="The Stanley Table" />
        <p className="text-white">The Stanley Table</p>
        <p className="text-white">$125</p>
      </div>

      <div>
        <img className="mt-12" src={image3} alt="New Lamp" />
        <p className="text-white">New Lamp</p>
        <p className="text-white">$125</p>
      </div>

      <div>
        <img src={image4} alt="The Andel Vase" />
        <p className="text-white">The Andel Vase</p>
        <p className="text-white">$85</p>
      </div>
    </div>
  );
}

export default Cover;
