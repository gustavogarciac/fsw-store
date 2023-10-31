"use server";

import { prismaClient } from "../prisma";
import { FetchProductsByCategory } from "./shared.types";

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

export async function fetchAllProductsByCategory() {
  try {
    const keyboards = await prismaClient.product.findMany({
      where: {
        category: {
          slug: "keyboards",
        },
      },
    });

    const mouses = await prismaClient.product.findMany({
      where: {
        category: {
          slug: "mouses",
        },
      },
    });

    const offers = await prismaClient.product.findMany({
      where: {
        discountPercent: {
          gt: 0,
        },
      },
    });

    return { keyboards, mouses, offers };
  } catch (error) {}
}

export async function fetchProductByCategory(params: FetchProductsByCategory) {
  try {
    const { categorySlug } = params;

    const products = await prismaClient.product.findMany({
      where: {
        category: {
          slug: categorySlug,
        },
      },
    });

    if (!products) {
      throw new Error("Cannot find any product within this category.");
    }

    return products;
  } catch (error) {}
}
