export interface Product {
  id: string;
  created_at: string;
  name: string;
  description: string;
  price: number;
  category: string;
  stock: number;
  image_url: string;
  skin_type: string[];
}

export interface BlogPost {
  id: number;
  created_at: string;
  title: string;
  slug: string;
  excerpt?: string | null;
  cover_image?: string | null;
  content?: string | null;
}
