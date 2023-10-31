import Footer from "@/components/shared/Footer";
import Header from "@/components/shared/Header";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-w-screen min-h-screen flex flex-col justify-between">
      <Header />
      <div className="flex flex-1 flex-col gap-4 px-5">{children}</div>
      <Footer />
    </div>
  );
}
