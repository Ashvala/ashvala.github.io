<script>
    import examples from "./examples.json"
    const sounds = Array.from(Object.keys(examples))
    let selectedSound = sounds[0]
</script>

## Problem motivation

There has been an outburst of interest in both the academic and industry spheres in developing deep learning models that are able to generate sounds - whether it is speech or music. Oft cited examples are Nsynth, DDSP in the music sphere and Tacotron, Diffwave in the speech sphere.

It is well known that evaluating deep neural networks that are capable of generating various outputs is a non-trivial task. This is because of factors like:

- unavailablility of ground truth data that adequately captures all possible generative outcomes,
- a lack of good datasets for training and testing and most importantly,
- a lack of metrics that discuss the quality of the generated outputs.

Our work specifically focuses on the metrics aspect of this problem. While a lot of popular works do report a wide array of metrics like _Number of Statistically different bins (NDB/k)_, _Inception scores_, _Mean Opinion Scores_ among others, **our assertion is that a majority of automatic/objective metrics in use today do not tell us anything about the quality of the generated output.**

<div>
    <select bind:value={selectedSound}>
    {#each sounds as sound}
        <option value={sound}>{sound}</option>
    {/each}
    </select>
    <hr/>
    <div class="audio_container">
        <audio src={`https://samples.ashva.la/reference/${selectedSound}.wav`} controls />
        <audio src={`https://samples.ashva.la/nsynth_output/${selectedSound}.wav`} controls />
        <audio src={`https://samples.ashva.la/ddsp_output/${selectedSound}.wav`} controls />
        <audio src={`https://samples.ashva.la/diffwave_output/${selectedSound}.wav`} controls />
        <audio src={`https://samples.ashva.la/anchor_output/${selectedSound}.wav`} controls />
    </div>

</div>

## Experimental Set up

We evaluated three popular and _available_ networks - DDSP, Nsynth and Diffwave. All of them were trained on the same Nsynth dataset and were evaluated on the same set of sounds for all the metrics.

We evaluated the following objective metrics in our experiments:

- Number of statistically different bins (NDB/k),
- Pitch Kernel Inception Distance (PKID),
- Instrument Kernel Inception Distance (IKID),
- Pitch Inception Score (PIS),
- Instrument Inception Score (IIS),
- Mean Squared Error (MSE),
- Mean Absolute Error (MAE), and
- Fréchet audio distance (FAD).

## Results

The table below outlines the results from each objective metric. Down arrows indicate that the lower the score, the better (and vice versa for up arrow). Bold indicates that the network was the best performing for that metric.

| System   | NDB/k <i class="las la-long-arrow-alt-down"></i> | PKID <i class="las la-long-arrow-alt-down"></i> | IKID <i class="las la-long-arrow-alt-down"></i> | PIS <i class="las la-long-arrow-alt-up"></i> | IIS <i class="las la-long-arrow-alt-up"></i> | MSE <i class="las la-long-arrow-alt-down"></i> | MAE <i class="las la-long-arrow-alt-down"></i> | FAD <i class="las la-long-arrow-alt-down"></i> |
| -------- | ------------------------------------------------ | ----------------------------------------------- | ----------------------------------------------- | -------------------------------------------- | -------------------------------------------- | ---------------------------------------------- | ---------------------------------------------- | ---------------------------------------------- |
| Diffwave | 0.74                                             | 0.0093                                          | 0.0021                                          | 2.3814                                       | **5.6477**                                   | 0.0291                                         | 0.1369                                         | 7.9488                                         |
| DDSP     | **0.20**                                         | **0.0053**                                      | **0.0020**                                      | **3.3224**                                   | 5.3371                                       | **0.0130**                                     | **0.0666**                                     | **1.1519**                                     |
| NSynth   | 0.74                                             | 0.0101                                          | 0.0024                                          | 2.3238                                       | 4.6364                                       | 0.0329                                         | 0.1224                                         | 4.0590                                         |
| Anchor   | 0.72                                             | 0.0123                                          | 0.0006                                          | 2.9356                                       | 5.3017                                       | 0.0257                                         | 0.0857                                         | 1.4952                                         |

<style>
    .audio_container{
        display:flex;
        flex-direction:column;
        justify-content:space-between;
        align-items:center;
    }
    table{ 
        border-collapse: collapse;
        width: 100%;
        border-spacing: 0;
        border: 1px solid #ddd;
    }
    table tr:nth-child(even){
        background-color: #222;
    }

    th{ 
        background-color: #222;
        color: white;
        padding: 10px;
        border: 1px solid #ddd;        
    }
    td{ 
        padding: 10px;
        border: 1px solid #ddd;
    }
</style>
