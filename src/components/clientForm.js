import React, { useState } from "react"
import { createClient } from "../../backendHookup"

export default function ClientForm() {

    const [clientName, setClientName] = useState(null)
    const [ownedByUser, setOwnedByUser] = useState(null)
    const [ownedBy, setOwnedBy] = useState(null)
    const [keyClient, setKeyClient] = useState(null)
    const [reqQuote, setReqQuote] = useState(null)
    const [reqQuoteApproval, setReqQuoteApproval] = useState(null)
    const [standardDiscount, setStandardDiscount] = useState(null)
    const [revisionLog, setRevisionLog] = useState(null)

    const newClientHandler = async e => {
        e.preventDefault()

        let input = {
            clientName: clientName,
            ownedByUser: ownedByUser === "true",
            ownedBy: ownedBy,
            keyClient: keyClient === "true", //check for boolean
            reqQuote: reqQuote === "true",
            reqQuoteApproval: reqQuoteApproval === "true",
            standardDiscount: standardDiscount,
            revisionLog: revisionLog
        }

        // setVisitor("")       //resetting values after form sent
        // setMessage("")
        createClient(input)
    }

    return (
        <>
        <br></br>
            <form onSubmit={e => newClientHandler(e)}>
                Client Name: <input type="text" name="clientName" required onChange={e => setClientName(e.target.value)} />
                <br></br>
                <div>
                    <label for="ownedByUser">Has owner?</label>
                    <select name="ownedByUser" id="ownedByUser" required onChange={e => setOwnedByUser(e.target.value)}>
                        <option selected></option>
                        <option value="true">Yes</option>
                        <option value="false">No</option>
                    </select>
                    <br>
                    </br>
                    Owned By: <input type="text" name="ownedBy" required onChange={e => setOwnedBy(e.target.value)} />
                    <br>
                    </br>
                    <label for="keyClient">Key Client?</label>
                    <select name="keyClient" id="keyClient" required onChange={e => setKeyClient(e.target.value)}>
                        <option selected></option>
                        <option value="true">Yes</option>
                        <option value="false">No</option>
                    </select>
                    <br>
                    </br>
                    <label for="reqQuote">Requires Quote?</label>
                    <select name="reqQuote" id="reqQuote" required onChange={e => setReqQuote(e.target.value)}>
                        <option selected></option>
                        <option value="true">Yes</option>
                        <option value="false">No</option>
                    </select>
                    <br>
                    </br>
                    <label for="reqQuoteApproval">Requires Quote Approval?</label>
                    <select name="reqQuoteApproval" id="reqQuoteApproval" required onChange={e => setReqQuoteApproval(e.target.value)}>
                        <option selected></option>
                        <option value="true">Yes</option>
                        <option value="false">No</option>
                    </select>
                    Discount: <input type="text" name="standardDiscount" required onChange={e => setStandardDiscount(e.target.value)} />
                    <br></br>
                 Revision Log: <input type="text" name="revisionLog" required onChange={e => setRevisionLog(e.target.value)} />
                    <br></br>
                    <br></br>
                    <button class="btn btn-dark" type="submit">Submit</button>
                </div>
            </form>
        </>
    )
}