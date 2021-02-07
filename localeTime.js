function localeTime() {
  const element = (
    <center>
      <div>
        <h1>Hello User 😎</h1>
        <h2> locale time {new Date().toLocaleTimeString()}.</h2>
      </div>
    </center>
  );
  ReactDOM.render(element, document.getElementById("root"));
}

setInterval(localeTime, 1000);
