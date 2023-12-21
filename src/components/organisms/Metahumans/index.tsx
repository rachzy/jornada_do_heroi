import SearchInput from "@/components/atoms/SearchInput";
import { IMetahuman } from "@/interfaces/Metahuman";

import Saitama from "../../../assets/saitama.png";
import MetahumanList from "@/components/molecules/MetahumanList";

export const metahumans: IMetahuman[] = [
  {
    id: 1,
    name: "Saitama",
    slug: "One punch man",
    images: {
      xs: Saitama,
      sm: Saitama,
      md: "https://static.wikia.nocookie.net/onepunchman/images/0/01/Saitama_Manga.webp/revision/latest/scale-to-width/360?cb=20230808213219&path-prefix=pt-br",
      lg: Saitama,
    },
    powerstats: {
      combat: 100,
      durability: 90,
      intelligence: 20,
      power: 95,
      speed: 90,
      strength: 100,
    },
  },
  {
    id: 2,
    name: "Naruto",
    slug: "Naruto",
    images: {
      xs: Saitama,
      sm: Saitama,
      md: "https://static.wikia.nocookie.net/fiction-battlefield/images/6/64/Naruto_Mid.png/revision/latest/scale-to-width-down/400?cb=20190310073634&path-prefix=pt-br",
      lg: Saitama,
    },
    powerstats: {
      combat: 80,
      durability: 100,
      intelligence: 25,
      power: 100,
      speed: 95,
      strength: 90,
    },
  },
  {
    id: 3,
    name: "Saitama",
    slug: "One punch man",
    appearance: {
      race: "human",
    },
    images: {
      xs: Saitama,
      sm: Saitama,
      md: Saitama,
      lg: Saitama,
    },
    powerstats: {
      combat: 100,
      durability: 90,
      intelligence: 20,
      power: 95,
      speed: 90,
      strength: 100,
    },
  },
  {
    id: 4,
    name: "Saitama",
    slug: "One punch man",
    appearance: {
      race: "human",
    },
    images: {
      xs: Saitama,
      sm: Saitama,
      md: Saitama,
      lg: Saitama,
    },
    powerstats: {
      combat: 100,
      durability: 90,
      intelligence: 20,
      power: 95,
      speed: 90,
      strength: 100,
    },
  },
  {
    id: 5,
    name: "Saitama",
    slug: "One punch man",
    appearance: {
      race: "human",
    },
    images: {
      xs: Saitama,
      sm: Saitama,
      md: Saitama,
      lg: Saitama,
    },
    powerstats: {
      combat: 100,
      durability: 90,
      intelligence: 20,
      power: 95,
      speed: 90,
      strength: 100,
    },
  },
];

export default function Metahumans() {
  return (
    <>
      <SearchInput placeholder="Search for a metahuman..." />
      <MetahumanList metahumans={metahumans} />
    </>
  );
}
