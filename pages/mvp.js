import Head from "next/head";
import { v4 as uuid } from "uuid";

import { useRouter } from "next/router";
import { useState, useEffect } from "react";
import { supabase } from "../util/supabaseClient";

export default function Mvp() {
  const [request, setRequest] = useState({
    id: uuid(),
    name: "",
    alias: "",
    email: "",
    phone: "",
    notes: "",
    contract: false,
    website: false,
    art: false,
    marketing: false,
    project_mint_price: "",
    project_size: "",
    features: "",
    minting_site: false,
    project_specials: "",
    contact: false,
    request_sent: new Date(),
  });

  const router = useRouter();

  function setName(e) {
    const name = e.target.value;
    const newName = { ...request, name };
    setRequest(newName);
  }

  function setAlias(e) {
    const alias = e.target.value;
    const newAlias = { ...request, alias };
    setRequest(newAlias);
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

  function setArt(e) {
    const art = e.target.checked;
    const newArt = { ...request, art };
    setRequest(newArt);
  }

  function setWebsite(e) {
    const website = e.target.checked;
    const newWebsite = { ...request, website };
    setRequest(newWebsite);
  }

  function setMarketing(e) {
    const marketing = e.target.checked;
    const newMarketing = { ...request, marketing };
    setRequest(newMarketing);
  }

  function setPrice(e) {
    const project_mint_price = e.target.value;
    const newPrice = { ...request, project_mint_price };
    setRequest(newPrice);
  }

  function setSize(e) {
    const project_size = e.target.value;
    const newSize = { ...request, project_size };
    setRequest(newSize);
  }

  function setFeatures(e) {
    const features = e.target.value;
    const newFeatures = { ...request, features };
    setRequest(newFeatures);
  }

  function setDesign(e) {
    const minting_site = e.target.checked;
    const newDesign = { ...request, minting_site };
    setRequest(newDesign);
  }

  function setDetails(e) {
    const project_specials = e.target.value;
    const newDetails = { ...request, project_specials };
    setRequest(newDetails);
  }

  function setContact(e) {
    const contact = e.target.checked;
    const newContact = { ...request, contact };
    setRequest(newContact);
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

    router.push("/confirmation");
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
                type="text"
                placeholder="Social Media Alias*"
                required
                onChange={(e) => setAlias(e)}
              />
              <input
                type="email"
                placeholder="Email*"
                required
                onChange={(e) => setEmail(e)}
              />
              <input
                type="text"
                placeholder="Phone Number*"
                required
                onChange={(e) => setPhone(e)}
              />
              <label className="label-group">Tell us about your project</label>
              <textarea
                type="text"
                placeholder="How Can We Help*"
                required
                onChange={(e) => setNotes(e)}
              />
              <label className="label-group">What are you looking for?</label>
              <div className="services-group">
                <input
                  type="checkbox"
                  id="contract"
                  name="contract"
                  value="contract"
                  onChange={(e) => setContract(e)}
                />
                <label htmlFor="contract">Smart Contract</label>
                <br />
                <input
                  type="checkbox"
                  id="art-generation"
                  name="art-generation"
                  value="art-generation"
                  onChange={(e) => setArt(e)}
                />
                <label htmlFor="art-generation">Art Generation</label>
                <input
                  type="checkbox"
                  id="minting-website"
                  name="minting-website"
                  value="minting-website"
                  onChange={(e) => setWebsite(e)}
                />
                <label htmlFor="minting-website">Minting Website</label>
                <input
                  type="checkbox"
                  id="marketing"
                  name="marketing"
                  value="marketing"
                  onChange={(e) => setMarketing(e)}
                />
                <label htmlFor="marketing">Marketing</label>
              </div>
              <label className="label-group">
                Project Minting Price (in ETH)
              </label>
              <input
                type="text"
                placeholder="Price*"
                onChange={(e) => setPrice(e)}
              />
              <label className="label-group">
                Project Size (How many NFTs)
              </label>
              <input
                type="text"
                placeholder="Price*"
                onChange={(e) => setSize(e)}
              />
              <label className="label-group">Mint Features</label>
              <textarea
                type="text"
                placeholder="List of Features*"
                onChange={(e) => setFeatures(e)}
              />
              <label className="label-group">
                Do you have a specific site design for us to use?
              </label>
              <div className="services-group">
                <input
                  type="checkbox"
                  id="minting_site"
                  name="minting_site"
                  value="minting_site"
                  onChange={(e) => {
                    setDesign(e);
                  }}
                />
                <label htmlFor="yes">Yes</label>
              </div>
              <label className="label-group">
                Any special details about mint our your project?
              </label>
              <textarea
                type="text"
                placeholder="List of Details, if any..."
                onChange={(e) => setDetails(e)}
              />
              <label className="label-group">
                Can we contact you to get more details about the project if
                needed?
              </label>
              <div className="services-group">
                <input
                  type="checkbox"
                  id="contact"
                  name="contact"
                  value="contact"
                  onChange={(e) => setContact(e)}
                />
                <label htmlFor="contact">Yes</label>
                <br />
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
