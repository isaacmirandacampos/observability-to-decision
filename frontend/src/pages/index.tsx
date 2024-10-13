"use client";

import React from "react";

import FeaturesSection from "@/components/features-section";
import PricingSection from "@/components/pricing-section";
import { LandingPageTemplate } from "@/components/templates/landing-page";

const LandingPage = () => {
  return (
    <LandingPageTemplate>
      <section className="relative flex flex-col items-center justify-center bg-white pb-20">
        <div className="relative items-center w-full px-5 pt-12 mx-auto lg:px-16 max-w-7xl md:px-12 lg:pt-24">
          <div>
            <div>
              <p className="mt-8 text-3xl font-semibold tracking-tighter md:text-7xl text-slate-800">
                Easy service provision calculator
              </p>
            </div>
          </div>
        </div>
      </section>
      <FeaturesSection />
      <PricingSection />
    </LandingPageTemplate>
  );
};

export default LandingPage;
