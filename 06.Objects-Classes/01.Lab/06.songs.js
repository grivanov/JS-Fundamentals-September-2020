function songs(array) {

    class Song {
        constructor(list, songName, songLength) {
            this.list = list;
            this.songName = songName;
            this.songLength = songLength;
        }
    }

    let listToPrint = array.pop();
    // console.log(listToPrint);
    // console.log(array);

    for (let i = 1; i < array.length; i++) {
        let [list, songName, songLength] = array[i].split('_');
        let newSong = new Song(list, songName, songLength);

        if (listToPrint == 'all') {
            console.log(newSong.songName);
        } else if (newSong.list == listToPrint) {
            console.log(newSong.songName);
        }
    }
}

songs([2,
    'like_Replay_3:15',
    'ban_Photoshop_3:48',
    'all']
);