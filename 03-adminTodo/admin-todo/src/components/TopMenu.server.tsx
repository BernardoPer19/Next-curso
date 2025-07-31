import { cookies } from "next/headers";
import TopMenuClient from "./TopMenu";


export default async function TopMenuServer() {
  const cookieStore = await cookies();
  const cartCookie = cookieStore.get("cart")?.value ?? "{}";
  console.log("cartCookie:", cartCookie);

  let cart = {};
  try {
    cart = JSON.parse(cartCookie);
  } catch (error) {
    console.error("Error parsing cartCookie:", error);
    cart = {};
  }
  console.log("cart:", cart);

  const totalItems = Object.values(cart).reduce((acc: number, val) => {
    const numVal = Number(val);
    if (isNaN(numVal)) return acc;
    return acc + numVal;
  }, 0);

  console.log("totalItems:", totalItems);

  return <TopMenuClient  totalItems={totalItems} />;
}
