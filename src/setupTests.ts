import "cross-fetch/polyfill";
import { beforeAll, afterEach, afterAll } from "vitest";
import { setupServer } from "msw/node";
import { covidHandlers } from "./mocks/covidHandlers";

// Setup mock server
const server = setupServer(...covidHandlers);
server.use(...covidHandlers);

// Start server before all tests
beforeAll(() => server.listen({ onUnhandledRequest: "error" }));

//  Close server after all tests
afterAll(() => server.close());

// Reset handlers after each test `important for test isolation`
afterEach(() => server.resetHandlers());
