'use server';
import { getCookieCart } from "@/cookies/cookieCart";
import { cookies } from "next/headers";

/**
 * Agrega 1 unidad del producto con el ID dado al carrito
 */
export const addProductToCart = async (productId: string) => {

    const cookieCart = await getCookieCart();

    if (cookieCart[productId]) {
        cookieCart[productId] = (cookieCart[productId] || 0) + 1;
    } else {
        cookieCart[productId] = 1
    }



    const store = await cookies();
    store.set("cart", JSON.stringify(cookieCart), {
        path: '/',
        httpOnly: true,
        maxAge: 60 * 60 * 24 * 7, // 1 semana
    });
};


