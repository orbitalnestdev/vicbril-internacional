import { GoogleGenAI } from "@google/genai";
import { MessageRole, ChatMessage } from "../types";

const apiKey = process.env.API_KEY || '';
const ai = new GoogleGenAI({ apiKey });

const SYSTEM_INSTRUCTION = `
Eres el asistente virtual técnico de "Vicbril Internacional S.A.", un distribuidor mayorista de conductores eléctricos (cables) con 25 años de experiencia.
Tu objetivo es ayudar a ingenieros, compradores industriales y distribuidores a encontrar el cable adecuado y preparar la información para una cotización.

Reglas:
1. NO das precios. Si preguntan, responde que depende del volumen y la cotización del cobre del día, e invítalos a usar el formulario de contacto.
2. Eres técnico y profesional, pero amable. Usas terminología industrial correcta (AWG, kcmil, aislamiento XLP, PVC, tensión nominal).
3. Si el usuario describe una necesidad (ej: "necesito cable para una bomba sumergible"), sugiere el tipo de producto adecuado de nuestro catálogo hipotético (Baja tensión, Media tensión, Control).
4. El catálogo incluye: THW-LS, XHHW-2, Media Tensión XLP/EPR, Cables de Control y Cobre Desnudo.
5. Sé conciso.
6. Tu objetivo final es que el usuario diga "sí, quiero cotizar esto".

Formato de respuesta: Texto plano, puedes usar listas.
`;

export const sendMessageToAssistant = async (
  history: ChatMessage[],
  newMessage: string
): Promise<string> => {
  try {
    const contents = history.map(msg => ({
      role: msg.role === MessageRole.USER ? 'user' : 'model',
      parts: [{ text: msg.text }]
    }));

    // Add current message
    contents.push({
      role: 'user',
      parts: [{ text: newMessage }]
    });

    const response = await ai.models.generateContent({
      model: 'gemini-2.5-flash-latest',
      contents: contents,
      config: {
        systemInstruction: SYSTEM_INSTRUCTION,
        temperature: 0.3, // Low temperature for technical accuracy
      }
    });

    return response.text || "Lo siento, tuve un problema técnico. Por favor contáctanos directamente.";
  } catch (error) {
    console.error("Gemini Error:", error);
    return "Error de conexión con el asistente. Por favor verifica tu conexión o llama a nuestras oficinas.";
  }
};
