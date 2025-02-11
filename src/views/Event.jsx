import BACK_ICON from '@/assets/back.png'
import EventFormCarousel from '@/components/event/Form'
import LimitPage from '@/components/LimitPage'
import SuccessPage from '@/components/SuccessPage'
import { useState } from 'react'
import { NavLink } from 'react-router-dom'
import { generateEventStrategy } from '@/components/service/aiServiceEvent'

const Event = () => {
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

            const result = await generateEventStrategy(data)
            
            setStrategyResult(result)
            setSubmittedEmail(inputEmail)
            localStorage.setItem('submittedEmails', JSON.stringify([...storedEmails, inputEmail]))
            setIsSuccess(true)
        } catch (error) {
            console.error('Submission error:', error)
            setError(error.message)
            setIsLimit(true)
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
                    <p className='bg-transparent text-4xl font-semibold'>Event Marketing Strategies</p>
                </div>
            </div>

            {isLoading && (
                <div className="mt-16 flex flex-col items-center space-y-6">
                    <div className="relative w-24 h-24">
                        <div className="absolute inset-0 border-4 border-blue-200 rounded-full"></div>
                        <div className="absolute inset-0 border-4 border-primary border-t-transparent rounded-full animate-spin"></div>
                    </div>
                    
                    <div className="text-center space-y-4">
                        <div className="flex justify-center space-x-2">
                            {['Analyzing event details...', 'Creating marketing plan...', 'Finalizing recommendations...'].map((text, index) => (
                                <span 
                                    key={index}
                                    className="text-gray-600 animate-pulse"
                                    style={{ animationDelay: `${index * 0.5}s` }}
                                >
                                    {text}
                                </span>
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
                <div className="mt-16 text-center text-red-500">
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
                        <EventFormCarousel onSubmit={handleSubmit} />
                    </div>
                )
            )}
        </div>
    )
}

export default Event