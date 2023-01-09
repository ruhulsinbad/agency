// import { Image } from "@nextui-org/react";
import { Bookmark } from "react-iconly";

const AfterHeroSection = () => {
  return (
    <>
      <section className=" flex px-36 pt-24 text-white bg-slate-800 bg-cover h-full">
        <div className=" w-[50%] pr-16 text-justify">
          <h1 className=" text-5xl font-poppins ">Services we offer!</h1>
          <p className=" mt-20 text-lg font">
            Techsinu is a dynamic web and digital marketing company by ensuring
            best quality and an absolute blend of corporate values with
            professional, dedicating, skilled and experienced staff. We provide
            digital services in multiple aspects with more than 150 IT-based
            products to customers across the globe. Its has helped hundreds of
            companies grow their businesses by providing them with the right
            tools. Our goal is to help companies grow and scale quickly by
            leveraging technology in an intelligent way. Our clients include
            small businesses as well as large corporations; who are also looking
            to expand their reach and increase brand value through the internet.
          </p>
        </div>

        <div className=" grid gap-4 grid-cols-2 grid-rows-2">
          {/* First DIV */}
          <div className=" flex justify-center items-center flex-col w-72 bg-slate-100 shadow-lg rounded-xl px-4 py-8">
            <div className=" flex justify-center items-center rounded-lg h-16 w-16 bg-gray-200">
              <Bookmark primaryColor="white" size="xlarge" />
            </div>

            <div className=" py-4">
              <h1 className=" text-slate-900 text-lg font-semibold opacity-90 py-2 font-poppins">
                High Performence
              </h1>
              <p className=" text-slate-900 text-sm">
                Our coding standards & file arrangement ensures this theme is
                lighter and it will loads your site faster.
              </p>
            </div>
          </div>

          {/* Second DIV */}

          <div className=" flex justify-center items-center flex-col w-72 bg-slate-100 shadow-lg rounded-xl px-4 py-8">
            <div className=" flex justify-center items-center rounded-lg h-16 w-16 bg-gray-200">
              <Bookmark primaryColor="white" size="xlarge" />
            </div>

            <div className=" py-4">
              <h1 className=" text-slate-900 text-lg font-semibold opacity-90 py-2 font-poppins">
                High Performence
              </h1>
              <p className=" text-slate-900 text-sm">
                Our coding standards & file arrangement ensures this theme is
                lighter and it will loads your site faster.
              </p>
            </div>
          </div>

          {/* Third DIV */}
          <div className=" flex justify-center items-center flex-col w-72 bg-slate-100 shadow-lg rounded-xl px-4 py-8">
            <div className=" flex justify-center items-center rounded-lg h-16 w-16 bg-gray-200">
              <Bookmark primaryColor="white" size="xlarge" />
            </div>

            <div className=" py-4">
              <h1 className=" text-slate-900 text-lg font-semibold opacity-90 py-2 font-poppins">
                High Performence
              </h1>
              <p className=" text-slate-900 text-sm">
                Our coding standards & file arrangement ensures this theme is
                lighter and it will loads your site faster.
              </p>
            </div>
          </div>

          {/* Fourth DIV */}
          <div className=" flex justify-center items-center flex-col w-72 bg-slate-100 shadow-lg rounded-xl px-4 py-8">
            <div className=" flex justify-center items-center rounded-lg h-16 w-16 bg-gray-200">
              <Bookmark primaryColor="white" size="xlarge" />
            </div>

            <div className=" py-4">
              <h1 className=" text-slate-900 text-lg font-semibold opacity-90 py-2 font-poppins">
                High Performence
              </h1>
              <p className=" text-slate-900 text-sm">
                Our coding standards & file arrangement ensures this theme is
                lighter and it will loads your site faster.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default AfterHeroSection;
