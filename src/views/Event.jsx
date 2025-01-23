import BACK_ICON from '@/assets/back.png'
import FormCarousel from '@/components/event/Form'
import LimitPage from '@/components/LimitPage'
import SuccessPage from '@/components/SuccessPage'
import { useState } from 'react'
import { NavLink } from 'react-router-dom'
const Event = () => {

    function getRandomBoolean() {
    return Math.random() >= 0.5;
    }
    const [isSuccess, setIsSuccess] = useState(false)
    const [isLimit, setIsLimit] = useState(false)

    const submit = (data) => {
        console.log(data);
        
        if(getRandomBoolean()) {
            setIsSuccess(true)
        }else{
            setIsLimit(true)
        }
        
    }
    return (
        <div className="px-28 py-20">
            <div className="flex items-center">
                <NavLink to="/" className="bg-transparent">
                    <img src={BACK_ICON} alt="" width={"60px"} className='cursor-pointer' />
                </NavLink>
                <div className="w-full text-center">
                    <p className='bg-transparent text-5xl font-semibold'>Marketing and Promotion  Strategis</p>
                </div>
            </div>
            {
                 isSuccess
                    ? <SuccessPage/>
                    : isLimit ? <LimitPage/>
                    : <div className="mt-36 w-full h-fit rounded-sm p-20 shadow-lg">
                        <FormCarousel onSumbit={(data) => submit(data)} />              
                     </div>
            }
            
        </div>
    )
}
export default Event