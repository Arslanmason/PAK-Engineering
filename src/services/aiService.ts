import { GoogleGenAI, Type, Modality } from "@google/genai";

const ai = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY || '' });

export const models = {
  pro: "gemini-3.1-pro-preview",
  flash: "gemini-3-flash-preview",
  flashLite: "gemini-3.1-flash-lite-preview",
  imageGen: "gemini-3-pro-image-preview",
  imageEdit: "gemini-3.1-flash-image-preview",
  maps: "gemini-2.5-flash"
};

export async function generateChatResponse(message: string, options: { useSearch?: boolean, useMaps?: boolean, location?: { lat: number, lng: number } } = {}) {
  const modelName = options.useMaps ? models.maps : (options.useSearch ? models.flash : models.pro);
  
  const config: any = {
    tools: []
  };

  if (options.useSearch) {
    config.tools.push({ googleSearch: {} });
  }

  if (options.useMaps) {
    config.tools.push({ googleMaps: {} });
    if (options.location) {
      config.toolConfig = {
        retrievalConfig: {
          latLng: {
            latitude: options.location.lat,
            longitude: options.location.lng
          }
        }
      };
    }
  }

  const response = await ai.models.generateContent({
    model: modelName,
    contents: message,
    config
  });

  return {
    text: response.text,
    groundingMetadata: response.candidates?.[0]?.groundingMetadata
  };
}

export async function generateImage(prompt: string, aspectRatio: string = "1:1") {
  const response = await ai.models.generateContent({
    model: models.imageGen,
    contents: { parts: [{ text: prompt }] },
    config: {
      imageConfig: {
        aspectRatio: aspectRatio as any,
        imageSize: "1K"
      }
    }
  });

  for (const part of response.candidates[0].content.parts) {
    if (part.inlineData) {
      return `data:image/png;base64,${part.inlineData.data}`;
    }
  }
  throw new Error("No image generated");
}

export async function analyzeImage(prompt: string, base64Image: string, mimeType: string = "image/jpeg") {
  const response = await ai.models.generateContent({
    model: models.pro,
    contents: {
      parts: [
        { inlineData: { data: base64Image.split(',')[1], mimeType } },
        { text: prompt }
      ]
    }
  });

  return response.text;
}

export async function editImage(prompt: string, base64Image: string, mimeType: string = "image/jpeg") {
  const response = await ai.models.generateContent({
    model: models.imageEdit,
    contents: {
      parts: [
        { inlineData: { data: base64Image.split(',')[1], mimeType } },
        { text: prompt }
      ]
    }
  });

  for (const part of response.candidates[0].content.parts) {
    if (part.inlineData) {
      return `data:image/png;base64,${part.inlineData.data}`;
    }
  }
  throw new Error("No image generated");
}

export async function getFastResponse(prompt: string) {
  const response = await ai.models.generateContent({
    model: models.flashLite,
    contents: prompt
  });
  return response.text;
}
