import { BaseChatModel } from '@langchain/core/language_models/chat_models';
/*import { initChatModel } from 'langchain/chat_models/universal';*/
import { ChatOllama } from "@langchain/ollama";

export async function loadChatModel(
  /*modelName: string = process.env.MODEL_NAME || "qwen2.5:7b",*/
  modelName: string = process.env.MODEL_NAME || "qwen2.5:7b",
  temperature: number = 0
): Promise<BaseChatModel> {
  const baseUrl = process.env.OLLAMA_BASE_URL || "http://127.0.0.1:11434";

  return new ChatOllama({
    model: modelName,
    baseUrl: baseUrl,
    temperature: temperature,
  });
}

/*export async function getModel(
  modelName: string = process.env.MODEL_NAME || "qwen2.5:7b",
  temperature: number = 0.7
): Promise<BaseChatModel> {
  // Determine if we are connecting via Docker network or localhost
  const baseUrl = process.env.OLLAMA_BASE_URL || "http://127.0.0.1:11434";

  return await initChatModel(modelName, {
    modelProvider: "ollama",
    baseUrl: baseUrl,
    temperature: temperature,
  });
}*/

/*const SUPPORTED_PROVIDERS = [
  'openai',
  'anthropic',
  'azure_openai',
  'cohere',
  'google-vertexai',
  'google-vertexai-web',
  'google-genai',
  'ollama',
  'together',
  'fireworks',
  'mistralai',
  'groq',
  'bedrock',
  'cerebras',
  'deepseek',
  'xai',
] as const;
/**
 * Load a chat model from a fully specified name.
 * @param fullySpecifiedName - String in the format 'provider/model' or 'provider/account/provider/model'.
 * @returns A Promise that resolves to a BaseChatModel instance.
 */
/*export async function loadChatModel(
  fullySpecifiedName: string,
  temperature: number = 0.2,
): Promise<BaseChatModel> {
  const index = fullySpecifiedName.indexOf('/');
  if (index === -1) {
    // If there's no "/", assume it's just the model
    if (
      !SUPPORTED_PROVIDERS.includes(
        fullySpecifiedName as (typeof SUPPORTED_PROVIDERS)[number],
      )
    ) {
      throw new Error(`Unsupported model: ${fullySpecifiedName}`);
    }
    return await initChatModel(fullySpecifiedName, {
      temperature: temperature,
    });
  } else {
    const provider = fullySpecifiedName.slice(0, index);
    const model = fullySpecifiedName.slice(index + 1);
    if (
      !SUPPORTED_PROVIDERS.includes(
        provider as (typeof SUPPORTED_PROVIDERS)[number],
      )
    ) {
      throw new Error(`Unsupported provider: ${provider}`);
    }
    return await initChatModel(model, {
      modelProvider: provider,
      temperature: temperature,
    });
  }
}
*/