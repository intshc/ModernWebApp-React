import "./App.css";
import React, { useState } from "react";

function App() {
  const [temp, setTemp] = useState("");
  const [desc, setDesc] = useState("");
  const [icon, setIcon] = useState("");
  const [isReady, setReady] = useState("");

  const apikey= process.env.WEATHER_APIKEY;
  React.useEffect(()=>{
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=Seoul&APPID=${apikey}&units=metric`)
    .then(result => result.json())
    .then(jsonresult =>{
      setTemp(jsonresult.main.temp);
      setDesc(jsonresult.weather[0].main);
      setIcon(jsonresult.weather[0].icon);
      setReady(true);
    })
    .catch(err => console.error(err))
  }, [])

  if(isReady){
    return (
      <div className="App">
          <p>온도: {temp}</p>
          <p>상태: {desc}</p>
          <img src={`https://openweathermap.org/img/wn/${icon}@2x.png`}
            alt="Weather icon"></img>
      </div>
    );
  }
  else{
    return(
      <div>Loading...</div>
    )
  }
}

export default App;
