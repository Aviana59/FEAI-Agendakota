import { GoogleGenerativeAI } from "@google/generative-ai";

const genAI = new GoogleGenerativeAI(import.meta.env.VITE_GOOGLE_API_KEY);

export const generatePromotions = async (formData) => {
  try {
    const model = genAI.getGenerativeModel({ model: "gemini-pro" });
    
    const prompt = `CONTEXT: You are Promo Strategy GPT, an expert marketing strategist specializing in the hospitality industry.
    
    Hotel Information:
    1. Type: ${formData.type}
    2. Location: ${formData.location}
    3. Services: ${formData.services}
    4. Target Audience: ${formData.target}
    5. Peak Season: ${formData.peak}
    6. Off-Season: ${formData.offPeak}
    7. Unique Features: ${formData.interesting}
    8. Special Services: ${formData.specialServices}

    Generate special offers and promotions using this structure:
    
    ## Happy Hour Concepts (3-5 ideas)
    1. [Concept Name]
       - Description: 
       - Timing: 
       - Pricing/Discount: 
       - Target Audience: 
       - Implementation Tips:
    
    ## Seasonal Packages (3-5 ideas)
    1. [Package Name]
       - Description: 
       - Season: 
       - Included Services: 
       - Pricing: 
       - Target Audience: 
       - Implementation Tips:
    
    Additional Requirements:
    - Include promotion strategies
    - Add success metrics
    - Staff training tips
    - Use markdown formatting`;

    const result = await model.generateContent(prompt);
    const response = await result.response;
    return response.text();
  } catch (error) {
    console.error("AI Service Error:", error);
    throw new Error("Failed to generate promotions. Please try again later.");
  }
};