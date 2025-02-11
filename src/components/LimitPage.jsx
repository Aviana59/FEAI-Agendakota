import PropTypes from 'prop-types';
import LIMIT_ICON from "@/assets/Limit.svg"
import { NavLink } from "react-router-dom";

const LimitPage = ({ limitType = "general", onReset }) => {
  const limitMessages = {
    email: "Anda telah mencapai batas maksimum penggunaan email (10 kali) untuk layanan AI kami",
    daily: "Anda telah mencapai batas penggunaan harian kami",
    general: "Anda telah menggunakan semua kesempatan yang tersedia untuk layanan AI kami dalam membantu Anda. Terima kasih telah memanfaatkan layanan kami"
  };

  return (
    <div className="flex flex-col justify-between mt-52 items-center min-h-screen">
      <div className="flex flex-col gap-14 items-center text-center">
        <div className="animate-bounce">
          <img src={LIMIT_ICON} alt="Limit Reached" width="600" />
        </div>
        <div className="max-w-4xl">
          <p className="font-semibold text-3xl text-red-600">
            {limitMessages[limitType]}
          </p>
          <p className="mt-4 text-xl text-gray-600">
            Silakan coba lagi besok atau gunakan email lain untuk melanjutkan
          </p>
        </div>
      </div>
      <div className="flex flex-col gap-4 w-full">
        {<button
          onClick={onReset}
          className="w-full p-2 bg-[hsl(332_89%_42%)] rounded-md text-center font-bold text-white text-lg hover:bg-[hsl(332_89%_37%)] transition-colors border-[1px] border-[hsl(332_89%_42%)]"
        >
          Coba Lagi
        </button>}
        <NavLink
          to="/"
          className="w-full p-2 bg-white border-2 border-[hsl(332_89%_37%)] rounded-md text-center font-bold text-[hsl(332_89%_37%)] text-lg hover:bg-[hsl(332_89%_37%)] hover:text-white transition-colors"
        >
          Home
        </NavLink>
      </div>
    </div>
  );
};

LimitPage.propTypes = {
  limitType: PropTypes.oneOf(['email', 'daily', 'general']),
  onReset: PropTypes.func.isRequired
};

LimitPage.defaultProps = {
  limitType: 'general'
};

export default LimitPage;