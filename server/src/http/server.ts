import fastify from "fastify";
import {
  serializerCompiler,
  validatorCompiler,
  type ZodTypeProvider,
} from "fastify-type-provider-zod";
import { createGoalRoute } from "./routes/create-goal";
import { createGoalCompletionRoute } from "./routes/create-goal-completion";
import { getPendingGoalsRoute } from "./routes/get-week-pending-goals";

const app = fastify().withTypeProvider<ZodTypeProvider>();

app.setValidatorCompiler(validatorCompiler);
app.setSerializerCompiler(serializerCompiler);

app.register(createGoalRoute);
app.register(createGoalCompletionRoute);
app.register(getPendingGoalsRoute);

app
  .listen({
    port: 3000,
  })
  .then(() => {
    console.log("Server is running on port 3000");
  });
