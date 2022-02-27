import Link from "next/link";

export default function Confirmation() {
  return (
    <div className="confirmation-page">
      <h1>
        Thank you for requesting a quote! We'll get back to you within the next
        48 hours with a proposal
      </h1>
      <Link href="/">
        <button>GO BACK TO HOMEPAGE</button>
      </Link>
    </div>
  );
}
