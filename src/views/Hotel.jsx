import BACK_ICON from '@/assets/back.png'
import FormCarousel from '@/components/hotel/Form'
import LimitPage from '@/components/LimitPage'
import SuccessPage from '@/components/SuccessPage'
import { useState } from 'react'
import { NavLink } from 'react-router-dom'
import { generatePromotions } from '@/components/service/aiServiceHotel'

const Hotel = () => {
    const [isSuccess, setIsSuccess] = useState(false)
    const [isLimit, setIsLimit] = useState(false)
    const [strategyResult, setStrategyResult] = useState('')
    const [submittedEmail, setSubmittedEmail] = useState('')
    const [isLoading, setIsLoading] = useState(false)
    const [error, setError] = useState('')

    const getStoredEmails = () => {
        return JSON.parse(localStorage.getItem('submittedEmails') || '[]')
                   .map(email => email.toLowerCase())
    }

    const handleSubmit = async (data) => {
        try {
            setIsLoading(true)
            setError('')
            
            const inputEmail = data.email.toLowerCase()
            const storedEmails = getStoredEmails()
            
            if (storedEmails.includes(inputEmail)) {
                setIsLimit(true)
                return
            }

            const result = await generatePromotions(data)
            
            setStrategyResult(result)
            setSubmittedEmail(inputEmail)
            localStorage.setItem('submittedEmails', JSON.stringify([...storedEmails, inputEmail]))
            sessionStorage.setItem('current_result', result)
            sessionStorage.setItem('current_email', inputEmail)
            setIsSuccess(true)
        } catch (error) {
            console.error('Submission error:', error)
            setError(error.message)
            if (error.message.includes("email")) {
                setIsLimit(true)
            }
        } finally {
            setIsLoading(false)
        }
    }

    return (
        <div className="px-28 py-20">
            <div className="flex items-center">
                <NavLink to="/" className="bg-transparent">
                    <img src={BACK_ICON} alt="" width={"40px"} className='cursor-pointer' />
                </NavLink>
                <div className="w-full text-center">
                    <p className='bg-transparent text-4xl font-semibold'>Marketing and Promotion Strategies</p>
                </div>
            </div>

            {isLoading && (
    <div className="mt-36 flex flex-col items-center space-y-6">
        <div className="relative w-24 h-24">
            <div className="absolute inset-0 border-4 border-opacity-20 rounded-full" 
                 style={{ borderColor: 'hsl(332 89% 42% / 20%)' }}></div>
            <div className="absolute inset-0 border-4 border-t-transparent rounded-full animate-spin" 
                 style={{ borderColor: 'hsl(332 89% 42%)' }}></div>
        </div>
        
        <div className="text-center space-y-4">
            <div className="flex justify-center space-x-2">
                {['Analyzing hotel features...', 'Creating promotion strategies...', 'Finalizing recommendations...'].map((text, index) => (
                    <span 
                        key={index}
                        className="animate-pulse"
                        style={{ 
                            color: 'hsl(332 89% 42%)',
                            animationDelay: `${index * 0.5}s` 
                        }}
                    >
                        {text}
                    </span>
                ))}
            </div>
            
            <div className="flex justify-center space-x-2">
                {[...Array(3)].map((_, index) => (
                    <div
                        key={index}
                        className="w-3 h-3 rounded-full animate-bounce"
                        style={{ 
                            backgroundColor: 'hsl(332 89% 42%)',
                            animationDelay: `${index * 0.2}s` 
                        }}
                    />
                ))}
                        </div>
                        
                        <div className="flex justify-center space-x-2">
                            {[...Array(3)].map((_, index) => (
                                <div
                                    key={index}
                                    className="w-3 h-3 bg-primary rounded-full animate-bounce"
                                    style={{ animationDelay: `${index * 0.2}s` }}
                                />
                            ))}
                        </div>
                    </div>
                </div>
            )}

            {error && (
                <div className="mt-36 text-center text-red-500">
                    <p className="text-xl">{error}</p>
                </div>
            )}

            {!isLoading && !error && (
                isSuccess ? (
                    <SuccessPage strategy={strategyResult} email={submittedEmail} />
                ) : isLimit ? (
                    <LimitPage 
                        limitType="email"
                        onReset={() => {
                            setIsLimit(false)
                            setSubmittedEmail('')
                        }}
                    />
                ) : (
                    <div className="mt-16 w-full h-fit rounded-sm p-8 shadow-lg">
                        <FormCarousel onSumbit={handleSubmit} />
                    </div>
                )
            )}
        </div>
    )
}

export default Hotel