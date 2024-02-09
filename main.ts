input.onButtonPressed(Button.A, function () {
    music.ringTone(400)
})
input.onButtonPressed(Button.AB, function () {
    music._playDefaultBackground(music.builtInPlayableMelody(Melodies.Dadadadum), music.PlaybackMode.InBackground)
})
input.onButtonPressed(Button.B, function () {
    music.ringTone(262)
})
music.setBuiltInSpeakerEnabled(true)
