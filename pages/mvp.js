import Head from "next/head";

export default function mvp() {
  return (
    <div>
      <Head>
        <title>THINMINT | Landing Page</title>
        <link rel="icon" href="../public/CompanyLogo.png" />
      </Head>

      <div className="questionaire">
        <div className="header-footer">
          <h3>Request a Quote</h3>
        </div>

        <form>
          <div className="form-group">
            <form className="form-group" autoComplete="off">
              <label className="label-group">Tell us about yourself</label>
              <input
                type="text"
                placeholder="Full Name*"
                required
                onChange={(e) => setName(e.target.value)}
              />
              <input
                type="text"
                placeholder="Email*"
                required
                onChange={(e) => setName(e.target.value)}
              />
              <input
                type="email"
                placeholder="Phone Number"
                required
                onChange={(e) => setEmail(e.target.value)}
              />
              <label className="label-group">Tell us about your project</label>
              <textarea
                type="text"
                placeholder="How Can We Help*"
                require
                onChange={(e) => setNotes(e.target.value)}
              />
              <label className="label-group">What are you looking for?</label>
              <div className="services-group">
                <input
                  type="checkbox"
                  id="service1"
                  name="service1"
                  value="contract"
                />
                <label for="vehicle1">Smart Contract</label>
                <br />
                <input
                  type="checkbox"
                  id="service2"
                  name="service2"
                  value="art"
                />
                <label for="vehicle1">Art Generation</label>
                <input
                  type="checkbox"
                  id="service2"
                  name="service2"
                  value="art"
                />
                <label for="vehicle1">Minting Website</label>
                <input
                  type="checkbox"
                  id="service2"
                  name="service2"
                  value="art"
                />
                <label for="vehicle1">Marketing</label>
              </div>
              <button type="submit">Submit</button>
            </form>
          </div>
        </form>
      </div>
    </div>
  );
}
