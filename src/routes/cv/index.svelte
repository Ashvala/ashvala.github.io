<script>
    import Page from './page.md';
    function goBack() {
      window.location.href = "/";
  }
</script>
  
  <main>
    <div class="backButton" on:click={goBack}>
        <i class="las la-angle-left" />
      </div>
    <div class="book">
        <div class="page">
            <Page/>            
        </div>    
    </div>
  </main>
  
  <style>
        
      .page {
          font-family: "Avenir";
          width: 210mm;
          min-height: 297mm;       
          margin: 2mm auto;
          /* background: #fff; */
          /* border: 1px #D3D3D3 solid; */
          /* box-shadow: 1px 1px 0.5cm rgba(0,0,0,0.5); */
      }
  
      @page { 
          margin-top: 10mm;
          size: letter;
      }
      
      @media print{ 
          .page{ 
              page-break-after: always;
              margin-top: 2px;
          }
      }
      .backButton {
    position: relative;
    top: 32px;
    left: 10px;
    width: 32px;
    height: 32px;
    color: black;
    background: #fff;
    border-radius: 100px;
    cursor: pointer;
    z-index: 1;
    display: flex;
    justify-content: center;
    align-items: center;
    box-shadow: 0px 0px 10px black;
  }

  .backButton i {
    font-size: 1.2em;
  }

  .backButton:hover {
    background: #aaa;
    color: black;
  }
  
  </style>