import Link from "next/link";

export const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-800 py-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-white">
        <div className="flex flex-col sm:flex-row justify-between items-center">
          <div className="mb-6 sm:mb-0">
            <Link href="/">
              <span className="text-xl sm:text-2xl italic font-semibold tracking-tighter uppercase">
                Techoffee
              </span>
            </Link>
          </div>
          <div>
            <ul className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-6">
              <li>
                <Link href="#features" className="hover:text-gray-400">
                  Features
                </Link>
              </li>
              <li>
                <Link href="#pricing" className="hover:text-gray-400">
                  Pricing
                </Link>
              </li>
              <li>
                <Link href="#faq" className="hover:text-gray-400">
                  Faq
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="mt-6 text-center text-gray-400 text-sm">
          &copy; 2024 Techoffee. All rights reserved.
        </div>
      </div>
    </footer>
  );
};
