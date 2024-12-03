import 'react-phone-input-2/lib/style.css';
import './FormStyles.css';
import { FormComponent, CountDown, ContactButtons } from '../../components/common/FormComponents';

const HomeFormSection: React.FC = () => {
  return (
    <div className="bg-blueBg flex flex-col lg:max-w-[500px]  w-full rounded-md gap-5 p-6 ">
      <CountDown />

      <p className="text-[#F8FBFF]  font-semibold md:text-lg lg:text-xl xl:text-2xl lg:font-medium 2xl:pr-16">
        Unlock Dubai’s Top Investments – <br /> Enter Your Details to Get Started"
      </p>

      <FormComponent />

      {/* <ContactButtons /> */}
    </div>
  );
};

export default HomeFormSection;
