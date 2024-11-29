import 'react-phone-input-2/lib/style.css';
import './FormStyles.css';
import { FormComponent, CountDown, ContactButtons } from '../../components/common/FormComponents';

const HomeFormSection: React.FC = () => {
  return (
    <div className="bg-blueBg flex flex-col max-w-[500px] w-full rounded-md gap-10 p-6 lg:-mt-72 xl:-mt-[23rem] xl:mb-10">
      <CountDown />

      <p className="text-[#F8FBFF] font-semibold md:text-lg lg:text-xl xl:text-2xl lg:font-medium 2xl:pr-20">Unlock Dubai’s top investments – enter your details to get started"</p>

      <FormComponent />

      <ContactButtons />
    </div>
  );
};

export default HomeFormSection;
