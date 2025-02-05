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
  const brandColor = 'hsl(332 89% 42%)';
  import { NavLink } from "react-router-dom";
  import BACK_ICON from '@/assets/back.png'

const ResultPage = () => {
    const resultText = sessionStorage.getItem('current_result')
    const email = sessionStorage.getItem('current_email')
    if(!resultText) window.location.href = '/'
    return(
      <div className="px-28 py-20">
        <div className="flex flex-col justify-between items-center min-h-screen">
             <div className="flex items-center w-full mb-12">
                <NavLink to="/" className="bg-transparent">
                    <img src={BACK_ICON} alt="" width={"60px"} className='cursor-pointer' />
                </NavLink>
                <div className="w-full text-center">
                    <p className='bg-transparent text-5xl font-semibold'>Marketing and Promotion Strategies</p>
                </div>
            </div>
            <div className="flex flex-col gap-14 items-center w-full max-w-4xl">
                <div className="w-full px-4">
                    <div className="bg-white rounded-lg shadow-md p-6">
                    {formatStrategyText(resultText)}
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
                className="w-full p-4 rounded-md text-center font-bold text-lg hover:opacity-90 transition-opacity mt-8"
                style={{ backgroundColor: brandColor, color: 'white' }}
                >
                Home
            </NavLink>
        </div>
        </div>
        )
}

export default ResultPage