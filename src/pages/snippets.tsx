import { SVGProps } from 'react';
import Head from 'next/head';
import { Layout } from '@/components/Layout';
import { Heading } from '@/components/Heading';
import { Link } from '@/components/Link';

const snippets = [
  {
    key: 's01',
    title: 'useIsMobile Hook',
    description:
      'Detects when the browser window width has entered the mobile breakpoint',
    tags: ['React.js'],
    icon: ReactSVG
  },
  {
    key: 's02',
    title: 'Gradient Text',
    description: 'Set Gradient Colors for Text',
    tags: ['CSS'],
    icon: CSSSVG
  },
  {
    key: 's03',
    title: 'Tailwind CSS classes',
    description: '',
    tags: ['TailwindCSS', 'CSS'],
    icon: TailwindSVG
  },
  {
    key: 's04',
    title: 'WithRequired Type',
    description: '',
    tags: ['TypeScript'],
    icon: TypeScriptSVG
  }
];

interface CardProps {
  title: string;
  description: string;
  icon: any;
  tags: string[];
}

function Card({ title, description, icon: Icon, tags = [] }: CardProps) {
  return (
    <Link href="/" intent="non-text">
      {/* eslint-disable-next-line tailwindcss/no-custom-classname */}
      <div className="group/card mx-5 mb-[60px] h-[275px] w-[290px] rounded-lg border border-transparent shadow-sm transition-all duration-200 hover:shadow-lg dark:border-slate-700/80 dark:shadow-none dark:hover:border-slate-300">
        <div className="flex h-[126px] items-center justify-center border-b dark:border-slate-700/80 ">
          <Icon className="h-14 w-14 grayscale group-hover/card:grayscale-0 group-hover/card:transition-all group-hover/card:duration-300" />
        </div>
        <div className="h-[100px] p-5 text-left">
          <div className="font-display text-xl tracking-wide text-black dark:text-gray-200">
            {title}
          </div>
          <div className="mt-[5px] text-sm leading-6 text-slate-600/90 line-clamp-2 dark:text-slate-400">
            {description}
          </div>
        </div>
        <div className="flex items-center gap-x-[6px] px-5 pt-[12.5px] pb-0">
          {tags.map((tag) => (
            <div
              key={tag}
              className="inline-block rounded-[4px] border border-slate-300 px-[6px] py-px text-xs text-black dark:border-slate-700 dark:text-gray-200"
            >
              {tag}
            </div>
          ))}
        </div>
      </div>
    </Link>
  );
}

export default function Snippets() {
  return (
    <>
      <Head>
        <title>Eduardo Ambriz - Snippets</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Layout>
        <section className="mt-10 flex max-w-7xl flex-col justify-center px-5 sm:mx-auto sm:items-center sm:text-center">
          <Heading
            level={1}
            className="mt-6 max-w-5xl text-5xl leading-snug sm:leading-tight"
          >
            Code Snippets
          </Heading>
          <p className="mt-2 max-w-3xl text-lg leading-8 dark:text-slate-400 sm:mt-6">
            This is a compilation of useful code snippets for solving common
            programming challenges.
          </p>
          <div className="mt-16 flex w-full max-w-[1010px] flex-wrap justify-center">
            <div className="flex flex-wrap justify-center">
              {snippets.map((snippet) => (
                <Card {...snippet} key={snippet.key} />
              ))}
            </div>
          </div>
        </section>
      </Layout>
    </>
  );
}

interface IconProps extends SVGProps<SVGSVGElement> {}

