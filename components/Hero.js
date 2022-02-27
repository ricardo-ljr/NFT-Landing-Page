import Image from "next/image";
import Link from "next/link";
import data from "../data/heroSection.json";

const Hero = () => {
  return (
    <section className="hero-section">
      <div className="container-hero">
        <div className="content-hero">
          <div className="left-side">
            <h1>{data.title}</h1>
            <p>{data.description}</p>
            <form>
              <div className="form-group">
                <Link href="/mvp">
                  <button>For Individuals</button>
                </Link>
                <Link href="/mvp">
                  <button>For Businesses</button>
                </Link>
              </div>
            </form>
          </div>

          {/* TODO: Substitute for better hero image */}
          <div className="right-side">
            <Image src="/hero.png" layout="fill" alt="hero" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
