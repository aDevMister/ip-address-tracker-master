import Image from "next/image";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-12">
      <div className="  bg-[url(/images/pattern-bg-desktop.png)] w-full h-[40vh] relative">
        <div className="flex flex-col  w-full justify-center items-center py-6">
          <p className=" text-[18px] font-[700] pb-3 text-white  ">
            IP Address Tracker
          </p>
          <div className="flex flex-row w-full justify-center ">
            <div className=" bg-white w-[30%] py-3 px-2 rounded-l-lg flex justify-center items-center">
              <input
                type="text"
                placeholder="Search for any IP address or domain "
                className="bg-transparent text-[12px] font-[400] w-full outline-none"
              />
            </div>
            <div className="bg-[hsl(0,0%,17%)]  p-3 flex items-center rounded-r-lg ">
              <Image
                src="/images/icon-arrow.svg"
                width={10}
                height={10}
                alt="arrow"
              />
            </div>
          </div>
          <div className="bg-white relative top-12 w-[80%] py-12  rounded-lg flex flex-row gap-4 justify-center items-center">
            <div className="flex flex-col">
              <p>IP Address</p>
              <p>192.212.174.101</p>
            </div>
          </div>
        </div>
        <div className="bg-[grey] w-full h-[60vh]">

        </div>
         Location Timezone UTC
        {/* !-- add offset value dynamically using the API -- */}
        ISP
        <div className="attribution">
          Challenge by{" "}
          <a href="https://www.frontendmentor.io?ref=challenge" target="_blank">
            Frontend Mentor
          </a>
          . Coded by <a href="#">Your Name Here</a>.
        </div>
      </div>
    </main>
  );
}
