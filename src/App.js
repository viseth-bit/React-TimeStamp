import { useState } from "react";
import "./App.css";
function TimeStamp() {
  const [timestampInteger, setTimestampInteger] = useState(
    new Date().valueOf()
  );

  return (
    <div className="App-header">
      <div className="col-lg-5">
        <h3>Convert TimeStamp</h3>
        <input
          style={{ padding: "30px" }}
          className="form-control"
          onChange={(e) => {
            setTimestampInteger(e.target.value);
          }}
          type="number"
        />
      </div>

      {timestampInteger > 0 && (
        <div style={{paddingLeft:10}}>
          <h1>
            {timestampInteger}
            <span style={{ fontSize: 30, marginLeft: 35 }}>
              {"  Seconds from 1970"}
            </span>
          </h1>
          <h3>{new Date(Number(timestampInteger)).toString()}</h3>
        </div>
      )}
    </div>
  );
}

export default TimeStamp;
