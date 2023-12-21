import SearchInput from "@/components/atoms/SearchInput";
import { IMetahuman } from "@/interfaces/Metahuman";

import Saitama from "../../../assets/saitama.png";
import MetahumanList from "@/components/molecules/MetahumanList";

export default function Metahumans() {
  const metahumans: IMetahuman[] = [
    {
      id: 1,
      name: "Saitama",
      slug: "One punch man",
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
      id: 2,
      name: "Saitama",
      slug: "One punch man",
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
  return (
    <>
      <SearchInput placeholder="Search for a metahuman..." />
      <MetahumanList metahumans={metahumans} />
    </>
  );
}
