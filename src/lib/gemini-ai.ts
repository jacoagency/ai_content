import { GoogleGenerativeAI } from "@google/generative-ai";

const getApiKey = () => {
  const apiKey = process.env.NEXT_PUBLIC_GEMINI_API_KEY;
  console.log("API Key (last 4 chars):", apiKey?.slice(-4));
  if (!apiKey) {
    throw new Error(
      "NEXT_PUBLIC_GEMINI_API_KEY is not set in the environment variables"
    );
  }
  return apiKey;
};

export const getChatSession = () => {
  const genAI = new GoogleGenerativeAI(getApiKey());
  const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

  const generationConfig = {
    temperature: 1,
    topP: 0.95,
    topK: 64,
    maxOutputTokens: 8192,
    responseMimeType: "text/plain",
  };

  return model.startChat({
    generationConfig: generationConfig,
    history: [],
  });
};
