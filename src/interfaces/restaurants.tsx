export interface Restaurant {
    id: string;
    name: string;
    location: {
      address1: string;
      address2: string;
      city: string;
      state: string;
      zip: string;
    };
    image_url: string;
    review_count: number;
    rating: number;
    phone: string;
    categories: {
       alias: string;
      title: string;
    }[];
}