import { initializeApp, cert } from "firebase-admin"
import { getAuth } from "firebase-admin/auth"
import { service_account.js } from "../service_account.js"


export function getSecrets (req, res) {
    if(!req.headers || auth.headers.authorization) {
        res.status(403).send({ messgae: 'forbidden'})
        retrun 
    }
    res.send({ messgae: "baby eagle sits at night"})
}