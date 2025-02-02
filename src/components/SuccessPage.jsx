import SUCCESS_ICON from "@/assets/success-1.svg";
import { NavLink } from "react-router-dom";
import PropTypes from 'prop-types';

const brandColor = 'hsl(332 89% 42%)';

const formatStrategyText = (text) => {
  return text.split('\n').map((line, index) => {
    if (line.startsWith('## ')) {
      return (
        <h2 
          key={index} 
          className="text-2xl font-bold mt-6 mb-4"
          style={{ color: brandColor }}
        >
          {line.replace('## ', '')}
        </h2>
      );
    }
    
    const parts = line.split('**').map((part, i) => {
      if (i % 2 === 1) {
        return <strong key={i} style={{ color: brandColor }}>{part}</strong>;
      }
      return part;
    });

    if (line.trim().startsWith('- ') || line.trim().match(/^\d+\./)) {
      return (
        <div key={index} className="ml-4 my-2">
          <p className="text-black">{parts}</p>
        </div>
      );
    }

    return (
      <p key={index} className="mb-3 leading-relaxed text-black">
        {parts}
      </p>
    );
  });
};

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
          <div className="bg-white rounded-lg shadow-md p-6">
            {formatStrategyText(strategy)}
          </div>
          <p className="mt-8 text-lg text-center text-black">
            Salinan telah dikirim ke:{" "}
            <span className="font-semibold">
              {email}
            </span>
          </p>
        </div>
      </div>
      <NavLink 
        to="/" 
        className="w-full max-w-xs p-4 rounded-md text-center font-bold text-lg hover:opacity-90 transition-opacity mt-8"
        style={{ backgroundColor: brandColor, color: 'white' }}
      >
        Home
      </NavLink>
    </div>
  );
};

SuccessPage.propTypes = {
  strategy: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired
};

export default SuccessPage;