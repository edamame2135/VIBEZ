function resolveFailure() {
    return "error";
}

// given a song uri, get audio analysis
function getAudiodata(id, access_token) {
    return $.ajax({
        url: 'https://api.spotify.com/v1/audio-features/' + id,
        method: "GET",
        headers: {
            'Authorization': 'Bearer ' + access_token,
        }
    })
        .then(data => data)
        .catch(resolveFailure);
}
// given an artist id, get their top tracks
function toptracks(id, access_token) {
    return $.ajax({
        url: 'https://api.spotify.com/v1/artists/' + id + '/top-tracks?market=US',
        method: "GET",
        headers: {
            'Authorization': 'Bearer ' + access_token,
            'Content-Type': 'application/json'
        }
    });
}

document.getElementById("recom").addEventListener("click", async function (event) {
    event.preventDefault();
    /**
     * Obtains parameters from the hash of the URL
     * @return Object
     */
    function getHashParams() {
        var hashParams = {};
        var e, r = /([^&;=]+)=?([^&;]*)/g,
            q = window.location.hash.substring(1);
        while (e = r.exec(q)) {
            hashParams[e[1]] = decodeURIComponent(e[2]);
        }
        return hashParams;
    }
    var params = getHashParams();

    var access_token = params.access_token,
        refresh_token = params.refresh_token,
        error = params.error,
        items = params.items,
        total = params.total;
    id = params.id;
    console.log(access_token);
    var userID;

    var playlistName;

    // name playlist based on the mood
    if (joy == 1) {
        playlistName = "VIBEZHappy";
    }
    else {
        playlistName = "VIBEZSad";
    }

    if (error) {
        alert('There was an error during the authentication');
    } else {
        if (access_token) {
            $.ajax({
                url: 'https://api.spotify.com/v1/me',
                headers: {
                    'Authorization': 'Bearer ' + access_token
                },
                success: function (response) {
                    userID = response.id;
                    $.ajax({
                        // create playlist
                        url: 'https://api.spotify.com/v1/users/' + userID + '/playlists',
                        method: "POST",
                        data: JSON.stringify({
                            name: playlistName,
                            public: "false"
                        }),
                        headers: {
                            'Authorization': 'Bearer ' + access_token,
                            'Content-Type': 'application/json'
                        },
                        // get top artists from user
                        success: function (response) {
                            playlistid = response["id"];
                            console.log(playlistid);
                            $.ajax({
                                url: 'https://api.spotify.com/v1/me/top/artists?limit=9&offset=0&time_range=medium_term',
                                method: "GET",
                                headers: {
                                    'Authorization': 'Bearer ' + access_token,
                                    'Content-Type': 'application/json'
                                },
                                
                                success: function (response) {
                                    var artistIDs = [];
                                    var artists = JSON.parse(JSON.stringify(response))["items"];
                                    artists.forEach(function (artist) {
                                        artistIDs.push(artist["id"]);
                                    });
                                    
                                    // get the ids from top 10 songs from each top artist
                                    trackmap = artistIDs.map(function (x) { return toptracks(x, access_token) });
                                    $.when.apply($, trackmap).then(function () {
                                       
                                        var songIDs = [];
                                        var trackarr = [];
                                        console.log(arguments);
                                        $.each(arguments, function (i, val) {
                                            trackarr.push(JSON.parse(JSON.stringify(val[0]))["tracks"]);
                                        })
                                        trackarr.forEach(function (tracks) {
                                            tracks.forEach(function (track) {
                                                songIDs.push(track["uri"].substring(14));
                                            });
                                        });
                                        //console.log(songIDs);
                                        
                                        // map the songs to their audio analyses
                                        songAudioMap = songIDs.map(function (x) { return getAudiodata(x, access_token) });
                                        $.when.apply($, songAudioMap).then(function () {
                                            tempo = []
                                            $.each(arguments, function (i, val) {
                                                if (val != "error") {
                                                    tempo.push([val["tempo"], val["uri"]]);
                                                }
                                            })
                                            // sort the songs based on their tempo in increasing order
                                            tempo.sort(function (a, b) { return a[0] - b[0] });
                                            
                                            // if happy, get the last 20 songs in the list
                                            console.log(tempo);
                                            if (joy == 1) {
                                                res = tempo.slice(-20);
                                            }
                                            // else get the first 20 songs
                                            else {
                                                res = tempo.slice(0, 20);
                                            }
                                            res = res.map(function (x) { return x[1] });
                                            // add the songs to the playlist
                                            $.ajax({
                                                url: 'https://api.spotify.com/v1/playlists/' + playlistid + '/tracks',
                                                method: "POST",
                                                headers: {
                                                    'Authorization': 'Bearer ' + access_token,
                                                    'Content-Type': 'application/json'
                                                },
                                                data: JSON.stringify({
                                                    uris: res
                                                })
                                            });


                                        });

                                    });
                                },
                                error: function (jqHXR, e) {
                                    console.log(jqHXR.status);
                                }
                            });
                        },
                        error: function (jqHXR, e) {
                            console.log(jqHXR.status);
                        }
                    });
                    $('#login').hide();
                    $('#loggedin').show();
                },
                error: function (jqHXR, e) {
                    console.log(jqHXR.status);
                }
            });
        } // access token if end
        else {
            // render initial screen
            $('#login').show();
            $('#loggedin').hide();
        }
    }

});



