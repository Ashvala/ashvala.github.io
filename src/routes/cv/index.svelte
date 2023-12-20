<script>
    import Page from './page.md';
  </script>
  
  <main>
    <div class="book">
        <div class="page">
            <Page/>            
        </div>    
    </div>
  </main>
  
  <style>
      /* main{ 
          display: flex;
          justify-content: center;
          align-items: center;
          background: #ccc;        
      } */
      
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
  
  </style>