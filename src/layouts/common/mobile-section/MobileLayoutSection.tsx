import GooglePlayIMG from "@assets/images/google-play-badge.png"
import AppleStoreIMG from "@assets/svg/apple-store.svg"
import MobileAppStoreIMGSample from "@assets/images/_mobile-appstore-download.jpg"
import { Link } from "react-router-dom";

export default function MobileLayoutSection() {
  return (
    <div className="container mx-auto flex flex-col my-3">
      <div className="text-center my-4">
        <h2 className="text-2xl my-2">Efficiently Create an Org with our Mobile Apps</h2>
        <p className="text-lg">
          Manage your community/org on the go! Stay on top of your game with a <br />
          revolutionary mobile platform that gives you control anywhere, anytime.
        </p>
      </div>

      {/*  */}
      <div className="flex flex-col md:flex-row justify-between items-center bg-slate-700 text-white p-12 md:p-28 rounded-lg">
        <div>
          <p className="text-xl md:text-3xl my-3">
            Over 5000 communities and organizations rely on JamiiHub for transparent and inclusive work to drive forward.
          </p>
          <p>Download the App on Google Play or the App Store.</p>

          <div className="w-5/12 flex flex-col md:flex-row justify-center items-center mt-2">
            <Link to={"/"}>
              <img src={GooglePlayIMG} alt="Google Play Store Download" className="w-[200px] h-[52px]" />
            </Link>
            <Link to={"/"}>
              <img src={AppleStoreIMG} alt="Apple App Store Download" className="w-[200px] h-[52px]" />
            </Link>
          </div>
        </div>

        {/*  */}
        <div className="">
          <img src={MobileAppStoreIMGSample} alt="Appstore mobile app" className="w-[6/12] bg-white h-[450px]" />
        </div>
        {/*  */}
      </div>
    </div>
  );
}
