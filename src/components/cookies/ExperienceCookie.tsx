import React, { useEffect } from 'react';
import { acceptCookies, rejectCookies, showCookies } from 'cookies-modal-devs';

interface Cookie {
  cookieName: string;
  modal?: string;
  days?: number;
}

const AcceptCookieButton: React.FC<Cookie> = ({ cookieName, modal }) => {
  return (
    <button className="bg-blue text-white md:text-lg font-medium py-3 px-10 rounded-lg lg:px-16" onClick={() => acceptCookies(cookieName, modal)}>
      Allow
    </button>
  );
};

const RejectCookieButton: React.FC<Cookie> = ({ cookieName }) => {
  return (
    <button className=" text-[#414651] border-[1px] md:text-lg font-medium border-[#D5D7DA] py-3 px-10 lg:px-16 rounded-lg" onClick={() => rejectCookies(cookieName, 'experience-cookie')}>
      Reject
    </button>
  );
};

export const ExperienceCookie: React.FC<Cookie> = ({ cookieName }) => {
  useEffect(() => {
    showCookies(cookieName, 'experience-cookie');
  }, []);

  return (
    <div id="experience-cookie" className="bg-white shadow-lg w-full h-max rounded-lg fixed bottom-0 hidden border-t-[1px] border-[#00000010] shadow-[0px_-5px_30px_-10px_#00000024]">
      <article className="flex flex-col md:flex-row md:items-center py-8 md:py-12 px-10 gap-4">
        <img src="https://shualim.online/wlp/scsn/en/besttoprateduk.com/public/assets/cookie.png" className="w-10 h-10 lg:w-16 lg:h-16 object-contain" alt="" />
        <div className="flex flex-col gap-1">
          <h3 className="text-[20px]/[25px] lg:text-[24px]/[28px] font-medium text-[#0B0A07]">Cookies</h3>
          <p className="text-[16px]/[20px] lg:text-[20px]/[22px] font-light text-[#535862]">Cookies are used to ensure you get the best experience on our website.</p>
        </div>

        <div className="flex gap-4">
          <RejectCookieButton cookieName={cookieName} />
          <AcceptCookieButton cookieName={cookieName} modal="experience-cookie" />
        </div>
      </article>
    </div>
  );
};
export default ExperienceCookie;
