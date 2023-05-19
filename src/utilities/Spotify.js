const clientId = '98602489f35a4fe69ec8a7f8c0c678ca'
const clientSecret = '' // enter client secret


async function getAccessToken () {
    const url = 'https://accounts.spotify.com/api/token'
    const response = await fetch(url, {
        method: "POST",
        headers: {
            "Content-Type": "application/x-www-form-urlencoded",
        },
        body: `grant_type=client_credentials&client_id=${clientId}&client_secret=${clientSecret}`
    })
    const jsonData = await response.json()
    console.log(jsonData)
    return jsonData.access_token
}

async function search(text) {
    const endpoint = 'https://api.spotify.com/v1/search'
    const type = ['track']
    const accessToken = await getAccessToken()
    const response = await fetch(`${endpoint}?q=${text}&type=${type}`,{
        method: 'GET',
        headers: {
            'Authorization': `Bearer ${accessToken}`
        },
    })
    const jsonData = await response.json()
    const array = jsonData.tracks.items
    console.log(array.map(element => element.artists[0].name))
}

search('brianstorm')