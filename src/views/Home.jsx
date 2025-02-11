import ICON from '@/assets/icon1.png'
import FEATURED_ICON from '@/assets/featured-icon.png'
import ARROW_RIGHT from '@/assets/arrow-right.svg'
import { NavLink } from 'react-router-dom'
function Home() {

  return (
    <>
      <div className="p-28 flex flex-col gap-8">
          <div className="grid grid-cols-2 items-center">
            <div className="w-1/2">
              <p className="text-5xl tracking-widest leading-tight font-bold">Free Ai Assisted <span className="text-primary">AgendaKota</span> Generator</p>
            </div>
            <div className="">
              <img src={ICON} alt="" className='mx-auto' width={'200vw'}/>
            </div>
          </div>
          <div className="flex flex-col gap-4 mt-24">
              <div className=""><p className='font-bold text-2xl'>Free Tools</p></div>
              <div className="flex gap-8">
                <NavLink to="/hotel" className="h-fit w-full bg-primary p-10 rounded-sm flex gap-11 cursor-pointer">
                  <img src={FEATURED_ICON} alt="" width={'50px'} className='h-fit rounded-full bg-transparent' />
                  <div className="bg-transparent w-1/2">
                    <p className='bg-transparent text-white font-bold text-2xl leading-tight tracking-widest'>Generator Penawaran & Promosi Hotel</p>
                  </div>
                  <div className="bg-transparent ml-auto mt-auto">
                    <img src={ARROW_RIGHT} alt="" className='bg-transparent'/>
                  </div>
                </NavLink>
                <NavLink to="/event" className="h-fit w-full bg-primary p-10 rounded-sm flex gap-11 cursor-pointer">
                  <img src={FEATURED_ICON} alt="" width={'50px'} className='h-fit rounded-full bg-transparent' />
                  <div className="bg-transparent w-3/4">
                    <p className='bg-transparent text-white font-bold text-2xl leading-tight tracking-widest'>Generator Strategi Pemasaran & Promosi Event</p>
                  </div>
                  <div className="bg-transparent ml-auto mt-auto">
                    <img src={ARROW_RIGHT} alt="" className='bg-transparent'/>
                  </div>
                </NavLink>
              </div>
          </div>
          <div className="p-4 border border-4 border-[#D4A5BB] w-full flex flex-col gap-4 rounded-sm">
            <p className='font-semibold text-2xl'>Untuk apa AI ini?</p>
            <p className='text-xl '>Generator Penawaran & Promosi Hotel yang Ditenagai AI dan Generator Strategi Pemasaran & Promosi adalah alat berbasis AI yang dirancang untuk membantu bisnis memaksimalkan upaya pemasaran mereka. Generator Strategi Pemasaran & Promosi memberikan panduan komprehensif untuk membuat strategi pemasaran multi-channel yang efektif, mencakup taktik digital, metode tradisional, dan hubungan masyarakat. Kedua alat ini memanfaatkan AI untuk menghasilkan ide-ide yang relevan, menghemat waktu, dan berdampak, memungkinkan bisnis tetap kompetitif dan menarik perhatian audiens target mereka dengan mudah.</p>
          </div>
          <div className="flex flex-col gap-4">
            <p className='text-2xl font-bold'>Komentar</p>
            <div className="grid grid-cols-3 gap-4">
              <div className="p-4 border border-4 border-[#D4A5BB] rounded-sm col-span-2">
                <p>Generator Penawaran & Promosi Hotel yang Ditenagai AI ini benar-benar mengubah permainan! Alat ini membantu kami membuat penawaran musiman</p>
              </div>
              <div className="p-4 border border-4 border-[#D4A5BB] rounded-sm">
                <p>Generator Strategi Pemasaran & Promosi membuat pekerjaan saya jauh lebih mudah. Alat ini memberikan rencana yang jelas</p>
              </div>
              <div className="p-4 border border-4 border-[#D4A5BB] rounded-sm">
                <p>&quot;AI ini menyarankan strategi pemasaran multi-channel inovatif yang belum pernah saya pikirkan sebelumnya.&quot;</p>
              </div>
              <div className="p-4 border border-4 border-[#D4A5BB] rounded-sm col-span-2">
                <p>&quot;Saya awalnya ragu, tapi wawasan dari Generator Strategi Pemasaran & Promosi sangat tepat. Taktik FOMO yang disarankan secara signifikan meningkatkan keterlibatan.&quot;</p>
              </div>
              <div className="p-4 border border-4 border-[#D4A5BB] rounded-sm">
                <p>&quot;Dengan menggunakan Generator Penawaran & Promosi Hotel yang Ditenagai AI, kami.&quot;</p>
              </div>
              <div className="p-4 border border-4 border-[#D4A5BB] rounded-sm">
                <p>&quot;Saya sangat menyukai betapa intuitif dan efisiennya alat-alat ini. Dalam beberapa menit, saya sudah memiliki ide promosi.&quot;</p>
              </div>
              <div className="p-4 border border-4 border-[#D4A5BB] rounded-sm">
                <p>&quot;Alat-alat AI ini sangat cerdas dan efisien.&quot;</p>
              </div>
            </div>
          </div>
      </div>
    </>
  )
}

export default Home