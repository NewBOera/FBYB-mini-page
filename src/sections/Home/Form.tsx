import React from 'react';
export const Form: React.FC = () => {
  return (
    <div className="bg-blueBg flex flex-col lg:w-5/12  rounded-md gap-10 p-6 lg:-mt-72 xl:-mt-80">
      <article className="w-full flex justify-between text-white">
        <article className="flex gap-6">
          <div className="bg-[#F8FBFF33] rounded-md p-3 flex flex-col justify-center items-center">
            <h4 className="text-xs">DAYS</h4>
            <span className="font-semibold text-2xl">200</span>
          </div>
          <div className="bg-[#F8FBFF33] rounded-md p-3 flex flex-col justify-center items-center">
            <h4 className="text-xs">DAYS</h4>
            <span className="font-semibold text-2xl">200</span>
          </div>
        </article>

        <div className="bg-[#F8FBFF33] rounded-md p-3 flex flex-col justify-center items-center">
          <h4 className="text-xs">DAYS</h4>
          <span className="font-semibold text-2xl">200</span>
        </div>
      </article>

      <p className="text-[#F8FBFF] font-medium">Unlock Dubai’s top investments – enter your details to get started"</p>

      <form action=""></form>
    </div>
  );
};
