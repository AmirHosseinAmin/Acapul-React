import { Upperfooter } from './UpperFooter'
import { BottomFooter } from './BottomFooter'

export const Footer = () => {
  return (

      <div className="bg-white -z-50">
        <div className="max-w-[1140px] md:mx-auto mx-2 flex relative  ">
          <Upperfooter />
        </div>
        <BottomFooter />
      </div>
  );
};
