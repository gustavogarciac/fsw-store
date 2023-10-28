"use server";

import { prismaClient } from "../prisma";

export async function fetchAllProducts() {
  try {
    const products = await prismaClient.product.findMany();
    if (!products) {
      throw new Error("No products found!");
    }
    return products;
  } catch (error) {
    console.log(error);
    throw error;
  }
}
