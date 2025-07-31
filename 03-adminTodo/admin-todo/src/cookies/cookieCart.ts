import { cookies } from "next/headers";

// 🧠 Singleton asincrónico para compartir cookieStore en una ejecución
let cookieStoreCache: ReturnType<typeof cookies> | null = null;

export const getCookieStore = async () => {
    if (!cookieStoreCache) {
        cookieStoreCache = cookies();
    }
    return cookieStoreCache;
};



/**
 * Devuelve el contenido de la cookie 'cart' como objeto { [id: string]: number }
 */
export const getCookieCart = async (): Promise<Record<string, number>> => {
    const store = await cookies();
    const cartCookie = store.get("cart");

    if (!cartCookie?.value) return {};

    try {
        return JSON.parse(cartCookie.value);
    } catch (error) {
        console.error("❌ Error parsing cart cookie:", error);
        return {};
    }
};
;
