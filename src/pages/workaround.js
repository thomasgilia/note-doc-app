import React, { useEffect, useState } from "react"
import { navigate } from "gatsby"

export default function Home({ location }) {
    const [stateData, setStateData] = useState(null);
    useEffect(() => {
        if ((location.state !== null) && (location.state !== undefined)) {
            return setStateData(location.state.stateData)
        } else {
            console.log("stateData not available")
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