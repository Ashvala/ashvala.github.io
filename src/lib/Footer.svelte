<script> 
let year = new Date().getFullYear();
</script> 

<div class="footer">
    {year}, Ashvala Vinay
</div>

<style>
    .footer {
        display: flex;
        justify-content: center;
        align-items: center;
        height: 64px;
        width: 100%;
        color: #ddd;
        font-weight: bold;
        /* position at the very bottom of the page */ 
        position: absolute;
        bottom: 0;
        
    }
</style>