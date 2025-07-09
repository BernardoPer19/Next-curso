import Navbar from "@/components/navbar/Navbar";

export default function GeneralLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
    <Navbar/>
      <div>
        <span className="text-5xl">holbola</span>
        {children}
      </div>
    </>
  );
}
