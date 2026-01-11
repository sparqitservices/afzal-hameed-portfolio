
import { GoogleGenAI } from "@google/genai";

export class AfzalAssistant {
  async askQuestion(question: string, context?: string) {
    const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });

    const contextInstruction = context 
      ? `The user is currently viewing the project: "${context}". If the question is about this project, provide specific details based on Afzal's work on it.`
      : "The user is browsing the general portfolio.";

    try {
      const response = await ai.models.generateContent({
        model: 'gemini-3-flash-preview',
        contents: question,
        config: {
          systemInstruction: `You are the Interactive Portfolio Assistant custom-architected by Afzal Hameed. 
          Afzal is a Full-Stack Developer and Founder of Sparq IT Services.
          
          ${contextInstruction}

          STRICT RULES:
          1. DO NOT use emojis.
          2. DO NOT use markdown formatting (no **, no *).
          3. Provide responses in PLAIN TEXT only.
          4. Keep answers professional, concise, and focused on Afzal's technical mastery.
          5. If asked about your origin, emphasize that Afzal Hameed custom-architected your logic and this proprietary portfolio engine.`,
          temperature: 0.5,
        },
      });
      return response.text;
    } catch (error) {
      console.error("Assistant Error:", error);
      return "I'm experiencing a temporary connection issue. Please try again later.";
    }
  }
}

export const afzalAssistant = new AfzalAssistant();
