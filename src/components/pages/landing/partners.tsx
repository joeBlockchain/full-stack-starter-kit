import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import Image from "next/image";

// Define a type for the partner information
type Partner = {
  name: string;
  url?: string;
  tagline?: string;
  logoType: "svg" | "image";
  src?: string; // For Image type logos
  svgContent?: JSX.Element; // Now can include SVGs and other JSX elements like span
  alt: string;
  width: number;
  height: number;
};

// Define an array of partners
const partners: Partner[] = [
  //next.js
  {
    name: "next.js",
    url: "https://nextjs.org",
    tagline: "The React Framework for the Web",
    logoType: "svg",
    svgContent: (
      <svg
        aria-label="Next.js logotype"
        height="30"
        role="img"
        viewBox="0 0 394 79"
        width="394"
      >
        <path
          d="M261.919 0.0330722H330.547V12.7H303.323V79.339H289.71V12.7H261.919V0.0330722Z"
          className="fill-[#000000] dark:fill-[#fff]"
        ></path>
        <path
          d="M149.052 0.0330722V12.7H94.0421V33.0772H138.281V45.7441H94.0421V66.6721H149.052V79.339H80.43V12.7H80.4243V0.0330722H149.052Z"
          className="fill-[#000000] dark:fill-[#fff]"
        ></path>
        <path
          d="M183.32 0.0661486H165.506L229.312 79.3721H247.178L215.271 39.7464L247.127 0.126654L229.312 0.154184L206.352 28.6697L183.32 0.0661486Z"
          className="fill-[#000000] dark:fill-[#fff]"
        ></path>
        <path
          d="M201.6 56.7148L192.679 45.6229L165.455 79.4326H183.32L201.6 56.7148Z"
          className="fill-[#000000] dark:fill-[#fff]"
        ></path>
        <path
          d="M80.907 79.339L17.0151 0H0V79.3059H13.6121V16.9516L63.8067 79.339H80.907Z"
          className="fill-[#000000] dark:fill-[#fff]"
        ></path>
        <path
          d="M333.607 78.8546C332.61 78.8546 331.762 78.5093 331.052 77.8186C330.342 77.1279 329.991 76.2917 330 75.3011C329.991 74.3377 330.342 73.5106 331.052 72.8199C331.762 72.1292 332.61 71.7838 333.607 71.7838C334.566 71.7838 335.405 72.1292 336.115 72.8199C336.835 73.5106 337.194 74.3377 337.204 75.3011C337.194 75.9554 337.028 76.5552 336.696 77.0914C336.355 77.6368 335.922 78.064 335.377 78.373C334.842 78.6911 334.252 78.8546 333.607 78.8546Z"
          className="fill-[#000000] dark:fill-[#fff]"
        ></path>
        <path
          d="M356.84 45.4453H362.872V68.6846C362.863 70.8204 362.401 72.6472 361.498 74.1832C360.585 75.7191 359.321 76.8914 357.698 77.7185C356.084 78.5364 354.193 78.9546 352.044 78.9546C350.079 78.9546 348.318 78.6001 346.75 77.9094C345.182 77.2187 343.937 76.1826 343.024 74.8193C342.101 73.456 341.649 71.7565 341.649 69.7207H347.691C347.7 70.6114 347.903 71.3838 348.29 72.0291C348.677 72.6744 349.212 73.1651 349.895 73.5105C350.586 73.8559 351.38 74.0286 352.274 74.0286C353.243 74.0286 354.073 73.8286 354.746 73.4196C355.419 73.0197 355.936 72.4199 356.296 71.6201C356.646 70.8295 356.831 69.8479 356.84 68.6846V45.4453Z"
          className="fill-[#000000] dark:fill-[#fff]"
        ></path>
        <path
          d="M387.691 54.5338C387.544 53.1251 386.898 52.0254 385.773 51.2438C384.638 50.4531 383.172 50.0623 381.373 50.0623C380.11 50.0623 379.022 50.2532 378.118 50.6258C377.214 51.0075 376.513 51.5164 376.033 52.1617C375.554 52.807 375.314 53.5432 375.295 54.3703C375.295 55.061 375.461 55.6608 375.784 56.1607C376.107 56.6696 376.54 57.0968 377.103 57.4422C377.656 57.7966 378.274 58.0874 378.948 58.3237C379.63 58.56 380.313 58.76 380.995 58.9236L384.14 59.6961C385.404 59.9869 386.631 60.3778 387.802 60.8776C388.973 61.3684 390.034 61.9955 390.965 62.7498C391.897 63.5042 392.635 64.413 393.179 65.4764C393.723 66.5397 394 67.7848 394 69.2208C394 71.1566 393.502 72.8562 392.496 74.3285C391.491 75.7917 390.043 76.9369 388.143 77.764C386.252 78.582 383.965 79 381.272 79C378.671 79 376.402 78.6002 374.493 77.8004C372.575 77.0097 371.08 75.8463 370.001 74.3194C368.922 72.7926 368.341 70.9294 368.258 68.7391H374.235C374.318 69.8842 374.687 70.8386 375.314 71.6111C375.95 72.3745 376.78 72.938 377.795 73.3197C378.819 73.6923 379.962 73.8832 381.226 73.8832C382.545 73.8832 383.707 73.6832 384.712 73.2924C385.708 72.9016 386.492 72.3564 387.055 71.6475C387.627 70.9476 387.913 70.1206 387.922 69.1754C387.913 68.312 387.654 67.5939 387.156 67.0304C386.649 66.467 385.948 65.9944 385.053 65.6127C384.15 65.231 383.098 64.8856 381.899 64.5857L378.081 63.6223C375.323 62.9225 373.137 61.8592 371.541 60.4323C369.937 59.0054 369.143 57.115 369.143 54.7429C369.143 52.798 369.678 51.0894 370.758 49.6261C371.827 48.1629 373.294 47.0268 375.148 46.2179C377.011 45.4 379.114 45 381.456 45C383.836 45 385.92 45.4 387.719 46.2179C389.517 47.0268 390.929 48.1538 391.952 49.5897C392.976 51.0257 393.511 52.6707 393.539 54.5338H387.691Z"
          className="fill-[#000000] dark:fill-[#fff]"
        ></path>
      </svg>
    ),
    alt: "Next.js",
    width: 394,
    height: 79,
  },
  //vercel
  {
    name: "vercel",
    url: "https://vercel.com",
    tagline:
      "Vercel is the Frontend Cloud. Build, scale, and secure a faster, personalized web.",
    logoType: "svg",
    svgContent: (
      <svg
        aria-label="Vercel logotype"
        height="30"
        role="img"
        viewBox="0 0 283 64"
        width="283"
      >
        <path
          d="M141.68 16.25c-11.04 0-19 7.2-19 18s8.96 18 20 18c6.67 0 12.55-2.64 16.19-7.09l-7.65-4.42c-2.02 2.21-5.09 3.5-8.54 3.5-4.79 0-8.86-2.5-10.37-6.5h28.02c.22-1.12.35-2.28.35-3.5 0-10.79-7.96-17.99-19-17.99zm-9.46 14.5c1.25-3.99 4.67-6.5 9.45-6.5 4.79 0 8.21 2.51 9.45 6.5h-18.9zm117.14-14.5c-11.04 0-19 7.2-19 18s8.96 18 20 18c6.67 0 12.55-2.64 16.19-7.09l-7.65-4.42c-2.02 2.21-5.09 3.5-8.54 3.5-4.79 0-8.86-2.5-10.37-6.5h28.02c.22-1.12.35-2.28.35-3.5 0-10.79-7.96-17.99-19-17.99zm-9.45 14.5c1.25-3.99 4.67-6.5 9.45-6.5 4.79 0 8.21 2.51 9.45 6.5h-18.9zm-39.03 3.5c0 6 3.92 10 10 10 4.12 0 7.21-1.87 8.8-4.92l7.68 4.43c-3.18 5.3-9.14 8.49-16.48 8.49-11.05 0-19-7.2-19-18s7.96-18 19-18c7.34 0 13.29 3.19 16.48 8.49l-7.68 4.43c-1.59-3.05-4.68-4.92-8.8-4.92-6.07 0-10 4-10 10zm82.48-29v46h-9v-46h9zM37.59.25l36.95 64H.64l36.95-64zm92.38 5l-27.71 48-27.71-48h10.39l17.32 30 17.32-30h10.39zm58.91 12v9.69c-1-.29-2.06-.49-3.2-.49-5.81 0-10 4-10 10v14.8h-9v-34h9v9.2c0-5.08 5.91-9.2 13.2-9.2z"
          className="fill-[#000000] dark:fill-[#fff]"
        ></path>
      </svg>
    ),
    alt: "Vercel",
    width: 394,
    height: 79,
  },
  //openai
  {
    name: "openai",
    url: "https://openai.com",
    tagline:
      "OpenAI is an AI research and deployment company. Our mission is to ensure that artificial general intelligence benefits all of humanity.",
    logoType: "svg",
    svgContent: (
      <svg
        data-v-e1bdab2c=""
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1180 320"
        className="a-icon--logo-text flex h-32 fill-[#000000] dark:fill-[#fff]"
        data-new=""
        aria-hidden="true"
        style={{ width: "150px", height: "48px" }}
      >
        <g data-v-e1bdab2c="" fill="currentColor">
          <path d="m367.44 153.84c0 52.32 33.6 88.8 80.16 88.8s80.16-36.48 80.16-88.8-33.6-88.8-80.16-88.8-80.16 36.48-80.16 88.8zm129.6 0c0 37.44-20.4 61.68-49.44 61.68s-49.44-24.24-49.44-61.68 20.4-61.68 49.44-61.68 49.44 24.24 49.44 61.68z"></path>
          <path d="m614.27 242.64c35.28 0 55.44-29.76 55.44-65.52s-20.16-65.52-55.44-65.52c-16.32 0-28.32 6.48-36.24 15.84v-13.44h-28.8v169.2h28.8v-56.4c7.92 9.36 19.92 15.84 36.24 15.84zm-36.96-69.12c0-23.76 13.44-36.72 31.2-36.72 20.88 0 32.16 16.32 32.16 40.32s-11.28 40.32-32.16 40.32c-17.76 0-31.2-13.2-31.2-36.48z"></path>
          <path d="m747.65 242.64c25.2 0 45.12-13.2 54-35.28l-24.72-9.36c-3.84 12.96-15.12 20.16-29.28 20.16-18.48 0-31.44-13.2-33.6-34.8h88.32v-9.6c0-34.56-19.44-62.16-55.92-62.16s-60 28.56-60 65.52c0 38.88 25.2 65.52 61.2 65.52zm-1.44-106.8c18.24 0 26.88 12 27.12 25.92h-57.84c4.32-17.04 15.84-25.92 30.72-25.92z"></path>
          <path d="m823.98 240h28.8v-73.92c0-18 13.2-27.6 26.16-27.6 15.84 0 22.08 11.28 22.08 26.88v74.64h28.8v-83.04c0-27.12-15.84-45.36-42.24-45.36-16.32 0-27.6 7.44-34.8 15.84v-13.44h-28.8z"></path>
          <path d="m1014.17 67.68-65.28 172.32h30.48l14.64-39.36h74.4l14.88 39.36h30.96l-65.28-172.32zm16.8 34.08 27.36 72h-54.24z"></path>
          <path d="m1163.69 68.18h-30.72v172.32h30.72z"></path>
          <path d="m297.06 130.97c7.26-21.79 4.76-45.66-6.85-65.48-17.46-30.4-52.56-46.04-86.84-38.68-15.25-17.18-37.16-26.95-60.13-26.81-35.04-.08-66.13 22.48-76.91 55.82-22.51 4.61-41.94 18.7-53.31 38.67-17.59 30.32-13.58 68.54 9.92 94.54-7.26 21.79-4.76 45.66 6.85 65.48 17.46 30.4 52.56 46.04 86.84 38.68 15.24 17.18 37.16 26.95 60.13 26.8 35.06.09 66.16-22.49 76.94-55.86 22.51-4.61 41.94-18.7 53.31-38.67 17.57-30.32 13.55-68.51-9.94-94.51zm-120.28 168.11c-14.03.02-27.62-4.89-38.39-13.88.49-.26 1.34-.73 1.89-1.07l63.72-36.8c3.26-1.85 5.26-5.32 5.24-9.07v-89.83l26.93 15.55c.29.14.48.42.52.74v74.39c-.04 33.08-26.83 59.9-59.91 59.97zm-128.84-55.03c-7.03-12.14-9.56-26.37-7.15-40.18.47.28 1.3.79 1.89 1.13l63.72 36.8c3.23 1.89 7.23 1.89 10.47 0l77.79-44.92v31.1c.02.32-.13.63-.38.83l-64.41 37.19c-28.69 16.52-65.33 6.7-81.92-21.95zm-16.77-139.09c7-12.16 18.05-21.46 31.21-26.29 0 .55-.03 1.52-.03 2.2v73.61c-.02 3.74 1.98 7.21 5.23 9.06l77.79 44.91-26.93 15.55c-.27.18-.61.21-.91.08l-64.42-37.22c-28.63-16.58-38.45-53.21-21.95-81.89zm221.26 51.49-77.79-44.92 26.93-15.54c.27-.18.61-.21.91-.08l64.42 37.19c28.68 16.57 38.51 53.26 21.94 81.94-7.01 12.14-18.05 21.44-31.2 26.28v-75.81c.03-3.74-1.96-7.2-5.2-9.06zm26.8-40.34c-.47-.29-1.3-.79-1.89-1.13l-63.72-36.8c-3.23-1.89-7.23-1.89-10.47 0l-77.79 44.92v-31.1c-.02-.32.13-.63.38-.83l64.41-37.16c28.69-16.55 65.37-6.7 81.91 22 6.99 12.12 9.52 26.31 7.15 40.1zm-168.51 55.43-26.94-15.55c-.29-.14-.48-.42-.52-.74v-74.39c.02-33.12 26.89-59.96 60.01-59.94 14.01 0 27.57 4.92 38.34 13.88-.49.26-1.33.73-1.89 1.07l-63.72 36.8c-3.26 1.85-5.26 5.31-5.24 9.06l-.04 89.79zm14.63-31.54 34.65-20.01 34.65 20v40.01l-34.65 20-34.65-20z"></path>
        </g>
      </svg>
    ),
    alt: "OpenAI",
    width: 394,
    height: 79,
  },
  //convex
  {
    name: "convex",
    url: "https://convex.dev",
    tagline:
      "Convex is the fullstack TypeScript development platform. Replace your database, server functions and glue code",
    logoType: "svg",
    svgContent: (
      <svg
        width="126"
        height="20"
        viewBox="0 0 126 20"
        xmlns="http://www.w3.org/2000/svg"
        className="fill-[#000000] dark:fill-[#fff]"
      >
        {/* Your SVG content */}
        <g clipPath="">
          <path d="M3.185 17.467Q.358 14.938.358 10 .357 5.063 3.243 2.533 6.125.004 11.127.003q2.075-.001 3.672.305a11.6 11.6 0 0 1 3.055 1.034v5.339q-2.269-1.133-5.15-1.133-2.54 0-3.749 1.01Q7.744 7.57 7.745 10q-.001 2.35 1.192 3.4 1.19 1.054 3.77 1.053 2.73 0 5.19-1.335v5.585q-2.73 1.295-6.807 1.294c-3.388 0-6.02-.844-7.905-2.53M19.538 9.997q0-4.897 2.653-7.448 2.654-2.55 8-2.549c3.59 0 6.273.85 8.058 2.549q2.67 2.549 2.671 7.448 0 9.996-10.73 9.997-10.652.004-10.652-9.997M32.75 13.4q.786-1.055.786-3.4 0-2.307-.786-3.38-.788-1.073-2.56-1.073-1.73.002-2.5 1.073-.768 1.073-.768 3.38 0 2.35.768 3.4.768 1.054 2.5 1.053 1.77-.002 2.56-1.053M42.603.404h6.767l.193 1.458q1.116-.81 2.845-1.336A12.3 12.3 0 0 1 55.985 0q3.422 0 5 1.782c1.051 1.188 1.576 3.02 1.576 5.505v12.305h-7.228V8.055q0-1.296-.558-1.862c-.372-.38-.995-.565-1.867-.565q-.806 0-1.653.385a4.6 4.6 0 0 0-1.424.992v12.587h-7.228zM62.582.405h7.536l3.461 11.252L77.041.405h7.536l-7.192 19.187H69.77zM86.852 17.942c-2.171-1.714-3.187-4.69-3.187-7.903 0-3.13.808-5.708 2.654-7.49S90.976 0 94.526 0q4.898 0 7.71 2.388 2.81 2.39 2.811 6.517v3.362H91.302c.342.998.775 1.72 1.839 2.166q1.598.67 4.45.668 1.703 0 3.47-.282c.415-.068 1.098-.174 1.458-.254v4.665c-1.796.513-4.19.77-6.89.77-3.632-.003-6.605-.343-8.777-2.058m10.601-9.804c0-.95-1.04-2.995-3.129-2.995-1.884 0-3.129 2.013-3.129 2.995z"></path>
          <path d="M110.723 9.836 103.955.405h7.844l13.843 19.187h-7.92l-3.077-4.292-3.078 4.292h-7.883zM117.548.405h7.808l-5.993 8.4-3.965-5.383z"></path>
        </g>
      </svg>
    ),
    alt: "Convex",
    width: 126,
    height: 20,
  },
  //stripe
  {
    name: "stripe",
    url: "https://stripe.com",
    tagline: "Financial infrastructure for the internet.",
    // logoType: "image",
    // src: "https://cdn.brandfolder.io/KGT2DTA4/at/frwcjft3nmmn6fccbt79bcm8/Stripe_wordmark_-_slate.svg",
    logoType: "svg",
    svgContent: (
      <svg
        width="120"
        height="80"
        viewBox="0 0 60 25"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="fill-[#000000] dark:fill-[#fff]"
      >
        <path
          clip-rule="evenodd"
          d="m29.859 3.25238-3.8456.86517V.849144L29.859 0v3.25238Zm7.9962 1.81011c-1.5014 0-2.4666.73699-3.0029 1.24968l-.1991-.99334h-3.3706V24l3.8302-.8491.0153-4.5342c.5516.4166 1.3636 1.0094 2.7118 1.0094 2.7424 0 5.2397-2.3071 5.2397-7.3859-.0153-4.6463-2.5432-7.17771-5.2244-7.17771ZM36.936 16.1014c-.9039 0-1.4402-.3365-1.8079-.7531l-.0153-5.94396c.3983-.46463.9499-.78506 1.8232-.78506 1.3942 0 2.3594 1.63422 2.3594 3.73302 0 2.1469-.9499 3.7491-2.3594 3.7491Zm18.2243-3.701c0-4.10155-1.8998-7.33791-5.5309-7.33791-3.6463 0-5.8525 3.23636-5.8525 7.30581 0 4.8225 2.6045 7.2578 6.3428 7.2578 1.8232 0 3.2021-.4326 4.2439-1.0414v-3.2043c-1.0418.5447-2.2369.8812-3.7536.8812-1.4861 0-2.8037-.5448-2.9723-2.4353h7.4919c0-.0883.0055-.2889.0119-.52.0086-.3141.0188-.6844.0188-.9059Zm-7.5685-1.5221c0-1.81042 1.0571-2.56343 2.0223-2.56343.9346 0 1.9304.75301 1.9304 2.56343h-3.9527ZM29.859 5.33308h-3.8456V19.352h3.8456V5.33308Zm-8.211.00155.2452 1.1856c.9039-1.73033 2.6964-1.37786 3.1867-1.1856v3.68496c-.4749-.17623-2.007-.40054-2.911.83312v9.50079h-3.8302V5.33463h3.3093Zm-7.4115-3.47428-3.7383.83312-.0153 12.83333c0 2.3712 1.7006 4.1175 3.9681 4.1175 1.2563 0 2.1756-.2403 2.6812-.5287v-3.2524c-.4903.2083-2.911.9453-2.911-1.4259V8.74963h2.911V5.33704h-2.911l.0153-3.47669ZM5.17844 8.53917c-.812 0-1.30227.24032-1.30227.86517 0 .68226.84376.98236 1.89053 1.35466 1.70649.6069 3.95254 1.4058 3.96203 4.365 0 2.8679-2.19088 4.5181-5.37761 4.5181-1.31759 0-2.75775-.2723-4.182591-.9132v-3.8131c1.286951.737 2.910961 1.2817 4.182591 1.2817.85796 0 1.4708-.2403 1.4708-.9773 0-.7557-.91465-1.1011-2.01888-1.5181C2.12137 13.067 0 12.2658 0 9.5966c0-2.83582 2.06831-4.53411 5.17844-4.53411 1.27163 0 2.52794.20828 3.79957.73699v3.76507c-1.16438-.65688-2.63518-1.02538-3.79957-1.02538Z"
        ></path>
      </svg>
    ),
    alt: "Stripe",
    width: 150,
    height: 40,
  },
  //tailwincss
  {
    name: "tailwindcss",
    url: "https://tailwindcss.com",
    tagline: "Rapidly build modern websites without ever leaving your HTML.",
    // logoType: "image",
    // src: "https://github.com/tailwindlabs/tailwindcss.com/raw/master/src/img/brand/tailwindcss-logotype.svg",
    logoType: "svg",
    svgContent: (
      <svg viewBox="0 0 250 31" className="fill-[#000000] dark:fill-[#fff]">
        <path d="M25.517 0C18.712 0 14.46 3.382 12.758 10.146c2.552-3.382 5.529-4.65 8.931-3.805 1.941.482 3.329 1.882 4.864 3.432 2.502 2.524 5.398 5.445 11.722 5.445 6.804 0 11.057-3.382 12.758-10.145-2.551 3.382-5.528 4.65-8.93 3.804-1.942-.482-3.33-1.882-4.865-3.431C34.736 2.92 31.841 0 25.517 0zM12.758 15.218C5.954 15.218 1.701 18.6 0 25.364c2.552-3.382 5.529-4.65 8.93-3.805 1.942.482 3.33 1.882 4.865 3.432 2.502 2.524 5.397 5.445 11.722 5.445 6.804 0 11.057-3.381 12.758-10.145-2.552 3.382-5.529 4.65-8.931 3.805-1.941-.483-3.329-1.883-4.864-3.432-2.502-2.524-5.398-5.446-11.722-5.446z"></path>
        <path d="M76.546 12.825h-4.453v8.567c0 2.285 1.508 2.249 4.453 2.106v3.463c-5.962.714-8.332-.928-8.332-5.569v-8.567H64.91V9.112h3.304V4.318l3.879-1.143v5.937h4.453v3.713zM93.52 9.112h3.878v17.849h-3.878v-2.57c-1.365 1.891-3.484 3.034-6.285 3.034-4.884 0-8.942-4.105-8.942-9.389 0-5.318 4.058-9.388 8.942-9.388 2.801 0 4.92 1.142 6.285 2.999V9.112zm-5.674 14.636c3.232 0 5.674-2.392 5.674-5.712s-2.442-5.711-5.674-5.711-5.674 2.392-5.674 5.711c0 3.32 2.442 5.712 5.674 5.712zm16.016-17.313c-1.364 0-2.477-1.142-2.477-2.463a2.475 2.475 0 012.477-2.463 2.475 2.475 0 012.478 2.463c0 1.32-1.113 2.463-2.478 2.463zm-1.939 20.526V9.112h3.879v17.849h-3.879zm8.368 0V.9h3.878v26.06h-3.878zm29.053-17.849h4.094l-5.638 17.849h-3.807l-3.735-12.03-3.771 12.03h-3.806l-5.639-17.849h4.094l3.484 12.315 3.771-12.315h3.699l3.734 12.315 3.52-12.315zm8.906-2.677c-1.365 0-2.478-1.142-2.478-2.463a2.475 2.475 0 012.478-2.463 2.475 2.475 0 012.478 2.463c0 1.32-1.113 2.463-2.478 2.463zm-1.939 20.526V9.112h3.878v17.849h-3.878zm17.812-18.313c4.022 0 6.895 2.713 6.895 7.354V26.96h-3.878V16.394c0-2.713-1.58-4.14-4.022-4.14-2.55 0-4.561 1.499-4.561 5.14v9.567h-3.879V9.112h3.879v2.285c1.185-1.856 3.124-2.749 5.566-2.749zm25.282-6.675h3.879V26.96h-3.879v-2.57c-1.364 1.892-3.483 3.034-6.284 3.034-4.884 0-8.942-4.105-8.942-9.389 0-5.318 4.058-9.388 8.942-9.388 2.801 0 4.92 1.142 6.284 2.999V1.973zm-5.674 21.775c3.232 0 5.674-2.392 5.674-5.712s-2.442-5.711-5.674-5.711-5.674 2.392-5.674 5.711c0 3.32 2.442 5.712 5.674 5.712zm22.553 3.677c-5.423 0-9.481-4.105-9.481-9.389 0-5.318 4.058-9.388 9.481-9.388 3.519 0 6.572 1.82 8.008 4.605l-3.34 1.928c-.79-1.678-2.549-2.749-4.704-2.749-3.16 0-5.566 2.392-5.566 5.604 0 3.213 2.406 5.605 5.566 5.605 2.155 0 3.914-1.107 4.776-2.749l3.34 1.892c-1.508 2.82-4.561 4.64-8.08 4.64zm14.472-13.387c0 3.249 9.661 1.285 9.661 7.89 0 3.57-3.125 5.497-7.003 5.497-3.591 0-6.177-1.607-7.326-4.177l3.34-1.927c.574 1.606 2.011 2.57 3.986 2.57 1.724 0 3.052-.571 3.052-2 0-3.176-9.66-1.391-9.66-7.781 0-3.356 2.909-5.462 6.572-5.462 2.945 0 5.387 1.357 6.644 3.713l-3.268 1.82c-.647-1.392-1.904-2.035-3.376-2.035-1.401 0-2.622.607-2.622 1.892zm16.556 0c0 3.249 9.66 1.285 9.66 7.89 0 3.57-3.124 5.497-7.003 5.497-3.591 0-6.176-1.607-7.326-4.177l3.34-1.927c.575 1.606 2.011 2.57 3.986 2.57 1.724 0 3.053-.571 3.053-2 0-3.176-9.66-1.391-9.66-7.781 0-3.356 2.908-5.462 6.572-5.462 2.944 0 5.386 1.357 6.643 3.713l-3.268 1.82c-.646-1.392-1.903-2.035-3.375-2.035-1.401 0-2.622.607-2.622 1.892z"></path>
      </svg>
    ),
    alt: "Tailwind CSS",
    width: 200,
    height: 40,
  },
  //shadcnui
  {
    name: "shadcnui",
    url: "https://ui.shadcn.com/",
    tagline:
      "A collection of composable React components for building great user interfaces.",
    logoType: "svg",
    svgContent: (
      <>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 256 256"
          className="h-12 w-12"
        >
          <rect width="256" height="256" fill="none"></rect>
          <line
            x1="208"
            y1="128"
            x2="128"
            y2="208"
            fill="none"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="18"
          ></line>
          <line
            x1="192"
            y1="40"
            x2="40"
            y2="192"
            fill="none"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="18"
          ></line>
        </svg>
        <span className="ml-2 font-bold text-3xl">shadcn/ui</span>
      </>
    ),

    alt: "Shadcn/ui",
    width: 394,
    height: 79,
  },
  //clerk
  {
    name: "Clerk",
    url: "https://clerk.com/",
    tagline: "The most comprehensive User Management Platform",
    logoType: "svg",
    svgContent: (
      <>
        <svg
          viewBox="0 0 15 18" // Adjust the viewBox if necessary to change the positioning of the SVG content
          fill="none"
          aria-hidden="true"
          className="h-10 w-10" // Added mr-2 to add some margin to the right of the SVG
        >
          <ellipse
            cx="8.99999"
            cy="9"
            rx="2.81249"
            ry="2.8125"
            className="fill-[#000000] dark:fill-[#fff]"
          ></ellipse>
          <path
            d="M14.0674 15.6591C14.3067 15.8984 14.2827 16.2945 14.0015 16.4829C12.571 17.4411 10.8504 17.9999 8.9993 17.9999C7.14818 17.9999 5.42758 17.4411 3.99704 16.4829C3.71589 16.2945 3.69186 15.8984 3.93115 15.6591L5.98648 13.6037C6.17225 13.418 6.46042 13.3886 6.69424 13.5084C7.3856 13.8626 8.16911 14.0624 8.9993 14.0624C9.82948 14.0624 10.613 13.8626 11.3044 13.5084C11.5382 13.3886 11.8263 13.418 12.0121 13.6037L14.0674 15.6591Z"
            className="fill-[#000000] dark:fill-[#fff]"
          ></path>
          <path
            d="M14.0022 1.51706C14.2834 1.70539 14.3074 2.10155 14.0681 2.34084L12.0128 4.39619C11.827 4.58195 11.5388 4.61129 11.305 4.49151C10.6136 4.13733 9.83014 3.9375 8.99996 3.9375C6.20403 3.9375 3.93748 6.20406 3.93748 9C3.93748 9.83018 4.13731 10.6137 4.49149 11.3051C4.61127 11.5389 4.58193 11.827 4.39617 12.0128L2.34083 14.0682C2.10154 14.3074 1.70538 14.2834 1.51705 14.0023C0.558857 12.5717 0 10.8511 0 9C0 4.02944 4.02942 0 8.99996 0C10.8511 0 12.5717 0.55886 14.0022 1.51706Z"
            className="fill-[#3c3c3c80] dark:fill-[#fff]"
          ></path>
          <path
            d="M29.3906 1.82813C29.3906 1.75046 29.4535 1.6875 29.5312 1.6875H31.6406C31.7182 1.6875 31.7812 1.75046 31.7812 1.82813V16.1719C31.7812 16.2495 31.7182 16.3125 31.6406 16.3125H29.5312C29.4535 16.3125 29.3906 16.2495 29.3906 16.1719V1.82813ZM26.4137 13.2701C26.3577 13.2217 26.2739 13.2253 26.2201 13.2761C25.8913 13.5864 25.5063 13.8347 25.0843 14.0078C24.6215 14.1979 24.1239 14.2936 23.622 14.2891C23.1982 14.3016 22.7762 14.2291 22.3821 14.076C21.988 13.9229 21.63 13.6925 21.3303 13.3989C20.7859 12.8431 20.4726 12.0496 20.4726 11.1037C20.4726 9.2101 21.7324 7.91491 23.622 7.91491C24.1289 7.90793 24.631 8.01058 25.0926 8.21543C25.5111 8.40122 25.8869 8.66683 26.1982 8.99629C26.2514 9.05264 26.3398 9.05916 26.3985 9.00842L27.8225 7.7762C27.8807 7.72586 27.8877 7.63797 27.8364 7.58065C26.7653 6.38368 25.0872 5.76563 23.4914 5.76563C20.2783 5.76563 18 7.93299 18 11.1217C18 12.6988 18.5662 14.0268 19.5211 14.9645C20.476 15.9023 21.8363 16.4531 23.4059 16.4531C25.3741 16.4531 26.9582 15.6984 27.8869 14.7302C27.9414 14.6734 27.9354 14.583 27.8758 14.5315L26.4137 13.2701ZM43.401 11.8056C43.3931 11.876 43.3332 11.9287 43.2623 11.9287H35.8731C35.7833 11.9287 35.7164 12.012 35.7398 12.0986C36.1074 13.4614 37.2035 14.286 38.6995 14.286C39.2038 14.2966 39.7037 14.1928 40.1605 13.9827C40.5862 13.787 40.9639 13.5038 41.2682 13.1528C41.305 13.1104 41.3691 13.1041 41.4122 13.1401L42.8978 14.4335C42.9547 14.483 42.9626 14.5687 42.9138 14.6262C42.0169 15.6843 40.5637 16.4531 38.5695 16.4531C35.5016 16.4531 33.1874 14.3286 33.1874 11.1009C33.1874 9.51732 33.7326 8.18944 34.6412 7.25179C35.1209 6.76963 35.6959 6.38911 36.3307 6.13368C36.9656 5.87826 37.6469 5.75332 38.3327 5.76658C41.4422 5.76658 43.453 7.95343 43.453 10.973C43.4491 11.2512 43.4317 11.5291 43.401 11.8056ZM35.7842 9.84589C35.7581 9.93268 35.8251 10.0172 35.9158 10.0172H40.829C40.9198 10.0172 40.9869 9.93217 40.9617 9.84491C40.6268 8.68592 39.7772 7.91244 38.4577 7.91244C38.0696 7.90013 37.6834 7.97039 37.3254 8.11832C36.9675 8.26633 36.6462 8.48856 36.3836 8.76977C36.1075 9.08283 35.9034 9.44988 35.7842 9.84589ZM50.7639 5.76717C50.8422 5.76632 50.9061 5.82952 50.9061 5.90779V8.26951C50.9061 8.35135 50.8365 8.41586 50.7548 8.40981C50.5269 8.39291 50.3114 8.37856 50.1701 8.37856C48.3301 8.37856 47.2499 9.67359 47.2499 11.3735V16.1719C47.2499 16.2495 47.1869 16.3125 47.1092 16.3125H44.9999C44.9222 16.3125 44.8592 16.2495 44.8592 16.1719V6.05379C44.8592 5.97613 44.9222 5.91317 44.9999 5.91317H47.1092C47.1869 5.91317 47.2499 5.97613 47.2499 6.05379V7.47394C47.2499 7.48196 47.2563 7.48845 47.2644 7.48845C47.2689 7.48845 47.2733 7.48627 47.276 7.48261C48.1006 6.38146 49.3176 5.76892 50.6033 5.76892L50.7639 5.76717ZM56.4778 11.9525C56.4864 11.9432 56.4985 11.938 56.5112 11.938C56.5269 11.938 56.5415 11.9461 56.5498 11.9595L59.217 16.2462C59.2426 16.2874 59.2878 16.3125 59.3364 16.3125L61.7342 16.3125C61.8445 16.3125 61.9118 16.1915 61.8538 16.0978L58.1947 10.1939C58.1616 10.1406 58.1679 10.0719 58.21 10.0254L61.7355 6.13573C61.8174 6.04534 61.7533 5.90066 61.6313 5.90066H59.1298C59.0904 5.90066 59.0528 5.91719 59.0261 5.94622L54.9472 10.3925C54.8605 10.487 54.7029 10.4257 54.7029 10.2974V1.82812C54.7029 1.75046 54.64 1.6875 54.5623 1.6875H52.453C52.3753 1.6875 52.3123 1.75046 52.3123 1.82812V16.1719C52.3123 16.2495 52.3753 16.3125 52.453 16.3125L54.5623 16.3125C54.64 16.3125 54.7029 16.2495 54.7029 16.1719V13.9147C54.7029 13.8792 54.7164 13.8449 54.7406 13.8189L56.4778 11.9525Z"
            className="fill-[#000000)] dark:fill-[#ffffff]"
          ></path>
        </svg>
        <span className="font-bold text-3xl self-center">clerk</span>{" "}
        {/* Added self-center to vertically center the text */}
      </>
    ),
    alt: "Clerk",
    width: 28,
    height: 28,
  },
  // Add more partners as needed
];

export function Partners() {
  return (
    <section className="w-full py-24">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col justify-center space-y-4">
          <div className="mx-3 space-y-2 lg:space-y-3 max-w-md md:max-w-2xl lg:max-w-3xl">
            <h1 className="leading-tight lg::leading-snug font-black text-5xl ">
              Utilizing todays leading technologies.
            </h1>
            <p className="leading-normal text-xl text-muted-foreground">
              Highlight the clients you work with or the partners you are
              associated with or just show off the tech stack you use.
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {partners.map((partner) => (
              <Button
                asChild
                key={partner.name}
                variant="outline"
                className="flex flex-row justify-center items-center p-4 h-32 rounded-lg"
              >
                <Link
                  href={partner.url || "/"}
                  target="_blank"
                  rel="noopener noreferrer"
                  className=""
                >
                  {partner.logoType === "svg" ? (
                    partner.svgContent
                  ) : (
                    <Image
                      src={partner.src!}
                      alt={partner.alt}
                      width={partner.width}
                      height={partner.height}
                      priority
                      className=""
                    />
                  )}
                  {/* <p className="m-5 text-sm text-pretty text-muted-foreground">
                    {partner.tagline}
                  </p> */}
                </Link>
              </Button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
