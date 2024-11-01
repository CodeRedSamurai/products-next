export default function AddSnack({ cardDetailsList, setCardDetails }) {
  let newSnack = {};
  function snackInputChange(event, key) {
    newSnack[key] = event.target.value;
  }
  return (
    <>
      {Object.keys(cardDetailsList?.[0] || {}).map((key, index) => {
        return (
          <div
            key={index}
            style={{
              display: "flex",
              flexDirection: "column",
              border: "1px solid white",
              gap: "10px",
              padding: "5px",
              backgroundColor: "teal",
              color: "lime",
              width: "30%",
              margin: "10px",
            }}
          >
            <label htmlFor={index}>{key.toUpperCase()}</label>
            <input onInput={(e) => snackInputChange(e, key)} id={index} />
          </div>
        );
      })}
      <button
        style={{
          padding: "10px",
          border: ".5px solid pink",
          margin: "10px",
          backgroundColor: "cyan",
        }}
        onClick={() => {
          fetch("./api/dashboard", {
            method: "POST",
            headers: {
              Accept: "application/json",
              "Content-Type": "application/json",
            },
            body: JSON.stringify(newSnack),
          });
          setCardDetails([...cardDetailsList, newSnack]);
        }}
      >
        Add
      </button>
    </>
  );
}
