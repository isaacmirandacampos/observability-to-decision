import { PropsWithChildren } from "react";
import { Footer } from "../molecules/footer";
import { Header } from "../molecules/header";

export const LandingPageTemplate = ({ children }: PropsWithChildren) => {
  return (
    <main>
      <Header />
      {children}
      <Footer />
    </main>
  );
};
