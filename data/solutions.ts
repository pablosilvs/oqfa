import type { Solution } from "@/types";
import { celularSolutions } from "./solutions-celular";
import { computadorSolutions } from "./solutions-computador";
import { internetSolutions } from "./solutions-internet";
import { arquivosSolutions } from "./solutions-arquivos";
import { pagamentosSolutions } from "./solutions-pagamentos";
import { comprasSolutions } from "./solutions-compras";
import { casaSolutions } from "./solutions-casa";
import { veiculosSolutions } from "./solutions-veiculos";
import { normalizeSolution } from "@/lib/normalize";

const raw: Solution[] = [
  ...celularSolutions,
  ...computadorSolutions,
  ...internetSolutions,
  ...arquivosSolutions,
  ...pagamentosSolutions,
  ...comprasSolutions,
  ...casaSolutions,
  ...veiculosSolutions,
];

export const solutions: Solution[] = raw.map((s) => normalizeSolution(s, s.slug));

export const solutionCount = solutions.length;
