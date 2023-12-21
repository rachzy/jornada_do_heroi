export type Stats = "Intelligence" | "Strength" | "Speed" | "Durability" | "Power" | "Combat";

export interface IPowerStats {
    label: Stats;
    value: number;
}