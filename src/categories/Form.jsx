import React from 'react';

export default function Date_Form() {
    return (
        <>
            <form action="http://localhost:3000/newRequest" method='post'>



                <input name="videoTitle" id="videoTitle" placeholder="videoTitle" type='text' />
                <br></br>
                <input name="videoDesp" id="videoDesp" placeholder="videoDesp" text="text"/>
                <br></br>
                <input name="thumbnailLink" id="thumbnailLink" placeholder="thumbnailLink" text="text" />
                <br></br>
                <input name="youtubeLink" id="youtubeLink" placeholder="youtubeLink" text="text"/>
                <br></br>
                <input name="category" id="category" placeholder="category" text="text"/>
                <br></br>
                <button>Submit</button>
            </form>
        </>
    )
}