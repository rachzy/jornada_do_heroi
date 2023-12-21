import {
  FaBrain,
  FaDumbbell,
  FaGaugeHigh,
  FaShield,
  FaBurst,
  FaHandFist,
} from "react-icons/fa6";

export const powerStateColorPicker = {
  intelligence: "#F16CBC",
  strength: "#FF7A00",
  speed: "#DB9E00",
  durability: "#00FF1A",
  power: "#00DBB3",
  combat: "#FF0505",
};

export const powerStateIconPicker = {
  intelligence: <FaBrain fill={powerStateColorPicker["intelligence"]} />,
  strength: <FaDumbbell fill={powerStateColorPicker["strength"]} />,
  speed: <FaGaugeHigh fill={powerStateColorPicker["speed"]} />,
  durability: <FaShield fill={powerStateColorPicker["durability"]} />,
  power: <FaBurst fill={powerStateColorPicker["power"]} />,
  combat: <FaHandFist fill={powerStateColorPicker["combat"]} />,
};
