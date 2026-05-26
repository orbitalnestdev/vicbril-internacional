export interface ProductColor {
  label: string;
  values: string[];
  codes: string[];
}

export interface Product {
  id: string;
  name: string;
    description: string;
  detailedDescription?: string;
  image: string;
  gallery?: string[];
  technicalTable?: string;
  pdf?: string;
  specs: string[];
  categoryPath: string[];
  characteristics?: string[];
  applications?: string;
  installation?: string;
  technicalIntro?: string;
  specsTable?: Record<string, string>[];
  specsTables?: {
    title: string;
    headers: string[];
    rows: (string[] | { isSubtitle: boolean; content: string })[];
    note?: string;
    isHorizontal?: boolean;
  }[];
  certifications?: string[];
  availableBrands?: string[];
  colors?: ProductColor[];
}

export interface Category {
  id: string;
  name: string;
  slug?: string;
  image?: string;
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