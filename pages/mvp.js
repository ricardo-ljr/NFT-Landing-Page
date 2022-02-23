import Head from "next/head";
import { v4 as uuid } from "uuid";

import { useState, useEffect } from "react";
import { supabase } from "../pages/util/supabaseClient";

export default function mvp() {
  const [request, setRequest] = useState({
    id: uuid(),
    name: "",
    email: "",
    phone: "",
    notes: "",
    contract: false,
    website: false,
    art: false,
    marketing: false,
    request_sent: new Date(),
  });

  function setName(e) {
    const name = e.target.value;
    const newName = { ...request, name };
    setRequest(newName);
  }

  function setEmail(e) {
    const email = e.target.value;
    const newEmail = { ...request, email };
    setRequest(newEmail);
  }

  function setPhone(e) {
    const phone = e.target.value;
    const newPhone = { ...request, phone };
    setRequest(newPhone);
  }

  function setNotes(e) {
    const notes = e.target.value;
    const newNotes = { ...request, notes };
    setRequest(newNotes);
  }

  function setContract(e) {
    const contract = e.target.checked;
    const newContract = { ...request, contract };
    setRequest(newContract);
  }

  async function handleSubmit() {
    const { error } = await supabase.from("requests").insert([request]);
    console.log(request);
    console.log("Submitted");

    if (error) {
      alert("Insertion failed");
      console.error(error.message);
      return;
    }

    alert("Request submitted successfully!");
  }

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
                onChange={(e) => setName(e)}
              />
              <input
                type="email"
                placeholder="Email*"
                required
                onChange={(e) => setEmail(e)}
              />
              <input
                type="text"
                placeholder="Phone Number"
                required
                onChange={(e) => setPhone(e)}
              />
              <label className="label-group">Tell us about your project</label>
              <textarea
                type="text"
                placeholder="How Can We Help*"
                require
                onChange={(e) => setNotes(e)}
              />
              <label className="label-group">What are you looking for?</label>
              <div className="services-group">
                <input
                  type="checkbox"
                  id="contract"
                  name="contract"
                  value="contract"
                  onChange={(e) => setNotes(e)}
                />
                <label htmlFor="contract">Smart Contract</label>
                <br />
                <input
                  type="checkbox"
                  id="art-generation"
                  name="art-generation"
                  value="art-generation"
                  onChange={(e) => setContract(e)}
                />
                <label htmlFor="art-generation">Art Generation</label>
                <input
                  type="checkbox"
                  id="minting-website"
                  name="minting-website"
                  value="minting-website"
                />
                <label htmlFor="minting-website">Minting Website</label>
                <input
                  type="checkbox"
                  id="marketing"
                  name="marketing"
                  value="marketing"
                />
                <label htmlFor="marketing">Marketing</label>
              </div>
              <button
                type="submit"
                onClick={(e) => {
                  e.preventDefault();
                  handleSubmit();
                }}
              >
                Submit
              </button>
            </form>
          </div>
        </form>
      </div>
    </div>
  );
}
