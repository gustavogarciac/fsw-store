import React from "react";
import { currentUser } from "@clerk/nextjs";
import { prismaClient } from "@/lib/prisma";

const Home = async () => {
  const user = await currentUser();
  const products = await fetchAllProducts();

  async function fetchAllProducts() {
    try {
      const products = await prismaClient.product.findMany();
      return products;
    } catch (error) {
      console.log(error);
      throw error;
    }
  }
  return (
    <div className="text-2xl">
      {user?.firstName}
      {products.map((product) => (
        <p>{product.name}</p>
      ))}
    </div>
  );
};

export default Home;
