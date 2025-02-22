import { useEffect, useRef } from 'react';
import html2canvas from 'html2canvas';
import SUCCESS_ICON from "@/assets/success-1.svg";
import { NavLink } from "react-router-dom";
import PropTypes from 'prop-types';

const SuccessPage = ({ strategy, email }) => {
    const contentRef = useRef(null);

    useEffect(() => {
        const captureAndSend = async () => {
            try {
                // Capture screenshot
                const canvas = await html2canvas(contentRef.current, {
                    useCORS: true,
                    logging: true,
                    scale: 2
                });
                
                const imageData = canvas.toDataURL('image/png');

                // Kirim ke backend
                await fetch('http://localhost:5173/send-email', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify({
                        email: email,
                        image: imageData,
                        strategy: strategy
                    }),
                });
            } catch (error) {
                console.error('Error sending email:', error);
            }
        };

        captureAndSend();
    }, [email, strategy]);

  return (
    <div className="flex flex-col justify-between mt-40 items-center min-h-fit">
      <div className="flex flex-col gap-14 items-center w-full max-w-4xl">
        <div>
          <img src={SUCCESS_ICON} alt="Success Icon" width="300" />
        </div>
        <div className="w-full px-4">
          <h1 className="font-semibold text-4xl mb-8 text-center text-black">
            Strategi Pemasaran Berhasil Dibuat!
          </h1>
        </div>
      </div>
      <div className="flex flex-col gap-1 w-full">
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
    </div>
  );
};

SuccessPage.propTypes = {
  strategy: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired
};

export default SuccessPage;