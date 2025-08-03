import OpenAI from "openai";

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY, // Use your OpenRouter API key here
  baseURL: "https://openrouter.ai/api/v1", // Point to OpenRouter instead of OpenAI
});

export const callOpenAI = async (prompt: string) => {
  const completion = await openai.chat.completions.create({
    model: "mistralai/mixtral-8x7b", // Or: "openai/gpt-3.5-turbo", etc.
    messages: [
      {
        role: "system",
        content:
          "You are a world class research assistant tasked with enriching startup data.",
      },
      {
        role: "user",
        content: prompt,
      },
    ],
    temperature: 0,
  });

  return completion.choices[0].message.content;
};
