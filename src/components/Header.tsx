import Link from "next/link";

const Header = () => {
  return (
    <header
      className="rounded-xl text-white px-10 py-4 max-w-[1500px] fixed z-[1000]  w-full flex items-center justify-between"
      style={{
        top: "2%",
        left: "50%",
        transform: "translate(-50%, 0)",
        backdropFilter: "blur(10px)",
        // background: "rgba(255, 255, 255, 0.1)",
      }}
    >
      <Link href="/" className="font-medium font-poppins">
        Breezy Works
      </Link>

      <svg
        xmlns="http://www.w3.org/2000/svg"
        x="0px"
        y="0px"
        width="30"
        height="30"
        viewBox="0,0,256,256"
      >
        <g
          fill="#ffffff"
          stroke="none"
          strokeWidth="1"
          strokeLinecap="butt"
          strokeLinejoin="miter"
          strokeMiterlimit="10"
          strokeDasharray=""
          strokeDashoffset="0"
        >
          <g transform="scale(5.12,5.12)">
            <path d="M0,9v2h50v-2zM0,24v2h50v-2zM0,39v2h50v-2z"></path>
          </g>
        </g>
      </svg>
      {/* <nav>
        <ul className="flex gap-10">
          {links.map((link, index) => (
            <li key={index}>
              <a href={link.href} className="">
                {link.name}
              </a>
            </li>
          ))}
        </ul>
      </nav> */}
    </header>
  );
};

export default Header;
