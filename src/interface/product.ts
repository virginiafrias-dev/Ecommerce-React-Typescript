export interface Product {
  amiiboSeries: string;
  character: string;
  gameSeries: string;
  head: string;
  image: string;
  name: string;
  release?: Release | null;
  tail: string;
  type: string;
  id?: number | null;
  price: number;
}

export interface Release {
  au: String;
  eu: String;
  jp: String;
  na: String;
}

export interface CartProduct {
  id: number;
  name: string;
  image: string;
  quantity: number;
  price: number;
}
