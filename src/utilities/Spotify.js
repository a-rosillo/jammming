const clientId = '98602489f35a4fe69ec8a7f8c0c678ca'
const redirectUri = 'http://localhost:3000'
let accessToken = null


function getAccessToken () {
    if(accessToken){
        return accessToken
    }
    const returnedUrl = authorize()
    const hashParams = getHashParams(returnedUrl)
    accessToken = hashParams.accesstoken
    return accessToken
    }

function authorize () {
    let url = 'https://accounts.spotify.com/authorize';
    url += '?response_type=token';
    url += '&client_id=' + encodeURIComponent(clientId);
    url += '&redirect_uri=' + encodeURIComponent(redirectUri);
    url += '&scope=playlist-modify-public'
    window.location = url
    return window.location.href
}

function getHashParams (url){
    const hashFragmentIndex = url.indexOf('#')
    const hashFragment = url.slice(hashFragmentIndex)
    let currentAmpersandIndex = hashFragment.indexOf('&')
    const ampersandIndicies =[]
    while (currentAmpersandIndex !== -1){
        ampersandIndicies.push(currentAmpersandIndex)
        currentAmpersandIndex = hashFragment.indexOf('&', currentAmpersandIndex + 1)
    }
    const keyValuePairs = getKeyValuePairs(hashFragment, ampersandIndicies)
    const hashParams = createObjectFromArrayOfPairs(keyValuePairs)
    return hashParams
}

function getKeyValuePairs (string, indicies){
    const pairs = []
    let start = null
    let end = null
    for (let index = 0; index < indicies.length + 1; index++) {
        if(index === 0){
            start = 0
        } else {
            start = indicies[index - 1]
        }
        if(index === indicies.length){
            end = undefined
        } else {
            end = indicies[index]
        }
        pairs.push(string.slice(start + 1, end)) //the +1 is to remove the # or & from the key
    }
    return pairs
}

function createObjectFromArrayOfPairs (arrayOfPairs) {
    let equalsIndex = null
    let key = ''
    let value = ''
    const params = {}
    arrayOfPairs.forEach((keyValuePair) => {
        equalsIndex = keyValuePair.indexOf('=')
        key = keyValuePair.slice(0,equalsIndex)
        value = keyValuePair.slice(equalsIndex + 1)
        params[key.replace("_", "")] = value
    })
    return params
}

async function searchSpotify(text) {
    const endpoint = 'https://api.spotify.com/v1/search'
    const type = ['track']
    const accessToken = getAccessToken()
    const response = await fetch(`${endpoint}?q=${text}&type=${type}`,{
        method: 'GET',
        headers: {
            'Authorization': `Bearer ${accessToken}`
        },
    })
    const jsonData = await response.json()
    const tracks = jsonData.tracks.items

    const formattedTracks = tracks.map(track => {
        const trackImportantInfo = {
            artist: track.artists[0].name,
            trackName: track.name,
            album: track.album.name,
            uri: track.uri
        }
        return trackImportantInfo
    })
    return formattedTracks
}

//getHashParams('http://localhost:3000/#access_token=BQDS_L2yLz-f_7C6fcsOs1yQuyu7n665L69mdp3kNNBUnw6e4XPZO5kRck__dkVR8QCb_ZTrnoIBVln-TYfHCRjvMYaKfQ4TVBSWxb33vOx9OGyyYdy7oOT_gFjXzCarhzeWxcuI45jjfBI5Hbpqr0MAVpRyhUs2GjFXnFFoDiDEN-2Vb44jBNCRzTk9hhTfrwL71Fgvbhgh&token_type=Bearer&expires_in=3600')

export { getAccessToken, searchSpotify }