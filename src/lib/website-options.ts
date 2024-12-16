export interface WebsiteOption {
  id: string;
  name: string;
  description: string;
  price: number;
}

export interface WebsiteOptions {
  features: WebsiteOption[];
  services: WebsiteOption[];
}
