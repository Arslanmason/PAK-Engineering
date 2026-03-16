import { GoogleGenAI } from "@google/genai";
import fs from 'fs';
import path from 'path';

const ai = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY });

const prompts = [
  { name: 'ship-repair-1', prompt: 'A close-up of a marine engineer welding a large ship engine part in a brightly lit engine room, sparks flying, industrial setting, highly detailed, photorealistic.' },
  { name: 'ship-repair-2', prompt: 'A massive ship propeller being repaired by technicians in hard hats, heavy machinery, industrial shipyard, photorealistic.' },
  { name: 'ship-repair-3', prompt: 'A team of marine engineers inspecting a large diesel engine on a commercial vessel, technical, professional, photorealistic.' },
  { name: 'dry-docking-1', prompt: 'A massive commercial cargo ship resting on blocks in a dry dock, water drained, workers inspecting the massive red hull, wide angle, photorealistic.' },
  { name: 'dry-docking-2', prompt: 'A large oil tanker in a dry dock facility, scaffolding around the hull, industrial shipyard environment, high detail, photorealistic.' },
  { name: 'dry-docking-3', prompt: 'Workers cleaning the massive hull of a ship in a dry dock, high pressure water jets, industrial scale, photorealistic.' },
  { name: 'fabrication-1', prompt: 'Sparks flying as a welder works on a large custom steel pipe spool for an offshore platform, industrial fabrication shop, photorealistic.' },
  { name: 'fabrication-2', prompt: 'A large steel structural module being lifted by a crane in a marine fabrication yard, heavy engineering, photorealistic.' },
  { name: 'fabrication-3', prompt: 'Precision welding on a stainless steel marine component, close up, bright blue arc light, industrial setting, photorealistic.' },
  { name: 'electroplating-1', prompt: 'A large metal marine component being lowered into a glowing electroplating vat, industrial surface treatment facility, photorealistic.' },
  { name: 'electroplating-2', prompt: 'Freshly galvanized shiny steel structural beams stacked in an industrial warehouse, protective coating, photorealistic.' },
  { name: 'electroplating-3', prompt: 'Close up of a hard chrome plated hydraulic cylinder for a ship, gleaming metal surface, industrial quality, photorealistic.' },
  { name: 'electronics-1', prompt: 'A modern ship bridge with glowing radar screens, ECDIS displays, and navigation equipment, high tech marine electronics, photorealistic.' },
  { name: 'electronics-2', prompt: 'A marine technician calibrating a complex electronic control panel on a ship, wires and circuit boards, professional, photorealistic.' },
  { name: 'electronics-3', prompt: 'Close up of a modern vessel automation and monitoring system screen, glowing interface, marine technology, photorealistic.' },
  { name: 'hull-cleaning-1', prompt: 'A worker in protective gear using an ultra-high-pressure hydro-blaster to clean marine growth off a massive ship hull, water spraying, photorealistic.' },
  { name: 'hull-cleaning-2', prompt: 'Abrasive grit blasting on a ship hull in a dry dock, dust and sparks, industrial surface preparation, photorealistic.' },
  { name: 'hull-cleaning-3', prompt: 'Workers applying bright red anti-fouling paint to the massive hull of a cargo ship using long rollers and sprayers, photorealistic.' }
];

async function generateImages() {
  const dir = path.join(process.cwd(), 'public', 'images');
  if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir, { recursive: true });
  }

  const batchSize = 3;
  for (let i = 0; i < prompts.length; i += batchSize) {
    const batch = prompts.slice(i, i + batchSize);
    console.log(`Generating batch ${i / batchSize + 1}...`);
    
    await Promise.all(batch.map(async (item) => {
      try {
        const response = await ai.models.generateContent({
          model: 'gemini-3.1-flash-image-preview',
          contents: {
            parts: [{ text: item.prompt }]
          },
          config: {
            imageConfig: {
              aspectRatio: "16:9",
              imageSize: "1K"
            }
          }
        });
        
        for (const part of response.candidates[0].content.parts) {
          if (part.inlineData) {
            const base64Data = part.inlineData.data;
            const buffer = Buffer.from(base64Data, 'base64');
            fs.writeFileSync(path.join(dir, `${item.name}.jpg`), buffer);
            console.log(`Saved ${item.name}.jpg`);
          }
        }
      } catch (e) {
        console.error(`Failed to generate ${item.name}:`, e);
      }
    }));
  }
}

generateImages();
