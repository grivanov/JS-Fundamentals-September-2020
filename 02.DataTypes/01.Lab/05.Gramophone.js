function gramophone(band, album, song) {
    let songLength = (album.length * band.length) * song.length / 2;

    let rotationTimes = Math.ceil(songLength / 2.5);

    console.log(`The plate was rotated ${rotationTimes} times.`);
}

gramophone('Black Sabbath', 'Paranoid', 'War Pigs');