import Link from "next/link";
export const Header: React.FC = () => {
  return (
    <header className="relative overflow-hidden bg-white/5">
      <div className="relative w-full mx-auto max-w-7xl">
        <div
          className="relative flex flex-col w-full p-5 mx-auto lg:px-16 md:flex-row md:items-center md:justify-between md:px-6"
          x-data="{ open: false }"
        >
          <div className="flex flex-row items-center justify-between text-sm text-black lg:justify-start">
            <Link href="/">
              <div className="inline-flex items-center gap-3">
                <span className="text-2xl italic font-semibold tracking-tighter uppercase">
                  Techoffee
                </span>
              </div>
            </Link>
            <button
              className="items-center inline-flex focus:outline-none focus:text-black hover:text-[#0000ff] justify-center md:hidden p-2 text-black"
              onClick={() => ""}
            >
              <svg
                className="size-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  d="M4 6h16M4 12h16M4 18h16"
                  className={`inline-flex stroke-linecap-round stroke-linejoin-round stroke-width-2`}
                ></path>
                <path
                  d="M6 18L18 6M6 6l12 12"
                  className={`inline-flex stroke-linecap-round stroke-linejoin-round stroke-width-2`}
                ></path>
              </svg>
            </button>
          </div>
          <nav
            className={`flex-col items-center flex-grow md:flex md:flex-row md:justify-end md:pb-0 md:space-x-6 flex`}
          >
            <Link
              href="/login"
              className="active:bg-fuchsia-50 active:text-black bg-[#0000ff]/5 focus-visible:outline-2 focus-visible:outline-fuchsia-50 focus-visible:outline-offset-2 focus:outline-none group hover:bg-[#0000ff]/5 hover:text-[#0000ff] justify-center px-6 py-2 rounded-full text-[#0000ff] text-sm"
            >
              Sign-in &nbsp; →
            </Link>
          </nav>
        </div>
      </div>
    </header>
  );
};
