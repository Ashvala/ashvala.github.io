---
title: Jie
layout: portfolio_page
Tech:
  - Csound
  - jQuery
  - Nodejs
  - Socket.io
---

Source code: [http://github.com/ashvala/Jie](https://github.com/ashvala/Jie)

Demo: [http://dev.ashva.la/Jie](http://dev.ashva.la/Jie)

Paper: [https://zenodo.org/record/50368](https://zenodo.org/record/50368)

---

Jie was my capstone project at Berklee. It focused on building upon the [paper](https://zenodo.org/record/50368) I had written for the Csound Conference, where Dr. Richard Boulanger and I focused on harnessing the power of Csound for the web and building something that would allow for Csound to work in a collaborative setting. Jie took it a step further and followed the jam room paradigm.

Jie gave any user who joined a set of instruments that they can play. The instruments were coded in a Csound Orchestra that was interpreted using JavaScript. The server determines which instrument a person can perform and modify. It worked by sending instrument and channel messages over WebSockets. It also had support for MIDI if a user enabled WebMIDI using chrome flags. The server was written with Node.js and socket.io. Keeping the server separate from the front end allowed us to create a platform agnostic environment that can be extended to work on any device that has Csound support.

The project was also accepted as a demo to the Second Web Audio conference held at Georgia Tech. The demo proved successful as people who participated in the demo with their own laptops were able to jam with people in the room.
