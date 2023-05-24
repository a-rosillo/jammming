const clientId = '98602489f35a4fe69ec8a7f8c0c678ca'
const redirectUri = 'http://localhost:3000';
let accessToken;


function getAccessToken () {
    if(accessToken){
        return accessToken
    }
    let url = 'https://accounts.spotify.com/authorize';
    url += '?response_type=token';
    url += '&client_id=' + encodeURIComponent(clientId);
    url += '&redirect_uri=' + encodeURIComponent(redirectUri);
    url += '&scope=playlist-modify-public'
    window.location = url
    const returnedURL = window.location.href
    const hashFragmentIndex = returnedURL.indexOf('#')
    const hashFragment = returnedURL.slice(hashFragmentIndex + 1)
    alert(hashFragment)
    const accessTokenIndex = hashFragment.indexOf('&')
    alert(accessTokenIndex)
    accessToken = hashFragment.slice(0, accessTokenIndex)
    alert(accessToken)
    }

async function searchSpotify(text) {
    // const endpoint = 'https://api.spotify.com/v1/search'
    // const type = ['track']
    // const accessToken = await getAccessToken()
    // const response = await fetch(`${endpoint}?q=${text}&type=${type}`,{
    //     method: 'GET',
    //     headers: {
    //         'Authorization': `Bearer ${accessToken}`
    //     },
    // })
    // const jsonData = await response.json()
    // const tracks = jsonData.tracks.items

    // const formattedTracks = tracks.map(track => {
    //     const trackImportantInfo = {
    //         artist: track.artists[0].name,
    //         trackName: track.name,
    //         album: track.album.name,
    //         uri: track.uri
    //     }
    //     return trackImportantInfo
    // })
    // return formattedTracks
}


export { getAccessToken, searchSpotify }