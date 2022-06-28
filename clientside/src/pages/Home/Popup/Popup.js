import React, {useState} from 'react'
import {FaRegWindowClose} from "react-icons/fa";
import './Popup.css'

function Popup(params) {
  const showHideClassName = params.active ? "popup active" : "popup hide";

  const [city, setCity] = useState("");
  const [country, setCountry] = useState("");
  const [description, setDescription] = useState("");
  const [img, setImg] = useState("");
  const [from, setFrom] = useState("");
  const [to, setTo] = useState("");
  const [lat, setLat] = useState("");
  const [lng, setLng] = useState("");

  const location = {
    city: city,
    country: country,
    description: description,
    img: img,
    from: from,
    to: to,
    lat: lat,
    lng: lng
  }

  const transferLocationsToBackend = () => {
    fetch("http://localhost:3002/locations", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "Accept": "application/json"
    },
    body: JSON.stringify(location)
  })
  }
  
  return (
    <div className={showHideClassName}>
        <div className='popupinner'>
          <FaRegWindowClose className='popupclosebutton' onClick={params.function}/>
          <form>
            <div>
              <label for="city">City</label>
              <input type="text" id="city" name="city" onChange={(e) => setCity(e.target.value)}></input>
            </div>
            <div>
              <label for="country">Country</label>
              <input type="text" id="country" name="country" onChange={(e) => setCountry(e.target.value)}></input>
            </div>
            <div>
              <label for="description">Description</label>
              <input type="text" id="description" name="description" onChange={(e) => setDescription(e.target.value)}></input>
            </div>
            <div>
              <label for="imgsrc">Img src</label>
              <input type="text" id="imgsrc" name="imgsrc" onChange={(e) => setImg(e.target.value)}></input>
            </div>
            <div>
              <label for="from">From</label>
              <input type="text" id="from" name="from" onChange={(e) => setFrom(e.target.value)}></input>
            </div>
            <div>
              <label for="to">To</label>
              <input type="text" id="to" name="to" onChange={(e) => setTo(e.target.value)}></input>
            </div>
            <div>
              <label for="to">Latitude</label>
              <input type="text" id="to" name="to" onChange={(e) => setLat(Number(e.target.value))}></input>
            </div>
            <div>
              <label for="to">Longitude</label>
              <input type="text" id="to" name="to" onChange={(e) => setLng(Number(e.target.value))}></input>
            </div>
            <div>
              <label></label>
              <input type="submit" onClick={transferLocationsToBackend}></input>
            </div>
          </form>
        </div>
    </div>
  )
}

export default Popup