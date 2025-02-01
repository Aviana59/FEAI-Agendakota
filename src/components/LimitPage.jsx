import LIMIT_ICON from "@/assets/Limit.svg"
import { NavLink } from "react-router-dom";
const SuccessPage = () => {
    return (
        <>
            <div className="flex flex-col justify-between mt-52 items-center h-screen">
                <div className="flex flex-col gap-14 items-center">
                    <div className="">
                        <img src={LIMIT_ICON} alt="" width="600" />
                    </div>
                    <div className="">
                        <p className="font-semibold text-3xl">Halo! Anda telah menggunakan semua kesempatan yang tersedia untuk layanan AI kami dalam membantu Anda.
                            Terima kasih telah memanfaatkan layanan kami</p>
                    </div>
                </div>
                <NavLink to="/" className="w-full p-4 bg-primary rounded-md text-center font-bold text-white text-lg">Home</NavLink>
            </div>
        </>
    )
}

export default SuccessPage;