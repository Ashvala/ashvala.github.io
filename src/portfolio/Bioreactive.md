---
title: Bioreactive Music
Tech:
- Swift
- OSC
- Csound
- NodeJS
- Bluetooth
---

Liquid Science Episode: [https://www.redbull.tv/video/AP-1N7M57S9N2111/musics-future](https://www.redbull.tv/video/AP-1N7M57S9N2111/musics-future)

---

One of my areas of interests is understanding how expressive humans can be without using traditional modes of input. In order to understand this, the projects I worked on during my time at berklee used two primary instruments for this - the Apple Watch and the Muse Brainwave reader.

The first project with the Apple watch was conceived during the 2015 Hacking Arts hackathon, where a team of us built an ambient music generator that used gear from LightWave Inc (a startup based out of San Francisco who're focused on extrapoliating emotional responses from biometric data). The general premise was simple: higher your heart rate, slower the music. Eventually, this was translated to work with the Apple Watch and Csound.

For the projects related to brainwave readers, I built a system that would use data from the Muse Bluetooth Brainwave reader to influence elements like the tempo of a beat and even the notes that are generated. This project was showcased on [Red Bull TV's Liquid Science featuring Wu Tang Clan's GZA](https://www.redbull.tv/video/AP-1N7M57S9N2111/musics-future).

For both the projects, the data is sent to a node.js server, where it gets parsed and sent to their end points over OSC. For the Apple Watch project, it takes data over to the server via WebSockets. The server gets the heart rate data every second. A Csound orchestra was constructed to take this OSC data and make it sound good.

On the other hand, the Brainwave reader worked over Bluetooth and sent OSC data. The node server parsed the highly granular data into simpler data that could both be:

1. Visualized and
2. Used for generating music.

For the brainwave reader, an additional interface to Max for Live was built using Max's built in osc reader. This was connected to Ableton's tempo control, which played a focal point in the demo shown in the TV show.
