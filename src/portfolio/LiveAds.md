---
layout: portfolio_page
title: LiveAds
Tech:
  - NodeJS
  - PhantomJS
  - GraphQL
  - Swift
  - ffmpeg
  - WebSockets
---

Website: [http://liveads.com](http://liveads.com)

Streamstager: [http://streamstager.com](http://streamstager.com)

---

LiveAds is a startup based out of San Francisco, CA focused on turning brands into broadcasters. During my time at LiveAds, I worked on two projects - Prompt and StreamStager.

Prompt was a research project intent on exploring the idea of a modern day teleprompter, that would shape the prompts according to events in a live stream. I built the backend architecture that handled video encoding. Video captured from the iPhone was streamed to an EC2 GPU instance via RTSP, which encoded the data with an HTML5 overlay.

The encoder used a nodejs server to orchestrate the lifecycle of a stream. At the start of a stream - the app sends a signal, spawning a `ffmpeg` instance that reads the RTSP data. `ffmpeg` merges it with the raw image data output by Phantomjs (a headless browser typically used for unit testing) every 1/30th of a second. The HTML5 overlay was controlled by the user via WebSockets, so that the view a person sees on the phone and the view on facebook would remain consistent. When the phone sends a disconnect signal, the server would terminate the ffmpeg instance.

Streamstager is at the heart of LiveAds’ current product line - it is a desktop app that allows brands to overlay dynamic content to their streams. This was used during Visa’s run up to the Super Bowl week in 2017, which featured athletes such as Steve Smith Sr., Greg Olsen and Antonio Brown. The livestreams can be found on the Visa USA page. The bulk of this was written in JavaScript. The API was scripted with a combination of JavaScript and GraphQL.

I designed the architecture and back-end database schema that streamlined the data entry and parsing process significantly. Additionally, I built plugins that allowed for interactive comment presentation during the streams - used during the Q&A sections of the streams.
