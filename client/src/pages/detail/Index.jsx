import React from "react";

const DetailPage = () => {
  return (
    <div className="p-2">
      <div className="rounded-md shadow-md bg-white mt-1 sm:mt-3 p-5 flex flex-col sm:flex-row gap-4 sm:gap-7">
        <div className="">
          {/* logo */}
          <img src="" alt="" className="bg-red h-40 w-36" />
        </div>
        <div className="">
          <p className="text-3xl font-bold">Netflix</p>
          <div className="flex flex-col sm:flex-row  mt-3 gap-3 sm:gap-10">
            <div className="flex flex-col basis-1/2 ">
              <span className="text-[#64748B] text-sm">Description</span>
              <span>
                Watch Netflix movies & TV shows online or stream right to your
                smart TV, game console, PC, Mac, mobile, tablet and more.
              </span>
            </div>
            <span className="border hidden sm:block"></span>
            <div className="flex basis-1/2 flex-col gap-3">
              <div className="flex flex-col">
                <span className="text-[#64748B] text-sm">Phone</span>
                <span>5643856658</span>
              </div>
              <div className="flex flex-col">
                <span className="text-[#64748B] text-sm">Email</span>
                <span className="">sam@mail.com</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col sm:flex-row mt-1 sm:mt-3 gap-3">
        <div className="flex flex-col gap-3 basis-1 sm:basis-1/3 border bg-white p-5  rounded-md shadow-md">
          <p className="font-bold text-lg">Company Details</p>
          <div className="flex flex-col">
            <span className="text-[#64748B] text-sm">Website</span>
            <span>abc.com</span>
          </div>
          <div className="flex flex-col">
            <span className="text-[#64748B] text-sm">Description</span>
            <span>
              Watch Netflix movies & TV shows online or stream right to your
              smart TV, game console, PC, Mac, mobile, tablet and more.
            </span>
          </div>
          <div className="flex flex-col">
            <span className="text-[#64748B] text-sm">Email</span>
            <span>sam@mail.com</span>
          </div>
          <div className="flex flex-col">
            <span className="text-[#64748B] text-sm">Facebook</span>
            <span>abc.com</span>
          </div>
          <div className="flex flex-col">
            <span className="text-[#64748B] text-sm">Facebook</span>
            <span>abc.com</span>
          </div>
          <div className="flex flex-col">
            <span className="text-[#64748B] text-sm">Facebook</span>
            <span>abc.com</span>
          </div>
          <div className="flex flex-col">
            <span className="text-[#64748B] text-sm">Address</span>
            <span>abc.com</span>
          </div>
        </div>
        <div className="flex basis-1 sm:basis-2/3 border bg-white p-5  rounded-md shadow-md">
          <p className="font-bold text-lg">Screenshot of Webpage</p>
        </div>
      </div>
    </div>
  );
};

export default DetailPage;
