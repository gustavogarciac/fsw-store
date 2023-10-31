"use server";

import { prismaClient } from "../prisma";

export async function fetchAllCategories() {
  try {
    const categories = await prismaClient.category.findMany();

    if (!categories) {
      throw new Error("Found no categories.");
    }

    return categories;
  } catch (error) {}
}
