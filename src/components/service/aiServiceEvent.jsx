import { GoogleGenerativeAI } from "@google/generative-ai";

const genAI = new GoogleGenerativeAI(import.meta.env.VITE_GOOGLE_API_KEY);

export const generateEventStrategy = async (formData) => {
  try {
    const model = genAI.getGenerativeModel({ model: "gemini-pro" });

    const prompt = `Berikan Jawaban Menggunakan Bahasa Indonesia dan ketika membuat list price menggunakan Rupiah
    
    
    CONTEXT: You are Event Marketing Strategist, a seasoned marketing consultant specializing in comprehensive event promotion.

    EVENT DETAILS:
    1. Event Name: ${formData.eventName}
    2. Description: ${formData.briefDescription}
    3. Date/Location: ${formData.eventDate} | ${formData.eventLocation}
    4. Target Audience: ${formData.target}
    5. Capacity: ${formData.eventCapacity}
    6. Ticket Prices: ${formData.price}
    7. Key Features: ${formData.highlightEvent}
    8. Unique Selling Points: ${formData.nilaiJual}
    9. Marketing Budget: ${formData.marketingBudget}
    10. Primary Goals: ${formData.mainGoals}
    11. Brand Guidelines: ${formData.brandGuidelines}
    12. Timeline: ${formData.longEvent}
    13. Past Events: ${formData.previousEvent}
    14. Competitors: ${formData.competitorMarketing}
    15. Preferred Channels: ${formData.marketingChannel}
    16. Limitations: ${formData.marketingLimitation}
    17. Resources: ${formData.internalResources}

    Generate a comprehensive marketing strategy using this structure:

    ## 1. Executive Summary
    [Concise overview of the complete strategy]

    ## 2. Target Audience Insights
    ### Demographics
    - **Age Range:** 
    - **Gender Split:**
    - **Location:**
    ### Psychographics
    - **Interests:**
    - **Values:**
    - **Behavior Patterns:**

    ## 3. Multi-Channel Marketing Plan
    ### Digital Marketing Tactics
    **Social Media:**
    - Platform-specific strategies for ${formData.marketingChannel || "Instagram, TikTok, Facebook"}
    
    **Email Marketing:**
    - Campaign structure and segmentation
    
    ### Traditional Marketing Tactics
    **Print Advertising:**
    - Newspaper/magazine recommendations
    
    ### Public Relations Strategy
    - Press release angles
    - Media partnership ideas

    ## 4. Messaging Framework
    **Key Messages:**
    1. 
    2.
    
    **Value Proposition:**
    ${formData.nilaiJual}

    ## 5. Timeline & Frequency
    **${formData.longEvent} Plan:**
    - Pre-Launch (${formData.longEvent} prior)
    - Main Campaign
    - Final Push

    ## 6. Budget Allocation
    - Digital: ${formData.marketingBudget ? Math.floor(formData.marketingBudget * 0.4) : '40%'}
    - Traditional: 30%
    - PR: 20%
    - Contingency: 10%

    ## 7. Success Metrics
    - Ticket sales targets
    - Social media KPIs
    - ROI projections

    REQUIREMENTS:
    - Use markdown formatting
    - Include specific platform recommendations
    - Suggest 3 innovative engagement tactics
    - Provide FOMO creation strategies
    - Add post-event content ideas`;

    const result = await model.generateContent(prompt);
    const response = await result.response;
    return response.text();
  } catch (error) {
    console.error("AI Service Error:", error);
    throw new Error("Failed to generate event strategy. Please try again later.");
  }
};