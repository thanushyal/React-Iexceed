import React from "react";

function Map1() {
    const subjects = ["java", "JS", "python", "c"];
    const up_sub = subjects.map(sub_s => < h5 > { sub_s.toUpperCase() } < /h5>)
            const sub_dtls = [{
                    sub_no: 2001,
                    sub_name: "java",
                    sem: 1
                },
                {
                    sub_no: 2011,
                    sub_name: "c",
                    sem: 3
                }
            ];
            const sub1 = sub_dtls.map(sub_D => < h4 > { sub1.sub_no } { sub1.sub_name } { sub1.sem } < /h4>)
                return ( <
                    >
                    { up_sub } { sub1 } <
                    />
                );
            }
            export default Map1;