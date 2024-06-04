//usehook
import React, { useState } from "react";

function Usehookk() {
    const [click, setclick] = useState(0);
    return ( <
        div > < p > Fruits < /p> <
        p > < h3 > Apple < /h3></p > <
        button onClick = {
            () => setclick(click + 1)
        } > CLICK < /button> <
        p > < b > { click } < /b></p >

        <
        /div>
    )
}
export default Usehookk;