/* eslint-disable react/prop-types */
/* eslint-disable react/jsx-key */
import { useState } from "react";

const EventFormCarousel = ({ onSubmit }) => {
  const [currentStep, setCurrentStep] = useState(0);
  const [formData, setFormData] = useState({
    eventName: '',
    briefDescription: '',
    eventDate: '',
    eventLocation: '',
    target: '',
    eventCapacity: '',
    price: '',
    highlightEvent: '',
    nilaiJual: '',
    mainGoals: '',
    marketingBudget: '',
    brandGuidelines: '',
    longEvent: '',
    previousEvent: '',
    competitorMarketing: '',
    marketingChannel: '',
    marketingLimitation: '',
    internalResources: '',
    email: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const steps = [
    <Step1 formData={formData} handleChange={handleChange} />,
    <Step2 formData={formData} handleChange={handleChange} />,
    <Step3 formData={formData} handleChange={handleChange} />,
    <Step4 formData={formData} handleChange={handleChange} />,
    <Step5 formData={formData} handleChange={handleChange} />,
    <Step6 formData={formData} handleChange={handleChange} />,
    <Step7 formData={formData} handleChange={handleChange} />,
  ];

  const nextStep = () => {
    if (currentStep < steps.length - 1) {
      setCurrentStep(currentStep + 1);
    }
  };

  const prevStep = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1);
    }
  };

  const submit = () => {
    onSubmit(formData);
  };

  return (
    <div className="flex flex-col items-center justify-center">
      <p className="font-semibold text-2xl">Event</p>
      <div className="w-full p-6 overflow-hidden">
        <div className="overflow-hidden">
          <div className="flex" style={{ width: `${steps.length * 100}%` }}>
            {steps.map((step, index) => (
              <div
                key={index}
                className="w-full flex-shrink-0 transition-transform duration-500"
                style={{ width: `${100 / steps.length}%`, transform: `translateX(-${currentStep * 100}%)` }}
              >
                {step}
              </div>
            ))}
          </div>
        </div>
        <div className="mt-8 w-full flex justify-center gap-4 h-fit">
          {steps.map((item, index) => (
            <div
              key={index}
              className={
                currentStep === index
                  ? "bg-primary w-4 h-4 rounded-full"
                  : "bg-gray-200 w-4 h-4 rounded-full border border-1 border-gray-200"
              }
            >
              &nbsp;
            </div>
          ))}
        </div>
        <div className="mt-6 flex flex-col gap-2">
          <button
            type="button"
            onClick={prevStep}
            className={`px-4 py-2 w-full border border-1 border-primary text-primary font-semibold rounded ${currentStep === 0 ? "opacity-50 cursor-not-allowed" : ""}`}
            disabled={currentStep === 0}
          >
            Back
          </button>
          <button
            type="button"
            onClick={nextStep}
            className={`px-4 py-2 w-full text-white bg-primary rounded font-semibold ${currentStep === steps.length - 1 ? "hidden" : ""}`}
          >
            Next
          </button>
          <button
            type="button"
            onClick={submit}
            className={`px-4 py-2 w-full text-white bg-primary rounded font-semibold ${currentStep === steps.length - 1 ? "block" : "hidden"}`}
          >
            Simpan
          </button>
        </div>
      </div>
    </div>
  );
};

