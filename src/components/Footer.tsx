import { Wordmark } from '@/components/Wordmark';
import { NavItems } from '@/components/Header';
import { Link } from '@/components/Link';
import { AnchorLink } from '@/components/AnchorLink';
import { Heading } from '@/components/Heading';

export function Footer() {
  return (
    <footer className="mt-36 border-t dark:border-gray-800">
      <div className="mx-auto max-w-5xl px-7">
        <div className="flex flex-col items-baseline gap-y-16 py-12 lg:grid lg:grid-cols-12 lg:gap-8">
          <div className="lg:col-span-5 lg:col-start-1">
            <Link href="/" intent="non-style">
              <Wordmark />
            </Link>
            <div className="mt-8">
              <ul className="flex flex-row items-center gap-x-7">
                <li>
                  <AnchorLink
                    href="https://twitter.com/edroamz"
                    intent="non-text"
                  >
                    <svg
                      aria-label="Twitter"
                      fill="currentColor"
                      height="16"
                      viewBox="0 0 18 15"
                      className="text-slate-600 dark:text-slate-300"
                    >
                      <path
                        d="M18 1.684l-1.687 1.684v.28c0 .307-.05.602-.123.886-.04 2.316-.777 5.387-3.816 7.81C6.404 17.115 0 12.907 0 12.907c5.063 0 5.063-1.684 5.063-1.684-1.126 0-3.376-2.243-3.376-2.243.563.56 1.689 0 1.689 0C.56 7.295.56 5.61.56 5.61c.563.561 1.689 0 1.689 0C-.563 3.368 1.124.561 1.124.561 1.687 3.368 9 4.49 9 4.49l.093-.046A6.637 6.637 0 0 1 9 3.368C9 1.353 10.636 0 12.656 0c1.112 0 2.094.506 2.765 1.286l.329-.163L17.437 0l-1.122 2.245L18 1.684z"
                        fillRule="nonzero"
                      ></path>
                    </svg>
                  </AnchorLink>
                </li>
                <li>
                  <AnchorLink
                    href="https://github.com/edroamz"
                    intent="non-text"
                  >
                    <svg
                      aria-label="GitHub"
                      height="19"
                      viewBox="0 0 14 14"
                      width="19"
                      className="text-slate-600 dark:text-slate-300"
                    >
                      <path
                        d="M7 .175c-3.872 0-7 3.128-7 7 0 3.084 2.013 5.71 4.79 6.65.35.066.482-.153.482-.328v-1.181c-1.947.415-2.363-.941-2.363-.941-.328-.81-.787-1.028-.787-1.028-.634-.438.044-.416.044-.416.7.044 1.071.722 1.071.722.635 1.072 1.641.766 2.035.59.066-.459.24-.765.437-.94-1.553-.175-3.193-.787-3.193-3.456 0-.766.262-1.378.721-1.881-.065-.175-.306-.897.066-1.86 0 0 .59-.197 1.925.722a6.754 6.754 0 0 1 1.75-.24c.59 0 1.203.087 1.75.24 1.335-.897 1.925-.722 1.925-.722.372.963.131 1.685.066 1.86.46.48.722 1.115.722 1.88 0 2.691-1.641 3.282-3.194 3.457.24.219.481.634.481 1.29v1.926c0 .197.131.415.481.328C11.988 12.884 14 10.259 14 7.175c0-3.872-3.128-7-7-7z"
                        fill="currentColor"
                        fillRule="nonzero"
                      ></path>
                    </svg>
                  </AnchorLink>
                </li>
                <li>
                  <AnchorLink
                    href="https://www.linkedin.com/in/edroamz/"
                    intent="non-text"
                  >
                    <svg
                      aria-label="LinkedIn"
                      fill="currentColor"
                      viewBox="0 0 16 16"
                      focusable="false"
                      className="h-5 w-5 text-slate-600 dark:text-slate-300"
                    >
                      <path d="M12.1 15H15L15 9.87c0-2.519-.542-4.454-3.48-4.454-1.121-.042-2.218.54-2.784 1.51V5.648H5.953V15h2.899v-4.626c0-1.22.23-2.4 1.74-2.4 1.489 0 1.508 1.395 1.508 2.48V15ZM1 2.685c0 .924.76 1.685 1.682 1.685.923 0 1.682-.761 1.682-1.686C4.364 1.76 3.604 1 2.682 1 1.76 1 1 1.76 1 2.685ZM1.23 15h2.902V5.648H1.23V15Z"></path>
                    </svg>
                  </AnchorLink>
                </li>
              </ul>
            </div>
          </div>
          <div className="lg:col-span-3 lg:col-start-6">
            <Heading
              level={2}
              className="font-sans font-semibold tracking-wide"
            >
              Resources
            </Heading>
            <nav>
              <ul className="mt-7 flex flex-col space-y-3">
                <NavItems />
              </ul>
            </nav>
          </div>
          <div className="leading-loose lg:col-span-4 lg:col-start-9 ">
            This Web site is built with{' '}
            <AnchorLink href="https://nextjs.org/">Next.js</AnchorLink>,{' '}
            <AnchorLink href="https://www.typescriptlang.org/">
              Typescript
            </AnchorLink>
            ,{' '}
            <AnchorLink href="https://tailwindcss.com/">
              Tailwind CSS
            </AnchorLink>
            , <AnchorLink href="https://www.radix-ui.com/">Radix UI</AnchorLink>
            , and hosted on{' '}
            <AnchorLink href="https://vercel.com/">Vercel</AnchorLink>.
          </div>
        </div>
        <div className="border-t dark:border-gray-800"></div>
        <div className="mt-6 pb-10">
          <p className="text-sm tracking-wide">
            © {new Date().getFullYear()} Eduardo Ambriz. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
