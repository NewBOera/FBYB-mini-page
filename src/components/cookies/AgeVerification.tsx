import React, { useEffect } from 'react';
import { acceptCookies, rejectCookies, showCookies } from 'cookies-modal-devs';

interface Cookie {
  cookieName: string;
  modal?: string;
  days?: number;
}

const AcceptCookieButton: React.FC<Cookie> = ({ cookieName, modal }) => {
  return (
    <button className="bg-[#0B4F6C] text-white md:text-lg font-medium py-4 px-10 rounded-lg" onClick={() => acceptCookies(cookieName, modal)}>
      Yes, I’m over 18
    </button>
  );
};

const RejectCookieButton: React.FC<Cookie> = ({ cookieName }) => {
  return (
    <button className=" text-[#414651] border-[1px] md:text-lg font-medium border-[#D5D7DA] py-4 px-10 rounded-lg" onClick={() => rejectCookies(cookieName)}>
      No, I’m under 18
    </button>
  );
};

export const AgeVerification: React.FC<Cookie> = ({ cookieName }) => {
  useEffect(() => {
    showCookies(cookieName, 'age-verification-modal');
  }, []);

  return (
    <section id="age-verification-modal" className="bg-[#00000000] flex items-center justify-center min-h-screen absolute z-50 hidden">
      <div className="fixed inset-0 w-full bg-[#000000DD] flex items-center justify-center max-h-screen">
        <div className="bg-white shadow-lg w-11/12 sm:w-8/12 lg:max-w-[600px] h-auto max-h-54 rounded-lg">
          <article className="flex flex-col justify-center py-16 px-10 gap-4">
            <img src="https://shualim.online/wlp/scsn/en/besttoprateduk.com/public/assets/Icon-18.png" className="w-16 h-16 lg:h-20 lg-w-20 object-contain" alt="" />
            <h3 className="text-[22px]/[25px] md:text-[24px]/[28px] lg:text-[30px]/[32px] font-semibold text-[#0B0A07]">Age verification</h3>
            <p className="text-[18px]/[20px] md:text-[20px]/[22px] lg:text-[22px]/[26px] font-light text-[#535862]">
              To ensure compliance with age restrictions, confirm that you are of legal age to enter the site.
            </p>

            <div className="flex flex-col md:flex-row gap-4">
              <RejectCookieButton cookieName={cookieName} />
              <AcceptCookieButton cookieName={cookieName} modal="age-verification-modal" />
            </div>
          </article>
        </div>
      </div>
    </section>
  );
};
export default AgeVerification;
