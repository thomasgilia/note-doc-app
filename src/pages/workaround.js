import React, { useEffect, useState } from "react"
import { navigate } from "gatsby"

export default function Home({ location }) {
    // console.log("hitting workaround")
    // console.log(location)
    const [stateData, setStateData] = useState(null);
    useEffect(() => {
        if ((location.state !== null) && (location.state !== undefined)) {
            // console.log(location)
            return setStateData(location.state.stateData)
        } else {
            console.log("error in setting stateData")
        }
    }, [])

    return (
        <>
            {stateData !== null &&
                navigate("/viewNote", {
                    state: { stateData },
                })
            }
        </>
    )
}