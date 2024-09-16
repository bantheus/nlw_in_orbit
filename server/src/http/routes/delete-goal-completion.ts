import type { FastifyPluginAsyncZod } from "fastify-type-provider-zod";
import z from "zod";
import { deleteGoalCompletion } from "../../functions/delete-goal-completion";

export const deleteGoalCompletionRoute: FastifyPluginAsyncZod = async (
  app,
  _opts
) => {
  app.delete(
    "/delete-completion",
    {
      schema: {
        body: z.object({
          goalCompletionId: z.string(),
        }),
      },
    },
    async (request) => {
      const { goalCompletionId } = request.body;

      await deleteGoalCompletion({
        goalCompletionId,
      });
    }
  );
};