const Step1 = ({ formData, handleChange }) => (
  <form className="p-4">
    <div className="mb-4">
      <label className="block mb-1 text-sm font-medium">Event Name</label>
      <input
        type="text"
        name="eventName"
        value={formData.eventName}
        onChange={handleChange}
        className="w-full px-4 py-2 border rounded"
        placeholder="Midnight Party 2.0"
      />
    </div><div className="mb-4">
      <label className="block mb-1 text-sm font-medium">Brief Description</label>
      <input
        type="text"
        name="briefDescription"
        value={formData.briefDescription}
        onChange={handleChange}
        className="w-full px-4 py-20 border rounded"
        placeholder="sebuah acara yang dirancang untuk menghadirkan suasana hiburan malam yang lebih seru dan interaktif dibandingkan dengan versi sebelumnya. Acara ini biasanya menampilkan berbagai elemen, seperti musik dari DJ atau band, tema dekorasi yang menarik, hiburan interaktif, dan aktivitas sosial."
      />
    </div>
    <div className="mb-4">
      <label className="block mb-1 text-sm font-medium">Event Date and Location</label>
      <input
        type="date and text"
        name="eventDate"
        value={formData.eventDate}
        onChange={handleChange}
        className="w-full px-4 py-2 border rounded"
        placeholder="08 - 08 - 2025 at four points hotel"
      />
    </div>
  </form>
);

const Step2 = ({ formData, handleChange }) => (
  <form className="p-4">
    <div className="mb-4">
      <label className="block mb-1 text-sm font-medium">Target audience demographics and psychographics</label>
      <input
        type="text"
        name="Target"
        value={formData.target}
        onChange={handleChange}
        className="w-full px-4 py-20 border rounded"
        placeholder="Usia: 18-35 tahun.
Jenis Kelamin: Pria dan wanita.
Menyukai kegiatan yang melibatkan komunitas atau networking.
Tertarik pada musik live, DJ, atau tema pesta yang unik."
      />
    </div>
    <div className="mb-4">
      <label className="block mb-1 text-sm font-medium">Event Capacity</label>
      <textarea
        type="text"
        name="eventCapacity"
        value={formData.eventCapacity}
        onChange={handleChange}
        className="border border-1 rounded-sm w-full p-4"
        placeholder="1000 orang"
      />
    </div>
    <div className="mb-4">
      <label className="block mb-1 text-sm font-medium">Ticket Price Range</label>
      <textarea
        type="text"
        name="price"
        value={formData.price}
        onChange={handleChange}
        className="border border-1 rounded-sm w-full p-4"
        placeholder="Rp.200.000"
      />
    </div>
  </form>
);

const Step3 = ({ formData, handleChange }) => (
  <form className="p-4">
    <div className="mb-4">
      <label className="block mb-1 text-sm font-medium">Hightlight Event</label>
      <textarea
        type="text"
        name="highlightEvent"
        value={formData.highlightEvent}
        onChange={handleChange}
        className="border border-1 rounded-sm w-full p-18"
        placeholder="Live Music Performance, Immersive Party Theme
Interactive Activities, Special Food and Beverages
Guest Appearances, Exclusive Merchandise"
      />
    </div>
    <div className="mb-4">
      <label className="block mb-1 text-sm font-medium">Keunikan Nilai Jual</label>
      <textarea
        type="text"
        name="nilaiJual"
        value={formData.nilaiJual}
        onChange={handleChange}
        className="border border-1 rounded-sm w-full p-16"
        placeholder="Thematic Experience, Community Connection,
Hybrid Entertainment, Exclusivity and Prestige"
      />
    </div>
    <div className="mb-4">
      <label className="block mb-1 text-sm font-medium">Goals Utama Event</label>
      <textarea
        type="text"
        name="mainGoals"
        value={formData.mainGoals}
        onChange={handleChange}
        className="border border-1 rounded-sm w-full p-20"
        placeholder="Meningkatkan Brand Awareness, Menciptakan Pengalaman Tak Terlupakan, Membangun Komunitas Loyal, Mengoptimalkan Engagement, Monetisasi dan Profitabilitas"
      />
    </div>
  </form>
);