function ReactSVG({ ...props }: IconProps) {
  return (
    <svg
      width="100%"
      height="100%"
      viewBox="0 0 410 369"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M204.995 224.552C226.56 224.552 244.042 207.07 244.042 185.506C244.042 163.941 226.56 146.459 204.995 146.459C183.43 146.459 165.948 163.941 165.948 185.506C165.948 207.07 183.43 224.552 204.995 224.552Z"
        fill="#087ea4"
      ></path>
      <path
        d="M409.99 184.505C409.99 153.707 381.437 126.667 335.996 108.925C343.342 60.6535 334.19 22.3878 307.492 6.98883C283.649 -6.77511 250.631 -0.0395641 214.512 25.9753C211.316 28.2692 208.143 30.7097 204.97 33.2477C201.822 30.7097 198.65 28.2692 195.477 25.9753C159.359 -0.0395641 126.34 -6.79951 102.497 6.98883C75.8237 22.3878 66.6721 60.6291 74.0422 108.852C28.5529 126.618 0 153.682 0 184.505C0 215.303 28.5528 242.342 73.9934 260.084C66.6477 308.356 75.7993 346.621 102.497 362.02C110.575 366.682 119.727 369 129.684 369C149.085 369 171.61 360.215 195.477 343.034C198.674 340.74 201.847 338.3 205.019 335.762C208.167 338.3 211.34 340.74 214.512 343.034C238.38 360.239 260.905 369 280.306 369C290.263 369 299.415 366.682 307.492 362.02C331.335 348.256 342 316.287 337.534 271.993C337.143 268.089 336.631 264.135 335.996 260.109C381.461 242.367 409.99 215.327 409.99 184.505ZM225.934 41.8136C246.238 27.1955 265.127 19.5814 280.306 19.5814C286.871 19.5814 292.728 20.9968 297.731 23.8765C315.204 33.9798 322.672 62.9475 317.327 102.433C299.756 97.0401 280.306 92.9158 259.392 90.2802C246.872 73.8074 233.597 58.9453 220.003 46.2551C221.98 44.7421 223.957 43.229 225.934 41.8136ZM112.259 23.8765C117.262 20.9968 123.119 19.5814 129.684 19.5814C144.863 19.5814 163.752 27.1711 184.056 41.8136C186.033 43.229 188.01 44.7176 189.986 46.2551C176.393 58.9453 163.142 73.783 150.622 90.2558C129.732 92.8914 110.258 97.0401 92.687 102.409C87.3424 62.9475 94.7857 33.9798 112.259 23.8765ZM19.5233 184.505C19.5233 164.322 40.9014 143.359 77.776 128.253C81.9003 146.141 88.0502 165.054 96.1768 184.456C88.0014 203.881 81.8515 222.819 77.7272 240.732C40.9014 225.626 19.5233 204.687 19.5233 184.505ZM184.056 327.196C154.966 348.134 128.805 354.675 112.259 345.133C94.7857 335.029 87.3181 306.062 92.6626 266.576C110.234 271.969 129.684 276.093 150.598 278.729C163.117 295.202 176.393 310.064 189.986 322.754C188.01 324.292 186.033 325.78 184.056 327.196ZM204.995 310.04C180.591 287.685 157.138 257.815 137.347 223.551C132.051 214.4 121.344 191.396 117 182.489C113.535 190.786 110.112 198.398 107.427 206.5C109.623 210.575 118.092 229.213 120.434 233.288C125.071 241.317 129.928 249.127 134.931 256.692C120.898 254.227 107.915 251.055 96.1035 247.321C102.815 217.011 116.213 182.064 137.347 145.458C142.545 136.453 153.838 116.346 159.5 108C150.568 109.147 143.395 108.767 135 110.5C132.56 114.453 122.777 131.645 120.434 135.721C115.749 143.823 111.454 151.925 107.427 159.978C102.546 146.581 98.8124 133.744 96.1524 121.64C125.755 112.293 162.727 106.411 204.995 106.411C215.562 106.411 237.63 106.197 247.49 106.905C242.048 99.7544 237.38 93.2819 231.694 86.888C227.082 86.7416 209.705 86.888 204.995 86.888C195.672 86.888 186.545 87.2053 177.589 87.7422C186.472 77.1752 195.672 67.5111 204.995 58.9697C229.375 81.3239 252.851 111.195 272.643 145.458C277.841 154.463 289.073 175.426 293.49 184.505C296.98 176.207 300.281 168.64 302.99 160.489C300.793 156.389 291.898 139.747 289.555 135.696C284.918 127.667 280.062 119.858 275.059 112.317C289.092 114.782 302.075 117.954 313.886 121.688C307.175 151.998 293.777 186.945 272.643 223.551C267.445 232.556 252.651 253.178 246.99 261.524C255.922 260.377 265.595 258.663 273.99 256.93C276.43 252.976 287.212 237.364 289.555 233.288C294.216 225.235 298.512 217.182 302.489 209.153C307.224 222.185 310.982 234.997 313.715 247.394C284.138 256.741 247.214 262.598 204.995 262.598C194.428 262.598 169.859 261.208 160 260.5C165.442 267.65 171.304 275.095 176.99 281.489C181.602 281.635 200.285 282.121 204.995 282.121C214.317 282.121 223.444 281.804 232.401 281.267C223.493 291.834 214.317 301.498 204.995 310.04ZM297.731 345.133C281.185 354.699 254.999 348.159 225.934 327.196C223.957 325.78 221.98 324.292 220.003 322.754C233.597 310.064 246.848 295.226 259.367 278.753C280.233 276.118 299.659 271.993 317.205 266.625C317.547 269.089 317.888 271.554 318.132 273.97C321.72 309.649 314.277 335.566 297.731 345.133ZM332.262 240.756C328.065 222.599 321.842 203.686 313.813 184.578C321.988 165.152 328.138 146.215 332.262 128.302C369.088 143.408 390.466 164.322 390.466 184.505C390.466 204.687 369.113 225.626 332.262 240.756Z"
        fill="#087ea4"
      ></path>
    </svg>
  );
}

