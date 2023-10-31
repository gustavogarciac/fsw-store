"use server";

import { prismaClient } from "../prisma";
import {
  FetchProductBySlug,
  FetchProductsByCategory,
  FetchRelatedProducts,
} from "./shared.types";

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

export async function fetchProductBySlug(params: FetchProductBySlug) {
  try {
    const { slug } = params;

    const product = await prismaClient.product.findFirstOrThrow({
      where: {
        slug,
      },
    });

    return product;
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
  } catch (error) {
    console.log(error);
    throw error;
  }
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
  } catch (error) {
    console.log(error);
    throw error;
  }
}

export async function fetchRelatedProducts(params: FetchRelatedProducts) {
  try {
    const { slug } = params;

    const product = await prismaClient.product.findFirst({
      where: {
        slug,
      },
    });

    if (!product) {
      throw new Error("Cannot find product by slug");
    }

    const relatedProducts = await prismaClient.product.findMany({
      where: {
        slug: {
          not: slug,
        },
        category: {
          id: product?.categoryId,
        },
      },
    });

    if (!relatedProducts) {
      return [];
    }

    return relatedProducts;
  } catch (error) {
    console.log(error);
    throw error;
  }
}
