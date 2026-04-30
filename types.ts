export interface Product {
  id: string;
  name: string;
  category: string;
  description: string;
  detailedDescription?: string;
  image: string;
  gallery?: string[];
  technicalTable?: string;
  pdf?: string;
  specs: string[];
  subCategory?: string;
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