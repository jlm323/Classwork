

const radio = {
    stations: [
        {
            name: '96.1',
            songs: [
                {
                    title: 'As It Was',
                    artist: 'Harry Styles'
                },
                {
                    title: '7 Rings',
                    artist: 'Ariana Grande'
                },
                {
                    title: 'Cherry',
                    artist: 'Harry Styles'
                }
            ]
        },
        {
            name: '100.7',
            songs: [
                {
                    title: 'Break My Soul',
                    artist: 'Beyonce'
                },
                {
                    title: 'Running Up That Hill',
                    artist: 'Kate Bush'
                },
                {
                    title: 'Say So',
                    artist: 'Doja Cat'
                },
            ],
        },
    ],
    randomStation: function() {
        
        let stationNum = Math.floor(Math.random() * radio.stations.length);
        let songNum = Math.floor(Math.random() * radio.stations[stationNum].songs.length);
        
        console.log('Now playing: ' + radio.stations[stationNum].songs[songNum].title + ' by ' + radio.stations[stationNum].songs[songNum].artist);
    },
    
}
radio.randomStation();