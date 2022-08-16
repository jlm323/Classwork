let station1 = radio.station[0]
let station2 = radio.station[1]

const radio = {
    stations: [
        {name: '96.1',
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
        ]},
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
                }
            ]
        }
    ],
    randomStation(station1, station2){
        return Math.random()
    }
    
}