export interface Product {
  id: string;
  name: string;
  category: string;
  description: string;
  image: string;
  specs: string[];
}

export interface Category {
  id: string;
  name: string;
  slug: string;
  image: string;
  banner: string;
}

export interface QuoteRequestItem {
  productName: string;
  quantity?: string;
}

export enum MessageRole {
  USER = 'user',
  MODEL = 'model'
}

export interface ChatMessage {
  role: MessageRole;
  text: string;
}