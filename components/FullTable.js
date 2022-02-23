export default function FullTable({ request }) {
  return (
    <>
      <tr>{request.name}</tr>
      <tr>{request.email}</tr>
      <tr>{request.phone}</tr>
      <tr>{request.notes}</tr>
      {request.contract ? <tr>Yes</tr> : <tr>No</tr>}
      {request.website ? <tr>Yes</tr> : <tr>No</tr>}
      {request.art ? <tr>Yes</tr> : <tr>No</tr>}
      {request.marketing ? <tr>Yes</tr> : <tr>No</tr>}
    </>
  );
}
