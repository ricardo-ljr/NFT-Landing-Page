import { useState, useEffect } from "react";
import { supabase } from "../util/supabaseClient";

import FullTable from "../components/FullTable";

export default function Dashboard({ data }) {
  return (
    <div className="table-group">
      <table>
        <tr>
          <th>Name</th>
          <th>Email</th>
          <th>Phone</th>
          <th>Notes</th>
          <th>Contract</th>
          <th>Website</th>
          <th>Art</th>
          <th>Marketing</th>
        </tr>
        {data.map((request, key) => {
          //   <FullTable key={request.id} request={request} />
          return (
            <tr key={key}>
              <td>{request.name}</td>
              <td>{request.email}</td>
              <td>{request.phone}</td>
              <td>{request.notes}</td>
              {request.contract ? <td>Yes</td> : <td>No</td>}
              {request.website ? <td>Yes</td> : <td>No</td>}
              {request.art ? <td>Yes</td> : <td>No</td>}
              {request.marketing ? <td>Yes</td> : <td>No</td>}
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
    .select("id,name, email, phone, notes, contract, website, art, marketing");

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
