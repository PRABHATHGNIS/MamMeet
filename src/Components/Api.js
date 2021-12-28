import React from "react";
import axios from "axios";
import { Button } from "@mui/material";

/* 
const Api = () => {
    return (
        <div>
            {console.log("rendered")}
            <h2>use this api</h2>
        </div>
    )
}

export default Api;
 */

/*  
function ApiRequest(props){
    function handleClick(){
console.log("THIS IS API CALLING AXIOS")
axios.get('http://wink-rest-microservice.nssplindia.com/search-users/kZOaTSUZREaBNzDCW4kGIw-23/19.1698/73.073').then((res)=>{ console.log(res)
console.log(res.data)}).catch((error)=>{console.log(error )})
}


 }

 export default ApiRequest(); */




// const Api = () => {
//     return (
//         <div>
//             <h2>"prabnht"</h2>
//             axios.get('http://wink-rest-microservice.nssplindia.com/search-users/kZOaTSUZREaBNzDCW4kGIw-23/19.1698/73.073').then()     </div>
//     )
// }

// export default Api;

function Api() {
    const onType = async (e) => {
        const search = e.target.value

        const result = await axios.get('http://wink-rest-microservice.nssplindia.com/search-users/kZOaTSUZREaBNzDCW4kGIw-23/19.1698/73.073')
        console.table(result.data[0].firstName)
        console.table(result.data[2].lastName)
        // document.getElementById("root").innerText= result.data
        

        
    }
    return (
        <div >

            <input type="text" onChange={onType} />
        <Button variant="contained" onClick={onType}>submit</Button>
        </div>
    )
}

export default Api;