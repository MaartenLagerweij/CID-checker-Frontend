// @ts-nocheck

const devBaseURL = 'http://localhost:5001/cid-checker-362410/europe-west1/cidChecker/info/';
const prodBaseURL = 'https://europe-west1-cid-checker-362410.cloudfunctions.net/cidChecker/info/';

const devBaseURL2 = 'http://localhost:5001/cid-checker-backend2/europe-west1/cidChecker/info';

export async function postFunction(urlsToPost){
    return await fetch(devBaseURL, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            urls: urlsToPost
        })
    })
}

export async function getFunction(){
    return await fetch(devBaseURL).then(data => data.json());
}