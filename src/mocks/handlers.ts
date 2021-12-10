// src/mocks/handlers.js
import { rest } from "msw";
export const handlers = [
  // TODO: Add this route to constant
  // TODO: Add global timeout to env variables
  // TODO: Rename folder to MockServiceworker and move the mocks to a Mock folder
  rest.get("/api/plans", (req, res, ctx) => {
    return res(
      ctx.status(200),
      ctx.json([
        {
          title: "plan server 1",
          description: "description plan server 1",
          date: Date.now(),
        },
        {
          title: "plan server 2",
          description: "description plan server 2",
          date: Date.now(),
        },
      ])
    );
  }),
];
