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
        createClient(input)
    }

    return (
        <>
            <form onSubmit={e => newClientHandler(e)}>
                <div class="form-group">
                    Client Name: <input type="text" name="clientName" class="form-control" required onChange={e => setClientName(e.target.value)} />
                </div>
                <div class="form-group">
                    <label for="ownedByUser">Has owner?</label>
                    <select name="ownedByUser" id="ownedByUser" class="form-control" required onChange={e => setOwnedByUser(e.target.value)}>
                        <option selected></option>
                        <option value="true">Yes</option>
                        <option value="false">No</option>
                    </select>
                </div>
                <div class="form-group">
                    Owned By: <input type="text" name="ownedBy" class="form-control" required onChange={e => setOwnedBy(e.target.value)} />
                </div>
                <div class="form-group">
                    <label for="keyClient">Key Client?</label>
                    <select name="keyClient" id="keyClient" class="form-control" required onChange={e => setKeyClient(e.target.value)}>
                        <option selected></option>
                        <option value="true">Yes</option>
                        <option value="false">No</option>
                    </select>
                </div>
                <div class="form-group">
                    <label for="reqQuote">Requires Quote?</label>
                    <select name="reqQuote" id="reqQuote" class="form-control" required onChange={e => setReqQuote(e.target.value)}>
                        <option selected></option>
                        <option value="true">Yes</option>
                        <option value="false">No</option>
                    </select>
                </div>
                <div class="form-group">
                    <label for="reqQuoteApproval">Requires Quote Approval?</label>
                    <select name="reqQuoteApproval" class="form-control" id="reqQuoteApproval" required onChange={e => setReqQuoteApproval(e.target.value)}>
                        <option selected></option>
                        <option value="true">Yes</option>
                        <option value="false">No</option>
                    </select>
                </div>
                <div class="form-group">
                    Discount: <input type="text" class="form-control" name="standardDiscount" required onChange={e => setStandardDiscount(e.target.value)} />
                </div>
                <div class="form-group">
                    Revision Log: <input type="text" class="form-control" name="revisionLog" required onChange={e => setRevisionLog(e.target.value)} />
                </div>
                <button class="btn btn-dark" type="submit">Submit</button>
            </form>
        </>
    )
}