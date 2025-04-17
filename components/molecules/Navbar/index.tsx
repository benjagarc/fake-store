import Link from "next/link";
import { memo } from "react";
import Navbar from "react-bootstrap/Navbar";

export const NavbarCustom = () => {
  const routes = [
    {
      href: "/",
      className: "navbar-brand",
      text: "FakeStore",
    },
  ];
  return (
    <>
      <Navbar bg="light" className="px-4 d-flex justify-content-between">
        {routes.map(({ href, className, text }) => (
          <Link key={href} href={href} className={className ?? ""}>
            {text}
          </Link>
        ))}
      </Navbar>
    </>
  );
};

export default memo(NavbarCustom);
