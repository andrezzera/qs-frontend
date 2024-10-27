interface Image {
  id: number;
  image: string;
}

interface Item {
  id: number;
  name: string;
  description: string;
  price: number;
  images?: Array<Image>;
}

interface Section {
  id: number;
  name: string;
  images: Array<Image>;
  items: Array<Item>;
}

export interface Menu {
  sections: Array<Section>;
}

export interface MenuProviderProps {
  children: React.ReactNode;
}
