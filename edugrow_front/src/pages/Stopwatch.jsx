import "../styles/Stopwatch.css";

function Stopwatch() {
  return (
    <div className="wrapper">
      <header>
        <h1>StopWatch</h1>
        <div className="line"></div>
      </header>
      <body>
        <div className="time">
          <div id="outline"></div>
        </div>
        <div>
          <button id="start"></button>
          <button id="pause"></button>
          <button id="stop"></button>
        </div>
      </body>
    </div>
  );
}

export default Stopwatch;
