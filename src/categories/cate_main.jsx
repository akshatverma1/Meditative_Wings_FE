import React from 'react';
import { useState,useEffect } from 'react';
export default function cate_main(){
    let url = "http://localhost:3000/allcategories";
    const [data, setData] = useState([]);

    useEffect(() => {
        const apiCalling = async () => {
            try {
                const response = await fetch(url);
                const apidata = await response.json();
                setData(apidata);
                console.log(apidata);
            } catch (error) {
                console.error("Error fetching data:", error);
            }
        };
        apiCalling();
    }, []);
   
    return (
        <div>
            {data.map((item)=>{
                return(
                    <div>
                        <h1>{item.videoTitle}</h1>
                        {/* <p>{item.category_description}</p> */}

                    </div>
                )
            })}
        </div>
    );
}