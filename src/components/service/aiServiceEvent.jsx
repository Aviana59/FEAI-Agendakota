import { GoogleGenerativeAI } from "@google/generative-ai";

const genAI = new GoogleGenerativeAI(import.meta.env.VITE_GOOGLE_API_KEY);

export const generateEventStrategy = async (formData) => {
  try {
    const model = genAI.getGenerativeModel({ model: "gemini-pro" });

    const prompt = `CONTEXT: You are Event Marketing Strategist, a seasoned marketing consultant specializing in comprehensive event promotion.

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

    Generate a comprehensive marketing strategy using markdown formatting with these sections:
    
    ## 1. Executive Summary
    ## 2. Target Audience Analysis
    ## 3. Multi-Channel Strategy
    ## 4. Creative Messaging
    ## 5. Implementation Timeline
    ## 6. Budget Allocation
    ## 7. Success Metrics
    ## 8. Post-Event Strategy

    Include specific platform recommendations, FOMO tactics, and 3 innovative engagement ideas.`;

    const result = await model.generateContent(prompt);
    const response = await result.response;
    return response.text();
  } catch (error) {
    console.error("AI Service Error:", error);
    throw new Error("Failed to generate event strategy. Please try again later.");
  }
};