function downloadIDCard() {
    html2canvas(document.querySelector("#idCard")).then(canvas => {
      let link = document.createElement("a");
      link.download = "id_card.png";
      link.href = canvas.toDataURL("image/png");
      link.click();
    });
  }

  function loadFile(event) {
    const image = document.getElementById('displayImage');
    image.src = URL.createObjectURL(event.target.files[0]);
  }

  function changeCard(styleId) {
    const idCard = document.getElementById("idCard");
    
    // Check if the element exists
    if (idCard) {
        console.log("ID card element found.");
        
        // Remove all previous style classes
        idCard.classList.remove("id-style-1", "id-style-2", "id-style-3", "id-style-4", "id-style-5", "id-style-6", "id-style-7", "id-style-8", "id-style-9", "id-style-10");
        
        // Add the selected style class
        idCard.classList.add(styleId);
        
        console.log(`Applied style: ${styleId}`);
    } else {
        console.error("Element with ID 'idCard' not found.");
    }
}


  