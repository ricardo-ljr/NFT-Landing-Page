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
                <button type="submit">
                  <Link href="/mvp">For Individuals</Link>
                </button>
                <button type="submit">
                  <Link href="/mvp">For Businesses</Link>
                </button>
              </div>
            </form>
          </div>

          {/* TODO: Substitute for better hero image */}
          <div className="right-side">
            <Image src="/hero.png" layout="fill" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
