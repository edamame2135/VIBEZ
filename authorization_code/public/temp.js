$.ajax({
    url: 'https://api.spotify.com/v1/me/playlists',
    headers: {
        'Authorization': 'Bearer ' + access_token
    },
    success: function (response) {
        totalplaylists = response.total;
        items = response.items;
        console.log(totalplaylists);
        console.log(items);
        for (var i = 0; i < totalplaylists; i++) {
            (function (i) {
                $.ajax({
                    url: 'https://api.spotify.com/v1/playlists/' + items[i].id + '/tracks',
                    headers: {
                        'Authorization': 'Bearer ' + access_token
                    },
                    success: function (response) {
                        if (response.total > 0) {
                            for (var j = 0; j < response.total; j++) {
                                if (arrTracksUri.length > 0) {
                                    if (response.items[j].track) {
                                        if (arrTracksUri.includes(response.items[j].track.uri) != true) {
                                            arrTracksUri.push(response.items[j].track.uri);
                                            arrTracksID.push(response.items[j].track.id);
                                        }
                                    }
                                } else {
                                    arrTracksUri.push(response.items[j].track.uri);
                                    arrTracksID.push(response.items[j].track.id);
                                }
                            }
                        }
                        if (items[i].name == "VIBEZSad") {
                            sad = items[i].id;
                        }
                        if (items[i].name == "VIBEZHappy") {
                            happy = items[i].id;
                        }
                        if (items[i].name == "VIBEZTEMP") {
                            $.ajax({
                                url: 'https://api.spotify.com/v1/playlists/' + items[i].id + '/tracks',
                                method: "POST",
                                data: JSON.stringify({
                                    uris: [arrTracksUri[0], arrTracksUri[1], arrTracksUri[2], arrTracksUri[3], arrTracksUri[4], arrTracksUri[5], arrTracksUri[6], arrTracksUri[7], arrTracksUri[8], arrTracksUri[9], arrTracksUri[10], arrTracksUri[11]],
                                }),
                                headers: {
                                    'Authorization': 'Bearer ' + access_token,
                                    'Content-Type': 'application/json'
                                },
                                success: function (response) {
                                    console.log("Works!");
                                    for (var x = 0; x < 12; x++) {
                                        (function (x) {
                                            $.ajax({
                                                url: 'https://api.spotify.com/v1/audio-features/' + arrTracksID[x],
                                                headers: {
                                                    'Authorization': 'Bearer ' + access_token
                                                },
                                                success: function (response) {
                                                    if (response.energy < 0.6) {
                                                        arrSad.push(arrTracksUri[x]);
                                                    } else {
                                                        arrHappy.push(arrTracksUri[x]);
                                                    }
                                                    if (x == 11) {
                                                        if (joy == 1) {
                                                            $.ajax({
                                                                url: 'https://api.spotify.com/v1/playlists/' + happy + '/tracks',
                                                                method: "POST",
                                                                data: JSON.stringify({
                                                                    uris: [arrHappy[0], arrHappy[1], arrHappy[2], arrHappy[3], arrHappy[4]],
                                                                }),
                                                                headers: {
                                                                    'Authorization': 'Bearer ' + access_token,
                                                                    'Content-Type': 'application/json'
                                                                },
                                                                success: function (response) {
                                                                    console.log("happy");
                                                                }
                                                            });
                                                        } else {
                                                            $.ajax({
                                                                url: 'https://api.spotify.com/v1/playlists/' + sad + '/tracks',
                                                                method: "POST",
                                                                data: JSON.stringify({
                                                                    uris: [arrSad[0], arrSad[1], arrSad[2], arrSad[3], arrSad[4]],
                                                                }),
                                                                headers: {
                                                                    'Authorization': 'Bearer ' + access_token,
                                                                    'Content-Type': 'application/json'
                                                                },
                                                                success: function (response) {
                                                                    console.log("SAD HOMIE");
                                                                }
                                                            });
                                                        }
                                                    }
                                                }
                                            })
                                        }
                                        )(x)
                                    };

                                }
                            });
                        }
                    }
                });
            })(i);
        }
    }
});