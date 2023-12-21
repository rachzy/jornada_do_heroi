export type TPowerStats = "Intelligence" | "Strength" | "Speed" | "Durability" | "Power" | "Combat";

export interface IPowerStats {
    label: TPowerStats;
    value: number;
}