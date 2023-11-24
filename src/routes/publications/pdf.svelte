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
        numPages = 0,
        context = null;

    
    // on mount
    onMount(() => {

        /**  
        * When hovering over left or right, add .shadow-drop-center class to it
        */         

        PDFJS.GlobalWorkerOptions.workerSrc = pdfjsWorker;
        
        // let ctx = canvas.getContext('2d');
        const loadingTask = PDFJS.getDocument(url);
        loadingTask.promise.then(function (pdf) {
            pdfDoc = pdf;            
            numPages = pdf.numPages;
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

  function downloadBibtex(){ 
    console.log('download bibtex')
    // get bibtex from meta.bibtex
    const bibtex = meta.bibtex;
    // create a blob
    const blob = new Blob([bibtex], {type: 'text/plain'});
    // create a url from blob
    const data = window.URL.createObjectURL(blob);
    // create a link element
    const link = document.createElement('a');
    // set the href to the url
    link.href = data;
    // set the download attribute to the filename
    link.download = meta.name + '.bib';
    // trigger the click event on the link
    link.click();
    // remove the link from the dom
    link.remove();



  }


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
                <div class="middle"> 
                    <span> {pageNum} / {numPages} </span>
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
            <div class="options"> 
                <div class="option" on:click={() => {window.open(url)}}> 
                    <span> Download </span>
                </div>
                <div class="option" on:click={downloadBibtex}> 
                    <span> BibTex </span>
                </div>
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

.options{ 
    display: flex; 
    flex-direction: row; 
    justify-content: left; 
    align-items: center; 
    width: 100%; 
    height: 100%; 
    border: none;
    background: none;
}

.option{ 
    display: flex; 
    flex-direction: row; 
    justify-content: center; 
    align-items: center; 
    border: none;
    background: #0CA7DB;
    padding: 10px;
    border-radius: 5px;    
    color: white;
    margin-right: 1em;
    cursor: pointer;    
}

.option:hover{ 
    background: #0CA7DB;
    opacity: 0.8;
    cursor: pointer;
    translate: scale(1.1);
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
    box-shadow: 0px 0px 10px 0px rgba(0,0,0,0.5);

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
    bottom: 0;
    left: 0;
    width: 100%;
}

.controls{ 
    position: absolute;
    display: flex;
    flex-direction: row;
    width:100%;
    /* move to the bottom of the canvas */
    bottom: 0;
    background: rgba(0,0,0,0.2);
}

.left { 
    display: inline-flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    width: 10%;
    border: none;
    background: rgba(0,0,0,0.25);
    color:white;

}

.middle{ 
    display: inline-flex;

    flex-direction: row;
    justify-content: center;
    align-items: center;
    width: 80%;
    border: none;
    background: rgba(0,0,0,0.25);
    color: white;

}

.right { 
    display: inline-flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    width: 10%;
    border: none;
    background: rgba(0,0,0,0.25);
    color: white;
}


/* align the spans inside of left and right to the center */

.left span {
    font-weight: bold;
    font-size:2em;
    cursor:pointer;
    user-select: none;
}

.right span { 

    font-size:2em;
    font-weight: bold;
    cursor:pointer;
    user-select: none;
}

/* make controls visible on hover over canvas*/

.right:hover{ 
    /* make the controls opacity 0.5 */
    background-color: rgba(0,0,0,0.5);
    cursor: pointer;
    /* drop shadow */
    /* box-shadow: 0px 0px 10px 0px rgba(0,0,0,0.5); */
}

.left:hover{ 
    /* make the controls opacity 0.5 */
    background-color: rgba(0,0,0,0.5);
    cursor: pointer;
    /* drop shadow */
    /* box-shadow: 0px 0px 10px 0px rgba(0,0,0,0.5); */
    /* animate a border radius */
    /* border-radius: 5px; */
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