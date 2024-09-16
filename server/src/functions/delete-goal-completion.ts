import { eq } from "drizzle-orm";
import { db } from "../db";
import { goalCompletions } from "../db/schema";

interface DeleteGoalCompletionRequest {
  goalCompletionId: string;
}

export async function deleteGoalCompletion({
  goalCompletionId,
}: DeleteGoalCompletionRequest) {
  const result = await db
    .delete(goalCompletions)
    .where(eq(goalCompletions.id, goalCompletionId))
    .returning();

  if (!result.length) {
    throw new Error("Goal completion not found or already deleted");
  }

  return {
    success: true,
    deleteCompletion: result[0],
  };
}
