---
title: "AQUATk: An Audio QUality Assessment Toolkit"
date: "2023-11-20"
excerpt: "You got the audio? I have the metrics!"
---


In 2022, my advisor and I published a paper called "Evaluating generative audio systems and their metrics" at ISMIR 2022, where we discussed this set of problems with evaluation of neural audio synthesis techniques at large: 

1. What are the metrics? 
2. Do any of them line up with perception? 
3. How do we evaluate these systems?

While running the experiments necessary to extract sounds and their corresponding metrics, I noticed that the tooling around extracting metrics was not good. As an example, if I were to compute the Frechet Audio Distance, I'd have to do the following: 

- Decide if I'm using Tensorflow (the reference implementation) or Pytorch (everyone's favorite framework)
- Setup google's entire research repo 
- Spend time setting up the environment for *one* directory
- Break everything because of tensorflow and numpy 
- Fix everything somehow
- Find that I now have to setup the VGGish model too? 
- Spend time setting up the environment for *another* directory
- Once VGGish is setup, I can finally extract the embeddings

Broadly, this is a significantly terrible way to extract metrics in my opinion. This is so far behind the curve compared to the tooling available to evaluate things like images and text. For instance, you can just download torchmetrics and use it directly to evaluate your models (which is great!) and while torchmetrics does come with a built in set of metrics for audio, it's not as exhaustive per se. 

So, I decided to build a toolkit that would allow me to extract metrics from audio files in a way that is easy to use and easy to extend. It's available on [Github](https://github.com/ashvala/AQUA-Tk). It will be on PyPi soon (check back in a few days). 

In the meanwhile, it has support the following metrics: 

|  |                     |
| ------ |---------------------------------|
| FAD | Frechet Audio Distance          |
| KID | Kernel Inception Distance       |
| PEAQb | Basic PEAQ                      |
| NDB/k | Number of Different Bins over K |
| SISDR | Scale-Invariant SDR             |
| SNR | Signal-to-Noise Ratio           |
| MAE | Mean Absolute Error             |
| MSE | Mean Squared Error              |
| KL | Kullback-Leibler Divergence     |




