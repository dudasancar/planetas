import React from "react";
import { ITable } from "../../../interfaces/table";

export const columns = [
  {
    title: "Planeta",
    field: "planet",
    render: ({ name }: ITable) => (
      <p style={{ minWidth: 130, margin: 0 }}>{name}</p>
    ),
  },
  {
    title: "Área de superfície",
    field: "surfaceArea",
    render: ({ surfaceArea }: ITable) => (
      <p style={{ minWidth: 130, margin: 0 }}>
        {surfaceArea.toLocaleString("pt-BR")} km²
      </p>
    ),
  },
  {
    title: "Distância do sol",
    field: "sunDistance",
    render: ({ sunDistance }: ITable) => (
      <p style={{ minWidth: 130, margin: 0 }}>
        {sunDistance.toLocaleString("pt-BR")} km
      </p>
    ),
  },
  { title: "Duração do dia", field: "day" },
  {
    title: "Gravidade",
    field: "gravity",
    render: ({ gravity }: ITable) => (
      <p style={{ minWidth: 130, margin: 0 }}>{gravity} m/s²</p>
    ),
  },
];
export default columns;
