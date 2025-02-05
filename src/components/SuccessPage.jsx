import SUCCESS_ICON from "@/assets/success-1.svg";
import { NavLink } from "react-router-dom";
import PropTypes from 'prop-types';

const brandColor = 'hsl(332 89% 42%)';

const SuccessPage = ({ strategy, email }) => {
  return (
    <div className="flex flex-col justify-between mt-52 items-center min-h-screen">
      <div className="flex flex-col gap-14 items-center w-full max-w-4xl">
        <div>
          <img src={SUCCESS_ICON} alt="Success Icon" width="600" />
        </div>
        <div className="w-full px-4">
          <h1 className="font-semibold text-4xl mb-8 text-center text-black">
            Strategi Pemasaran Berhasil Dibuat!
          </h1>
        </div>
      </div>
      <NavLink
        to="/"
        className="w-full p-2 bg-[hsl(332_89%_37%)] text-white border-2 border-[hsl(332_89%_37%)] rounded-md text-center font-bold text-lg hover:opacity-90 transition-opacity mt-8"
      >
        Home
      </NavLink>
      <NavLink
        to="/result"
        className="w-full p-2 bg-white border-2 border-[hsl(332_89%_37%)] rounded-md text-center font-bold text-[hsl(332_89%_37%)] text-lg hover:bg-[hsl(332_89%_37%)] hover:text-white transition-colors mt-4"
      >
        Result
      </NavLink>
    </div>
  );
};

SuccessPage.propTypes = {
  strategy: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired
};

export default SuccessPage;