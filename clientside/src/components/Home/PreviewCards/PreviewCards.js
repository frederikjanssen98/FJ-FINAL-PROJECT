import React, {useState, useEffect} from 'react'
import {FaChevronCircleRight} from "react-icons/fa";
import './PreviewCards.css'

function PreviewCards() {
    const [items, setItems] = useState([]);

    useEffect(() => {
        fetch('http://localhost:3002/locations')
            .then(response => response.json())
            .then(json => {setItems(json) })
    }, [])

    console.log("TEST", items);
  return (
      <>
      {
            items.map(item => {
                return(
                    <div className='previewcard'>
                        <div className='previewimage'>
                            <img src={item.img}></img>
                        </div>
                        <div className='previewinfos'>
                            <ul className='previewname'>
                                <li>{item.city}</li>
                                <li>|</li>
                                <li>{item.country}</li>
                            </ul>
                            <ul className='previewperiod'>
                                <li>{item.from}</li>
                                <li>-</li>
                                <li>{item.to}</li>
                            </ul>
                            <p>{item.description}</p>
                            <div className='previewauthor'>
                                <img src="https://media-exp1.licdn.com/dms/image/C5603AQHtrFdeSucsCA/profile-displayphoto-shrink_200_200/0/1655216804464?e=1661385600&v=beta&t=fD_hqKf75KsU9EIBbGXsrPdeqJqDq39sy79Q7FbPVqg"></img>
                                <span>By Frederik Janssen</span>
                                <FaChevronCircleRight/>
                            </div>
                        </div>
                    </div>
                )
            })
        }
        </>
  )};

export default PreviewCards