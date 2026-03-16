import { GoogleGenAI } from "@google/genai";
const ai = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY });
async function test() {
  try {
    const response = await ai.models.generateContent({
      model: 'gemini-2.5-flash-image',
      contents: { parts: [{ text: 'A ship' }] }
    });
    console.log("Success!");
  } catch (e: any) {
    console.error("Failed:", e.message);
  }
}
test();
