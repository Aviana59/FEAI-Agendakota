/* eslint-disable react/prop-types */
/* eslint-disable react/jsx-key */
import { useState } from "react";

const FormCarousel = ({ onSubmit }) => {
  // Note: correctly spelled prop name
  const [currentStep, setCurrentStep] = useState(0);
  const [formData, setFormData] = useState({
    type: "",
    location: "",
    services: "",
    target: "",
    peak: "",
    offPeak: "",
    interesting: "",
    specialServices: "",
    email: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const steps = [
    <Step1 formData={formData} handleChange={handleChange} />,
    <Step2 formData={formData} handleChange={handleChange} />,
    <Step3 formData={formData} handleChange={handleChange} />,
  ];

  const validateStep = (step) => {
    switch (step) {
      case 0:
        if (!formData.type || !formData.location || !formData.services) {
          alert("Please fill all required fields");
          return false;
        }
        return true;
      case 1:
        if (!formData.target || !formData.peak || !formData.offPeak) {
          alert("Please fill all required fields");
          return false;
        }
        return true;
      case 2:
        if (!formData.interesting || !formData.specialServices) {
          alert("Please fill all required fields");
          return false;
        }
        if (!formData.email) {
          alert("Please enter your email address");
          return false;
        }
        if (!isValidEmail(formData.email)) {
          alert("Please enter a valid email address");
          return false;
        }
        return true;
      default:
        return true;
    }
  };

  const isValidEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const handleSubmit = () => {
    if (validateStep(currentStep)) {
      onSubmit(formData); // Pass the entire formData object
    }
  };

  const nextStep = () => {
    if (!validateStep(currentStep)) {
      return;
    }

    if (currentStep < steps.length - 1) {
      setCurrentStep(currentStep + 1);
    } else {
      handleSubmit(); // Submit on last step
    }
  };

  const prevStep = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center">
      <p className="font-semibold text-2xl">Hotel</p>
      <div className="w-full p-6 overflow-hidden">
        <div className="overflow-hidden">
          <div className="flex" style={{ width: `${steps.length * 100}%` }}>
            {steps.map((step, index) => (
              <div
                key={index}
                className="w-full flex-shrink-0  transition-transform duration-500"
                style={{
                  width: `${100 / steps.length}%`,
                  transform: `translateX(-${currentStep * 100}%)`,
                }}
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
            className={`px-4 py-2 w-full border border-1 border-primary text-primary font-semibold rounded ${
              currentStep === 0 ? "opacity-50 cursor-not-allowed" : ""
            }`}
            disabled={currentStep === 0}
          >
            Back
          </button>
          <button
            type="button"
            onClick={nextStep}
            className={`px-4 py-2 w-full text-white bg-primary rounded font-semibold ${
              currentStep === steps.length - 1 ? "hidden" : ""
            }`}
          >
            Next
          </button>
          <button
            type="button"
            onClick={handleSubmit}
            className={`px-4 py-2 w-full text-white bg-primary rounded font-semibold ${
              currentStep === steps.length - 1 ? "block" : "hidden"
            }`}
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
      <label className="block mb-1 text-sm font-medium">Hotel Type</label>
      <input
        type="text"
        name="type"
        value={formData.type}
        onChange={handleChange}
        className="w-full px-4 py-2 border rounded"
        placeholder="Resort Hotel"
      />
    </div>
    <div className="mb-4">
      <label className="block mb-1 text-sm font-medium">Hotel Location</label>
      <input
        type="text"
        name="location"
        value={formData.location}
        onChange={handleChange}
        className="w-full px-4 py-2 border rounded"
        placeholder="Tepi pantai"
      />
    </div>
    <div className="mb-4">
      <label className="block mb-1 text-sm font-medium">Hotel Services</label>
      <textarea
        rows="5"
        name="services"
        value={formData.services}
        onChange={handleChange}
        className="border border-1 rounded-sm w-full p-4"
        placeholder="Resepsionis 24 jam, gym, kolam renang, jogging, track, parkir mobil motor sepeda, laundry, spa,"
      />
    </div>
  </form>
);

const Step2 = ({ formData, handleChange }) => (
  <form className="p-4">
    <div className="mb-4">
      <label className="block mb-1 text-sm font-medium">Target Audience</label>
      <input
        type="text"
        name="target"
        value={formData.target}
        onChange={handleChange}
        className="w-full px-4 py-2 border rounded"
        placeholder="Resort Hotel"
      />
    </div>
    <div className="mb-4">
      <label className="block mb-1 text-sm font-medium">Peak Seasons</label>
      <textarea
        value={formData.peak}
        name="peak"
        onChange={handleChange}
        rows="5"
        className="border border-1 rounded-sm w-full p-4"
        placeholder="libur nataru, imlek, libur panjang, valentine"
      />
    </div>
    <div className="mb-4">
      <label className="block mb-1 text-sm font-medium">Off Peak Seasons</label>
      <textarea
        value={formData.offPeak}
        name="offPeak"
        onChange={handleChange}
        rows="5"
        className="border border-1 rounded-sm w-full p-4"
        placeholder="Hari kerja"
      />
    </div>
  </form>
);

const Step3 = ({ formData, handleChange }) => (
  <form className="p-4">
    <div className="mb-4">
      <label className="block mb-1 text-sm font-medium">
        Hal Menarik dari Hotel
      </label>
      <textarea
        value={formData.interesting}
        onChange={handleChange}
        name="interesting"
        rows="5"
        className="border border-1 rounded-sm w-full p-4"
        placeholder="Pemandangan pantai yang dapat dilihat dari
kamar, harga murah, terdapat berbagai tipe
kamar"
      />
    </div>
    <div className="mb-4">
      <label className="block mb-1 text-sm font-medium">
        Layanan Spesial Hotel
      </label>
      <textarea
        value={formData.specialServices}
        onChange={handleChange}
        name="specialServices"
        rows="5"
        className="border border-1 rounded-sm w-full p-4"
        placeholder="Check in 24 jam, terdapat opsi memesan kamar
24 jam"
      />
    </div>
    <div className="mb-4">
      <label className="block mb-1 text-sm font-medium">Email*</label>
      <input
        type="email"
        name="email"
        value={formData.email}
        onChange={handleChange}
        className="w-full px-4 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
        placeholder="johndoe@mail.com"
        required
      />
    </div>
  </form>
);

export default FormCarousel;
