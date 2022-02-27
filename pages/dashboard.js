import { useState, useEffect } from "react";
import { supabase } from "../util/supabaseClient";

import { MDBIcon } from "mdb-react-ui-kit";
import { useRouter } from "next/router";

export default function Dashboard({ data }) {
  const router = useRouter();

  const deleteEntry = async (request_id) => {
    try {
      await supabase.from("requests").delete().eq("id", request_id);
    } catch (error) {
      console.log("error", error);
    }
    router.reload(window.location.pathname);
  };

  return (
    <div className="table-group">
      <table>
        <tr>
          <th>Name</th>
          <th>Alias</th>
          <th>Email</th>
          <th>Phone</th>
          <th>Notes</th>
          <th>Contract</th>
          <th>Website</th>
          <th>Art</th>
          <th>Marketing</th>
          <th>Minting Price</th>
          <th>Project Size</th>
          <th>Project Features</th>
          <th>Specific Design?</th>
          <th>Special details?</th>
          <th>Contact?</th>
        </tr>
        {data.map((request, key) => {
          //   <FullTable key={request.id} request={request} />
          return (
            <tr key={key}>
              <td>{request.name}</td>
              <td>{request.alias}</td>
              <td>{request.email}</td>
              <td>{request.phone}</td>
              <td>{request.notes}</td>
              {request.contract ? <td>Yes</td> : <td>No</td>}
              {request.website ? <td>Yes</td> : <td>No</td>}
              {request.art ? <td>Yes</td> : <td>No</td>}
              {request.marketing ? <td>Yes</td> : <td>No</td>}
              <td>{request.project_mint_price}</td>
              <td>{request.project_size}</td>
              <td>{request.features}</td>
              {request.minting_site ? <td>Yes</td> : <td>No</td>}
              <td>{request.project_specials}</td>
              {request.contact ? <td>Yes</td> : <td>No</td>}
              <td>
                <button
                  onClick={(e) => {
                    e.preventDefault();
                    deleteEntry(request.id);
                  }}
                >
                  Delete
                </button>
              </td>
            </tr>
          );
        })}
      </table>
    </div>
  );
}

export const getServerSideProps = async ({ req, params }) => {
  const { data, error } = await supabase
    .from("requests")
    .select(
      "id,name, email, phone, notes, contract, website, art, marketing, alias, project_mint_price, project_size, features, minting_site, project_specials, contact"
    );

  if (error) {
    console.log(error);
  }

  console.log(data);

  return {
    props: {
      data,
    },
  };
};
