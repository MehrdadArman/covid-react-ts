import { setupServer } from "msw/node";
import { covidHandlers } from "./covidHandlers";

export const server = setupServer(...covidHandlers);
