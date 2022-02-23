import Image from "next/image";
import Link from "next/link";
import data from "../data/headerSection.json";
import { useRouter } from "next/router";

const Header = ({ mvp }) => {
  const router = useRouter();

  return (
    <header>
      <div className="logo">
        <Link href="/">
          <a>
            <Image src={data.logo} width={135} height={135} alt="logo" />
          </a>
        </Link>
      </div>
      <div className="btn-try">
        {router.pathname === "/" && (
          <button className="contact-us-header">
            <a href="#footer">Contact Us</a>
          </button>
        )}
      </div>
    </header>
  );
};

export default Header;
