import SUCCESS_ICON from "@/assets/success-1.svg";
import { NavLink } from "react-router-dom";

const SuccessPage = () => {
    return (
        <>
            <div className="flex flex-col justify-between mt-52 items-center h-screen">
                <div className="flex flex-col gap-14 items-center">
                    <div>
                        <img src={SUCCESS_ICON} alt="Success Icon" width="600" />
                    </div>
                    <div>
                        <p className="font-semibold text-5xl">
                            Terimakasih dan silahkan cek Email kamu ya.
                        </p>
                    </div>
                </div>
                <NavLink 
                    to="/" 
                    className="w-full p-4 bg-primary rounded-md text-center font-bold text-white text-lg"
                >
                    Home
                </NavLink>
            </div>
        </>
    );
};

export default SuccessPage;
