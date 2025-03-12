import React from 'react';

export default function Date_Form() {
    return (
        <>
            <form action="https://meditative-wings-backend-seven.vercel.app/newRequest" method='post'>



                <input style={{ color: "black" }} name="videoTitle" id="videoTitle" placeholder="videoTitle" type='text' />
                <br></br>
                <input style={{ color: "black" }} name="videoDesp" id="videoDesp" placeholder="videoDesp" text="text" />
                <br></br>
                <input style={{ color: "black" }} name="thumbnailLink" id="thumbnailLink" placeholder="thumbnailLink" text="text" />
                <br></br>
                <input style={{ color: "black" }} name="youtubeLink" id="youtubeLink" placeholder="youtubeLink" text="text" />
                <br></br>
                {/* <input style={{ color: "black" }} name="category" id="category" placeholder="category" text="text" /> */}
                <br></br>
                <select name="category" style={{color:"black"}} id="fruits">
                    <option value="Meditative Knowledge">Meditative Knowledge</option>
                    <option value="Meditative Thoughts">Meditative Thoughts</option>
                    <option value="Meditative Movie">Meditative Movie</option>
                    <option value="Meditative Writings">Meditative Writings</option>
                    <option value="Life Understanding">Life Understanding</option>
                    <option value="Meditative Shayari">Meditative Shayari</option>
                    <option value=">Meditative Shayari Movie">Meditative Shayari Movie</option>
                    <option value="Meditative Shayari Writings">Meditative Shayari Writings</option>
                </select>
                <button>Submit</button>
            </form>
        </>
    )
}