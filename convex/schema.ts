import { v } from "convex/values";
import { defineSchema, defineTable } from "convex/server";

export default defineSchema({
  userSubscriptions: defineTable({
    userId: v.string(),
    stripePriceId: v.string(),
    stripeCustomerId: v.string(),
    stripeSubscriptionId: v.string(),
    stripeCurrentPeriodEnd: v.number(),
  })
    .index("by_userId", ["userId"])
    .index("by_stripeSubscriptionId", ["stripeSubscriptionId"]),
});
