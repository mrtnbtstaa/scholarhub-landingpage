import Footer from "@/components/layout/Footer/Footer";
import Header from "@/components/layout/Header";

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <Header />
      <main className="flex">{children}</main>
      <Footer />
    </>
  );
};

export default Layout;
