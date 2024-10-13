import React from "react";
import { AccordionDemo } from "./faq-section";

function PricingSection() {
  return (
    <section id="pricing" className="bg-white py-0">
      <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">
            Pricing
          </h2>
          <p className="mt-3 max-w-2xl mx-auto text-xl text-gray-500 sm:mt-4">
            Choose the plan that fits your needs.
          </p>
        </div>
        <div className="mt-10 space-y-8 lg:space-y-0 lg:grid lg:grid-cols-1 lg:gap-x-6">
          <div className="bg-[#0000ff]/5 rounded-lg shadow-md overflow-hidden flex flex-col">
            <div className="px-6 py-8 sm:p-10 sm:pb-6 flex-grow">
              <div>
                <h3 className="text-2xl font-bold text-gray-900 sm:text-2xl">
                  Free
                </h3>
                <div className="mt-4 flex items-baseline text-4xl font-extrabold text-[#0000ff]">
                  $0
                  <span className="ml-1 text-2xl font-medium text-gray-500">
                    /month
                  </span>
                </div>
              </div>
            </div>
            <div className="px-6 pt-6 pb-8 sm:p-10 sm:pt-6">
              <ul className="space-y-4">
                <li className="flex items-start">
                  <div className="flex-shrink-0">
                    <svg
                      className="h-6 w-6 text-[#0000ff]"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                  </div>
                  <p className="ml-3 text-base text-gray-700">
                    Known your price per hour service provision
                  </p>
                </li>
                <li className="flex items-start">
                  <div className="flex-shrink-0">
                    <svg
                      className="h-6 w-6 text-[#0000ff]"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                  </div>
                  <p className="ml-3 text-base text-gray-700">
                    Access to create 5 project cost
                  </p>
                </li>
                <li className="flex items-start">
                  <div className="flex-shrink-0">
                    <svg
                      className="h-6 w-6 text-[#0000ff]"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                  </div>
                  <p className="ml-3 text-base text-gray-700">
                    Access to plan your vacation
                  </p>
                </li>
              </ul>
              <div className="mt-10">
                <button className="bg-[#0000ff] hover:bg-[#0000ff]/80 text-white px-6 py-3 rounded-md w-full">
                  Start your free trial
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="text-center py-20">
          <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">FAQ</h2>
          <p className="mt-3 max-w-2xl mx-auto text-xl text-gray-500 sm:mt-4">
            Frequently Asked Questions
          </p>
        </div>
        <AccordionDemo />
      </div>
    </section>
  );
}

export default PricingSection;
