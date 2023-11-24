
<script> 
    export let url;
    export let meta;
    import { Col, Container, Row } from "sveltestrap";
    import { browser } from '$app/env';
    import { onMount } from 'svelte';
    import * as PDFJS from "pdfjs-dist";
    import * as pdfjsWorker from "pdfjs-dist/build/pdf.worker.min.mjs";
    console.log(pdfjsWorker)
    let canvas;
    var pdfDoc = null,
        pageNum = 1,
        pageRendering = false,
        pageNumPending = null,
        scale = 0.8,
        context = null;
    // on mount
    onMount(() => {
        PDFJS.GlobalWorkerOptions.workerSrc = pdfjsWorker;
        
        // let ctx = canvas.getContext('2d');
        const loadingTask = PDFJS.getDocument(url);
        loadingTask.promise.then(function (pdf) {
            pdfDoc = pdf;            
            pdf.getPage(pageNum).then(function(page) {
                console.log('Page loaded');
                
                // var scale = 2;
                scale = 2;
                var viewport = page.getViewport({scale: scale});
                
                // var viewport = page.getViewport(scale);
                // Prepare canvas using PDF page dimensions                
                context = canvas.getContext('2d');
                
                var resolution =  0.99 ; // for example

                canvas.height = resolution * viewport.height; //actual size
                canvas.width  = resolution * viewport.width;

                canvas.style.height = viewport.height; //showing size will be smaller size
                canvas.style.width = viewport.width;

                // Render PDF page into canvas context
                var renderContext = {
                    canvasContext: context,
                    viewport: viewport
                };
                var renderTask = page.render(renderContext);
                renderTask.promise.then(function () {
                    console.log('Page rendered');
                });
            });


        });
        canvas.addEventListener('dblclick', function () {
                console.log('double click')
                if (canvas.requestFullscreen) {
                canvas.requestFullscreen();
                } else if (canvas.webkitRequestFullscreen) {
                canvas.webkitRequestFullscreen();
                } else if (canvas.mozRequestFullScreen) {
                canvas.mozRequestFullScreen();
                } else if (canvas.msRequestFullscreen) {
                canvas.msRequestFullscreen();
                }
            });
    });

function renderPage(num) {
    pageRendering = true;
    // Using promise to fetch the page
    pdfDoc.getPage(num).then(function(page) {
      var viewport = page.getViewport({scale: scale});
      canvas.height = viewport.height;
      canvas.width = viewport.width;

      // Render PDF page into canvas context
      var renderContext = {
        canvasContext: context,
        viewport: viewport
      };
      var renderTask = page.render(renderContext);

      // Wait for rendering to finish
      renderTask.promise.then(function() {
        pageRendering = false;
        if (pageNumPending !== null) {
          // New page rendering is pending
          renderPage(pageNumPending);
          pageNumPending = null;
        }
      });
    });
  }

function queueRenderPage(num) {
    if (pageRendering) {
      pageNumPending = num;
    } else {
      renderPage(num);
    }
  }

  /**
   * Displays previous page.
   */
  function onPrevPage() {
    if (pageNum <= 1) {
      return;
    }
    pageNum--;
    queueRenderPage(pageNum);
  }


  /**
   * Displays next page.
   */
  function onNextPage() {
    if (pageNum >= pdfDoc.numPages) {
      return;
    }
    pageNum++;
    queueRenderPage(pageNum);
  }

  /**
   * When you double click the canvas, it will full screen the canvas
   */





</script> 

<div class="card_container"> 
        <Row>
            <Col>
        <div class="pdf_holder"> 
            <canvas class="pdf_viewer" bind:this={canvas} > 
            </canvas>
            <div class="controls"> 
                <div class="left">
                    <span on:click={onPrevPage}> {'<'} </span>
                </div>
                <div class="right">
                    <span on:click={onNextPage}> {'>'} </span>
                </div>            
            </div>
        </div>
    </Col>
    <Col>
        <div class="meta_holder"> 
            <h3> {meta.name} </h3>
            <p> {meta.authors} </p>
            <p> {meta.conf} </p>
            <p> <span> Abstract: </span> {meta.abstract}</p>
        </div>
    </Col>
    </Row>  
</div>
<style> 

.card_container { 
    width: 100%; 
    height: 100%; 
    border: none;
    background: none;
}

.card { 
    display: flex; 
    flex-direction: row; 
    justify-content: center; 
    align-items: center; 
    width: 100%; 
    height: 100%; 
    border: none;
    background: none;
}

canvas { 
    width: 100%; 
    height: 60%; 
    border: none;
    background: none;
    /* position: absolute; */
}

.meta_holder { 
    display: flex; 
    flex-direction: column; 
    justify-content: left; 
    align-items: left; 
    height: 75%; 
    border: none;
    background: none;
    margin-left: 1em;
    font-family: "Merriweather";
}

/* make controls overlay on top of canvas to span its entire width*/

.pdf_holder{
    position: relative;
    display: flex;
}

.pdf_holder .controls{
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
}

.controls{ 
    position: absolute;
    display: none;
    flex-direction: row;

}

.left { 
    display: flex;
    flex-direction: row;
    justify-content: left;
    align-items: center;
    width: 10%;
    height: 100%;
    border: none;
    background: rgba(0,0,0,0.5);
    color:white;

}

.right { 
    display: flex;
    flex-direction: row;
    justify-content: right;
    align-items: center;
    width: 10%;
    height: 100%;
    border: none;
    background: rgba(0,0,0,0.5);
    /* create a large gap that spans 40% of the width */
    margin-left: 80%;
    color: white;
}

/* align the spans inside of left and right to the center */

.left span { 
    margin-left: 50%;
    transform: translateX(-50%);
    font-weight: bold;
    font-size:2em;
    cursor:pointer;
    /* disable selection of text */
    user-select: none;
}

.right span { 
    margin-right: 25%;
    transform: translateX(-50%);
    font-size:2em;
    font-weight: bold;
    cursor:pointer;
    /* disable selection of text */
    user-select: none;
}

/* make controls visible on hover over canvas*/

.pdf_holder:hover .controls{
    display: flex;
}

/* if mobile, hide pdf viewer altogether and set the meta to full */

@media only screen and (max-width: 600px) {
    .pdf_holder { 
        display: none;
    }
    .meta_holder { 
        width: 100%;
        height: 100%;
        margin-left: 0;
    }

}

</style>