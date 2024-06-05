import { atom } from "recoil";

interface ProductProps {
  id: string;
  name: string;
  price: number;
  thumbnailUrl: string;
  pcg: string;
  scg: string;
  dcg: string;
  avgScore: number;
}

export const productState = atom<ProductProps>({
  key: "productState",
  default: {
    id: "",
    name: "",
    price: 0,
    thumbnailUrl: "",
    pcg: "",
    scg: "",
    dcg: "",
    avgScore: 0,
  },
});
