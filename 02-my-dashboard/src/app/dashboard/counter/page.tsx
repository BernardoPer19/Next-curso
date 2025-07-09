import CartCounter from "@/shopping-cart/components/CartCounter";

export const metadata = {
  title: "Counter Page",
  description: "My description",
};

function CounterPage() {
  return (
    <div className="flex flex-col items-center justify-center w-full h-full">
      <span>Product Cart</span>
      <CartCounter />
    </div>
  );
}

export default CounterPage;
