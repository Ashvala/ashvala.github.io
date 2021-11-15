---
layout: portfolio_page
title:  Three Vs Two
Tech:
- Csound
---

**Genre:** Generative

**Length:** As long as you leave it running.

**Influenced by:**

- Iain McCurdy

---

[Download the song](http://ashva.la/assets/ThreeVsTwo.mp3")

[Download the Csound file](http://ashva.la/assets/ThreeVsTwo.csd")

---

### About:

This piece was written for Dr. Richard Boulanger’s Csound class from the Summer of 2015. I was inspired by Iain McCurdy’s haikus, but, I wasn’t entirely satisfied with just recreating something that often generated a drone, I wanted to use an array of notes that would be used in the piece of music.

The code was written in Csound. It does not use any notelist events in the score and relies on schedulers inside of Csound to trigger note events.

---


### Global Arrays:

```
gkarr[] fillarray 60,63,65,67,72, 48, 36, 38, 47, 61
gkarrbass[] fillarray 36, 43, 24, 36, 48, 36, 34, 43
```

gkarr is initalized as an array and filled with a bunch of MIDI notes that can be parsed by our instrument.

gkarrbass is just a bunch of lower register notes that kinda sound coherent in context.

---

### The master scheduler:

```
schedule "scheduler", 0, 30, 0
schedule "scheduler", 30, 15, 1
schedule "scheduler", 45, 15, 0
schedule "del", 0, 90
schedule "rev", 0, 90
```

This master scheduler that just sits in the orc section allows Csound to schedule the piece exactly for a minute and thirty seconds.

This can easily be made much more haiku like - just by setting `del` and `rev's` schedule to -1, or using a plugin opcode such as `alwayson` for the scheduler instrument.

---



### The scheduler instrument:

Code:

```
instr scheduler		
	kTrig metro 3		
	kmetro = metro(3)		
	ktrig_bass = metro(2)				
	kmidi_note_t = trandom(kmetro, 0,8)
	kmidinote = gkarr[int(kmidi_note_t)]
	kmidinote_bass = gkarrbass[int(kmidi_note_t)]
	schedkwhen  kTrig, 0, 10, 1, 0, 4, kmidinote,1, 0.01
	schedkwhen  ktrig_bass, 0, 8, 1, 0, 2, int(kmidinote_bass), 0, 0.005
endin
```

`kTrig` sends a trigger (or 1) three times every second to the scheduler.

`kmetro` is used to get a random number. `kmetro` also operates at 3Hz.

`ktrig_bass` is used to trigger a bass notes 2 times every second.

`trandom` is used to generate a random number based on a trigger signal from a metro.

---


### The actual instrument:


```
instr 1
	ifreq = cpsmidinn(p4)
	idur = p3
	ifreq11 = cpsmidinn(p4)
	ifreq12 = cpsmidinn(p4) * 4
	iQ11    = 120
	iQ12    = 10
	iamp 	  = p6
	ifreq21 = cpsmidinn(p4) * 1.7
	ifreq22 = cpsmidinn(p4) * 8
	iQ21    = 8
	iQ22    = 10
	ashock  mpulse  1,2
	aexc1  = mode(ashock,ifreq11,iQ11)
	aexc1 = aexc1*iamp
	aexc2 = mode(ashock,ifreq12,iQ12)
	aexc2 = aexc2*iamp
	aexc = (aexc1+aexc2)/2
	aexc limit aexc,0,0.5*iamp

	ares1  mode aexc,ifreq21,iQ21
	ares2  mode aexc,ifreq22,iQ22
	ares = (ares1+ares2)
	aresOut streson ares, ifreq12, 0.7
	irevsend = p5

	if irevsend = 1 then
		garvbL += (aresOut * 0.8)
		garvbR += (aresOut * 0.8)
	else
		garvbL = (aresOut * 0)
		garvbR = (aresOut * 0)
	endif

	gadelL += (aresOut * 0.8)
	gadelR += (aresOut * 0.8)
	outs aresOut,aresOut
endin
```

Line by line analysis:

- `ifreq` is the midi note number in Hz or CPSs.
- `ifreq11` is also just the CPS conversion
- `ifreq12` is the CPS conversion multiplied by 4
- `ifreq21` is the CPS conversion multiplied by 1.7
- `ifreq22` is the CPS conversion multiplied by 8

the Q values are determined so that one can get a slightly more metallic sound, this is achieved by using low Q values.

`ashock` is used as a instigator of that sound - To create the impulse, so to speak.

This particular instrument is based on the `mode` example that the csound manual has.

`mode` is an opcode used to simulate the mass-spring-damper filtering system that's used in physical modeling synthesis.

![mass-spring-damper system](https://upload.wikimedia.org/wikipedia/commons/2/2b/Damped_spring.gif)

We use ifreq11/12 and the related Q values(iq11/12) to determine the impulse state of the system

We use `limit` to generate a contact condition. when the limit sees a zero, it essentially behaves as if the contact state is lost.

This creates the mass part of the equation

The remaining two mode instances are used to create the spring and decay/damp condition.

I used a string resonator to create a slightly more resonant sound.

`irevsend` is a variable used to determine whether or not a reverb send happens. If set to 1, it will go to the reverb instrument, otherwise it won't.

The instrument is always going have a delay on it. Because it sounds nicer.

---

### Delay and reverb instruments:

```
instr del
	adelL init 0
	adelR init 0
	kfdbk linseg 0, p3, 0.95
	adelL delay gadelL + (adelL * kfdbk), 1.5
	adelR delay gadelR + (adelR * kfdbk), 3
	adelOutL moogvcf adelL, 210, 0.7
	adelOutR moogvcf adelR, 3000, 0.6
	outs adelOutL, adelOutR
	gadelL = 0
	gadelR = 0
endin

instr rev
	kfdbk linseg 0, p3/2, 0.88, p3/2, 0
	arvbL, arvbR reverbsc garvbL, garvbR,kfdbk, 1000
	outs arvbL, arvbR
	garvbL = 0
	garvbR = 0
endin
```

`del` is a stereo delay instrument.

The left signal is delayed by 1.5 seconds and the right signal is delayed by 3 second.

I used the trick from the manual, related to coloring the delayed outputs, to create the delay sound.

`rev` is a stereo reverb that uses the reverbsc opcode. It's nothing fancy.

They use linsegs to create the feeling of an increased feedback/fadeout towards the end.

---