function CSSSVG({ ...props }: IconProps) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" {...props}>
      <path
        fill="#264de4"
        d="M71.357 460.819L30.272 0h451.456l-41.129 460.746L255.724 512z"
      />
      <path fill="#2965f1" d="M405.388 431.408l35.148-393.73H256v435.146z" />
      <path
        fill="#ebebeb"
        d="M124.46 208.59l5.065 56.517H256V208.59zM119.419 150.715H256V94.197H114.281zM256 355.372l-.248.066-62.944-16.996-4.023-45.076h-56.736l7.919 88.741 115.772 32.14.26-.073z"
      />
      <path
        fill="#fff"
        d="M255.805 208.59v56.517H325.4l-6.56 73.299-63.035 17.013v58.8l115.864-32.112.85-9.549 13.28-148.792 1.38-15.176 10.203-114.393H255.805v56.518h79.639L330.3 208.59z"
      />
    </svg>
  );
}

function TailwindSVG({ ...props }: IconProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 54 33"
      {...props}
    >
      <g clipPath="url(#prefix__clip0)">
        <path
          fill="#38bdf8"
          fill-rule="evenodd"
          d="M27 0c-7.2 0-11.7 3.6-13.5 10.8 2.7-3.6 5.85-4.95 9.45-4.05 2.054.513 3.522 2.004 5.147 3.653C30.744 13.09 33.808 16.2 40.5 16.2c7.2 0 11.7-3.6 13.5-10.8-2.7 3.6-5.85 4.95-9.45 4.05-2.054-.513-3.522-2.004-5.147-3.653C36.756 3.11 33.692 0 27 0zM13.5 16.2C6.3 16.2 1.8 19.8 0 27c2.7-3.6 5.85-4.95 9.45-4.05 2.054.514 3.522 2.004 5.147 3.653C17.244 29.29 20.308 32.4 27 32.4c7.2 0 11.7-3.6 13.5-10.8-2.7 3.6-5.85 4.95-9.45 4.05-2.054-.513-3.522-2.004-5.147-3.653C23.256 19.31 20.192 16.2 13.5 16.2z"
          clip-rule="evenodd"
        />
      </g>
      <defs>
        <clipPath id="prefix__clip0">
          <path fill="#fff" d="M0 0h54v32.4H0z" />
        </clipPath>
      </defs>
    </svg>
  );
}

function TypeScriptSVG({ ...props }: IconProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      height="512"
      viewBox="0 0 512 512"
      width="512"
      {...props}
    >
      <rect fill="#3178c6" height="512" rx="50" width="512" />
      <rect fill="#3178c6" height="512" rx="50" width="512" />
      <path
        clipRule="evenodd"
        d="m316.939 407.424v50.061c8.138 4.172 17.763 7.3 28.875 9.386s22.823 3.129 35.135 3.129c11.999 0 23.397-1.147 34.196-3.442 10.799-2.294 20.268-6.075 28.406-11.342 8.138-5.266 14.581-12.15 19.328-20.65s7.121-19.007 7.121-31.522c0-9.074-1.356-17.026-4.069-23.857s-6.625-12.906-11.738-18.225c-5.112-5.319-11.242-10.091-18.389-14.315s-15.207-8.213-24.18-11.967c-6.573-2.712-12.468-5.345-17.685-7.9-5.217-2.556-9.651-5.163-13.303-7.822-3.652-2.66-6.469-5.476-8.451-8.448-1.982-2.973-2.974-6.336-2.974-10.091 0-3.441.887-6.544 2.661-9.308s4.278-5.136 7.512-7.118c3.235-1.981 7.199-3.52 11.894-4.615 4.696-1.095 9.912-1.642 15.651-1.642 4.173 0 8.581.313 13.224.938 4.643.626 9.312 1.591 14.008 2.894 4.695 1.304 9.259 2.947 13.694 4.928 4.434 1.982 8.529 4.276 12.285 6.884v-46.776c-7.616-2.92-15.937-5.084-24.962-6.492s-19.381-2.112-31.066-2.112c-11.895 0-23.163 1.278-33.805 3.833s-20.006 6.544-28.093 11.967c-8.086 5.424-14.476 12.333-19.171 20.729-4.695 8.395-7.043 18.433-7.043 30.114 0 14.914 4.304 27.638 12.912 38.172 8.607 10.533 21.675 19.45 39.204 26.751 6.886 2.816 13.303 5.579 19.25 8.291s11.086 5.528 15.415 8.448c4.33 2.92 7.747 6.101 10.252 9.543 2.504 3.441 3.756 7.352 3.756 11.733 0 3.233-.783 6.231-2.348 8.995s-3.939 5.162-7.121 7.196-7.147 3.624-11.894 4.771c-4.748 1.148-10.303 1.721-16.668 1.721-10.851 0-21.597-1.903-32.24-5.71-10.642-3.806-20.502-9.516-29.579-17.13zm-84.159-123.342h64.22v-41.082h-179v41.082h63.906v182.918h50.874z"
        fill="#fff"
        fillRule="evenodd"
      />
    </svg>
  );
}
