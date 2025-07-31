import { cookies } from "next/headers";

// 🔄 Singleton asincrónico (válido para Next.js 15+)
let cookieStoreCache: Awaited<ReturnType<typeof cookies>> | null = null;

export const getCookieStore = async () => {
  if (!cookieStoreCache) {
    cookieStoreCache = await cookies(); // ✅ Ahora sí es async en Next.js 15
  }
  return cookieStoreCache;
};

/**
 * Devuelve el contenido de la cookie 'cart' como objeto { [id: string]: number }
 */
export const getCookieCart = async (): Promise<Record<string, number>> => {
  const store = await getCookieStore(); // ✅ Usa el store cacheado
  const cartCookie = await store.get("cart");

  if (!cartCookie?.value) return {};

  try {
    return JSON.parse(cartCookie.value);
  } catch (error) {
    console.error("❌ Error parsing cart cookie:", error);
    return {};
  }
};
