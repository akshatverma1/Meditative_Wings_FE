import React from 'react';

import { useParams,useNavigate } from 'react-router-dom';

export default function ttte(){
    const { id } = useParams();
    return (
        <div>   
            <h1>{id}</h1>
        </div>
    );
}