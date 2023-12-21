import { StaticImageData } from "next/image";

export interface IMetahuman {
  id: number;
  name: string;
  slug: string;
  powerstats: {
    intelligence: number;
    strength: number;
    speed: number;
    durability: number;
    power: number;
    combat: number;
  };
  appearance?: {
    gender?: "Male" | "Female";
    race: string;
    height?: Array<string>;
    weight?: Array<string>;
    eyeColor?: string;
    hairColor?: string;
  };
  biography?: {
    fullName: string;
    alterEgos: string;
    aliases: Array<string>;
    placeOfBirth: string;
    firstAppearance: string;
    publisher: string;
  };
  images: {
    xs: string | StaticImageData;
    sm: string | StaticImageData;
    md: string | StaticImageData;
    lg: string | StaticImageData;
  };
}
