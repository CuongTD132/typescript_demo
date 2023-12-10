type StatusProps = {
  status: "loading" | "success" | "error";
};
export const Status = (props: StatusProps) => {
  let msg;
  if (props.status === "loading") {
    msg = "Loading...";
  } else if (props.status === "success") {
    msg = "Data fetched successfully!";
  } else if (props.status === "error") {
    msg = "Error fetching data";
  }
  return <div>Status - {msg}</div>;
};
