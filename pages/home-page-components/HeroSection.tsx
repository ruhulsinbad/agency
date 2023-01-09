import { Button, Image, Checkbox, css } from "@nextui-org/react";
import { ArrowRight, TickSquare } from "react-iconly";

const HeroSection = () => {
  return (
    <>
      <section className="  bg-gradient-to-bl from-pink-100 via-slate-100  to-red-100">
        <div className=" flex flex-col justify-start min-w-full min-h-screen px-4 lg:px-36  md:flex-row ">
          {/* Part One */}

          <div className=" my-12 flex items-center min-h-[50%] w-full">
            <div>
              <div className=" flex gap-8 mb-8">
                <p className=" flex gap-2 font-poppins opacity-70">
                  <TickSquare primaryColor=" green" filled /> 30 days money back
                </p>
                <p className=" flex gap-2 font-poppins opacity-70">
                  <TickSquare primaryColor=" green" filled /> Great support
                </p>
              </div>
              <h1 className=" text-4xl font-bold mb-8 font-poppins opacity-80">
                Code snippets for easier coding
              </h1>
              <p className=" text-xl text-gray-600">
                An awesome library of Bootstrap snippets to avoid typing
                repitative codes, no need to download the entire theme
              </p>
              <div className=" flex gap-2 mt-10">
                <Button
                  auto
                  size="lg"
                  color="primary"
                  icon={<ArrowRight filled />}
                  iconRight="true"
                >
                  Get in touch
                </Button>
                <Button
                  auto
                  size="lg"
                  color="success"
                  icon={<ArrowRight filled />}
                  iconRight="true"
                >
                  Get in touch
                </Button>
              </div>
            </div>
          </div>

          {/* Part Two  */}

          <div className=" my-12 flex items-center min-h-[50%] w-full ">
            <Image
              src="https://d1bltcifwhkdae.cloudfront.net/uploads/Group-1632.png"
              alt="Hero Section Image"
            />
          </div>
        </div>
      </section>
    </>
  );
};

export default HeroSection;
