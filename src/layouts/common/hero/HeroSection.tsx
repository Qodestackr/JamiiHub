import { DONATE_URL } from "@/constants/urls";
import HeroSectionIMG from "@assets/images/hero-section.png";
import { Button } from "@core/components";
import { Link } from "react-router-dom";

export default function HeroSection() {
  return (
    <section className="container mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-3 items-center">
        <div className="flex flex-col md:w-9/12">
          <span className="">
            Inclusive. Community Driven: The People Operating System
          </span>

          <span className="font-medium text-xl md:text-3xl my-3">
            JamiiHub Community, Everything Starts With
            People.
          </span>

          <Link to={DONATE_URL}>
            <Button className="my-4">DONATE TO THE COMMUNITY</Button>
          </Link>

        </div>

        <div>
          <img
            src={HeroSectionIMG}
            alt="Hero Section Image"
            className="h-full w-full"
          />
        </div>
      </div>
    </section>
  );
}
