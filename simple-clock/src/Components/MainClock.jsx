function MainClock() {
  const time = new Date();
  //   let day = time.getDay();
  //   let month = time.getMonth();
  //   let year = time.getFullYear();
  //   let hour = time.getUTCHours();
  //   let minute = time.getUTCMinutes();
  //   let second = time.getUTCSeconds();
  return (
    <center>
      <h4>
        This is the current Time:{time.toLocaleDateString()}-
        {time.toLocaleTimeString()}
        {/* {day}/{month}/{year} - {hour}:{minute}:{second} */}
      </h4>
    </center>
  );
}
export default MainClock;
