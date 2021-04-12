import "./App.css";
import { useSelector, useDispatch } from "react-redux";

function App() {
  const dispatch = useDispatch();
  const accessDonorsReducerState = useSelector((state) => state.donorsReducer);

  return (
    <div className="App">
      <div className="control-panel">
        <div className="sorting-bar-container">
          Order by:
          <select
            onChange={(e) => {
              if (e.target.value === "Recent") {
                dispatch({ type: "FILTER1" });
              } else if (e.target.value == "ZA") {
                dispatch({ type: "FILTER2" });
                console.log(e.target.value);
              }
            }}
          >
            <option value="Select">Select</option>
            <option value="Recent">Most Recent</option>
            <option value="ZA">From Z to A</option>
          </select>
        </div>
        <div className="search-bar-container"></div>
        <input type="search" className="search-bar" placeholder="Search..." />
      </div>

      <div className="donors-container">
        {accessDonorsReducerState.map((passing) => {
          return (
            <ul>
              <li className="single-donor-container">
                <div className="name-and-amount-container">
                  <div className="donor-amount">{passing.amount}</div>
                  <div className="donor-name">{passing.name}</div>
                </div>
                <div className="donated-trough-container"></div>
              </li>
            </ul>
          );
        })}
      </div>
    </div>
  );
}

export default App;
