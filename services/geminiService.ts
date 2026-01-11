
import { GoogleGenAI } from "@google/genai";

export class GeminiAssistant {
  async askQuestion(question: string) {
    // Fix: Initializing GoogleGenAI inside the method with process.env.API_KEY directly as per guidelines
    const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });

    try {
      const response = await ai.models.generateContent({
        model: 'gemini-3-flash-preview',
        contents: question,
        config: {
          systemInstruction: `You are Afzal Hameed's Portfolio Assistant. 
          Afzal is a Full-Stack Developer, Founder of Sparq IT Services, and AI Expert based in Lucknow. 
          He has 8+ years of experience, a BCA from Manipal University Jaipur, and is a Google Certified SEO Expert.
          He built projects like BabyNameGenerator.xyz, Sparq IT CRM, and ApnaWalk.
          Keep your answers professional, concise, and enthusiastic about Afzal's skills.`,
          temperature: 0.7,
        },
      });
      // Fix: Access the .text property directly (do not call as a function)
      return response.text;
    } catch (error) {
      console.error("Gemini Error:", error);
      return "I'm having trouble connecting to my brain. Please try again later!";
    }
  }
}

export const geminiAssistant = new GeminiAssistant();