const Step4 = ({ formData, handleChange }) => (
  <form className="p-4">
    <div className="mb-4">
      <label className="block mb-1 text-sm font-medium">Marketing Budget</label>
      <input
        type="text"
        name="marketingBudget"
        value={formData.marketingBudget}
        onChange={handleChange}
        className="w-full px-4 py-2 border rounded"
        placeholder="Rp.50.000.000"
      />
    </div>
    <div className="mb-4">
      <label className="block mb-1 text-sm font-medium">Brand Guidelines</label>
      <input
        type="text"
        name="brandGuidelines"
        value={formData.brandGuidelines}
        onChange={handleChange}
        className="w-full px-4 py-16 border rounded"
        placeholder="Logo dan Identitas Visual, Logo dan Identitas Visual, Media Guidelines, Audience Persona"
      />
    </div>
    <div className="mb-4">
      <label className="block mb-1 text-sm font-medium">Seberapa Lama Marketing Berjalan</label>
      <input
        type="text"
        name="longEvent"
        value={formData.longEvent}
        onChange={handleChange}
        className="w-full px-4 py-20 border rounded"
        placeholder="90 hari dari hari H"
      />
    </div>
  </form>
);

const Step5 = ({ formData, handleChange }) => (
  <form className="p-4">
    <div className="mb-4">
      <label className="block mb-1 text-sm font-medium">Data Event Sebelumnya</label>
      <textarea
        type="text"
        name="previousEvent"
        value={formData.previousEvent}
        onChange={handleChange}
        className="border border-1 rounded-sm w-full p-4"
        placeholder="Midnight Party 1.0"
      />
    </div>
    <div className="mb-4">
      <label className="block mb-1 text-sm font-medium">Event Kompetitor</label>
      <textarea
        type="text"
        name="competitorEvent"
        value={formData.competitorEvent}
        onChange={handleChange}
        className="border border-1 rounded-sm w-full p-16"
        placeholder="DWP (Djakarta Warehouse Project), We The Fest"
      />
    </div>
    <div className="mb-4">
      <label className="block mb-1 text-sm font-medium">Pendekatan Pemasarn Kompetitor</label>
      <textarea
        type="text"
        name="competitorMarketing"
        value={formData.competitorMarketing}
        onChange={handleChange}
        className="border border-1 rounded-sm w-full p-20"
        placeholder="Fokus pada promosi internasional dan artis terkenal.
Menggunakan hype video dan teaser panjang untuk membangun ekspektasi. Kolaborasi dengan brand lifestyle seperti fashion atau food "
      />
    </div>
  </form>
);

const Step6 = ({ formData, handleChange }) => (
  <form className="p-4">
    <div className="mb-4">
      <label className="block mb-1 text-sm font-medium">marketing channels berdasarkan kesuksesan sebelumnya</label>
      <textarea
        type="text"
        name="marketingChannel"
        value={formData.marketingChannel}
        onChange={handleChange}
        className="border border-1 rounded-sm w-full p-24"
        placeholder="Instagram, Tiktok, community"
      />
    </div>
    <div className="mb-4">
      <label className="block mb-1 text-sm font-medium">Batasan Dalam Marketing</label>
      <textarea
        type="text"
        name="marketingLimitation"
        value={formData.marketingLimitation}
        onChange={handleChange}
        className="border border-1 rounded-sm w-full p-24"
        placeholder="Fokus pada platform dengan ROI (Return on Investment) tertinggi. Pembatasan terkait musik malam dan minuman beralkohol. Jadwal event mendekati acara lain dapat mengurangi perhatian audiens."
      />
    </div>
  </form>
);

const Step7 = ({ formData, handleChange }) => (
  <form className="p-4">
    <div className="mb-4">
      <label className="block mb-1 text-sm font-medium">Sumber Daya Internal yang Dapat Digunakan</label>
      <textarea
        type="text"
        name="internalResources"
        value={formData.internalResources || ''}
        onChange={handleChange}
        className="border border-1 rounded-sm w-full p-20"
        placeholder="tim kreatif, database audiens, relasi influencer,
venue partnerships"
      />
    </div>
    <div className="mb-4">
      <label className="block mb-1 text-sm font-medium">Email</label>
      <input
        type="email"
        name="email"
        value={formData.email || ''}
        onChange={handleChange}
        className="w-full px-4 py-2 border rounded"
        placeholder="percobaan123@gmail.com"
      />
    </div>
  </form>
);

export default EventFormCarousel;