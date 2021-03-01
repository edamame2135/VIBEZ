function resolveFailure() {
    return [{error: true}, 1, 1];
}
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


function toptracks(id, access_token) {
    console.log("save me");
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
    console.log(joy);
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
    var totalplaylists;
    var userID;
    var arrTracksUri = [];
    var arrTracksID = [];
    var arrTempo = [];
    var arrHappy = [];
    var arrSad = [];
    var sad;
    var happy;
    var playlistName;

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
            // if more happy than sad
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
                                url: 'https://api.spotify.com/v1/me/top/artists?limit=10&offset=0&time_range=medium_term',
                                method: "GET",
                                headers: {
                                    'Authorization': 'Bearer ' + access_token,
                                    'Content-Type': 'application/json'
                                },
                                // get the ids from top 10 songs from each top artist
                                success: function (response) {
                                    console.log("yeahg aight");
                                    var artistIDs = [];
                                    var artists = JSON.parse(JSON.stringify(response))["items"];
                                    artists.forEach(function (artist) {
                                        artistIDs.push(artist["id"]);
                                    });
                                    $.when(toptracks(artistIDs[0], access_token), toptracks(artistIDs[1], access_token), toptracks(artistIDs[2], access_token), toptracks(artistIDs[3], access_token), toptracks(artistIDs[4], access_token),
                                    toptracks(artistIDs[5], access_token), toptracks(artistIDs[6], access_token), toptracks(artistIDs[7], access_token), toptracks(artistIDs[8], access_token), toptracks(artistIDs[9], access_token)).done(function(t1, t2, t3, t4, t5, t6, t7, t8, t9, t10) {
                                        console.log("are u srs");
                                        var songIDs = [];
                                        var trackarr = [];
                                        trackarr.push(JSON.parse(JSON.stringify(t1[0]))["tracks"]);
                                        trackarr.push(JSON.parse(JSON.stringify(t2[0]))["tracks"]);
                                        trackarr.push(JSON.parse(JSON.stringify(t3[0]))["tracks"]);
                                        trackarr.push(JSON.parse(JSON.stringify(t4[0]))["tracks"]);
                                        trackarr.push(JSON.parse(JSON.stringify(t5[0]))["tracks"]);
                                        trackarr.push(JSON.parse(JSON.stringify(t6[0]))["tracks"]);
                                        trackarr.push(JSON.parse(JSON.stringify(t7[0]))["tracks"]);
                                        trackarr.push(JSON.parse(JSON.stringify(t8[0]))["tracks"]);
                                        trackarr.push(JSON.parse(JSON.stringify(t9[0]))["tracks"]);
                                        trackarr.push(JSON.parse(JSON.stringify(t10[0]))["tracks"]);
                                        trackarr.forEach(function (tracks) {
                                            tracks.forEach(function (track) {
                                                if (track["album"]["album_type"] == "album") {
                                                    songIDs.push(track["uri"].substring(14));
                                                }
                                                else {
                                                    songIDs.push(track["album"]["uri"].substring(14));
                                                }
                                            });
                                        });
                                        console.log(songIDs);
                                        
                                        songAudioMap = songIDs.map(function(x) {return getAudiodata(x, access_token)});
                                        $.when.apply($, songAudioMap).then(function(data) {
                                            tempo = []
                                            data.forEach(function(respo) {
                                                tempo.push([respo["tempo"], respo["uri"]]);
                                            });
                                            tempo.sort(function(a, b) {return a[1] - b[1]});
                                            if(joy == 1) {
                                                tempo = songtempos.slice(80);
                                            }
                                            else {
                                                tempo = songtempos.slice(0, 20);
                                            }
                                            
                                            tempo.map(function(x) {return x[1]});
                                            
                                                $.ajax({
                                                    url: 'https://api.spotify.com/v1/playlists/' + playlistid +'/tracks',
                                                    method: "POST",
                                                    headers: {
                                                        'Authorization': 'Bearer ' + access_token,
                                                        'Content-Type': 'application/json'
                                                    },
                                                    data: {
                                                        'uris': tempo
                                                    }
                                                });
                                            

                                        });
                                        
                                    });
                                },
                                error: function(jqHXR, e) {
                                    console.log(jqHXR.status);
                                }
                            });
                         },
                         error: function(jqHXR, e) {
                            console.log(jqHXR.status);
                        }
                    });

                    //$('#login').hide();
                    //$('#loggedin').show();
                },
                error: function(jqHXR, e) {
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



