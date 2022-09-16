const histories = document.getElementById("histories");

function addHistory(questionText, timeTaken, errorCount) {
  
  histories.innerHTML = `
  
  <div class="col">
  <div class="card">
  <h3>${questionText.slice(0, 40)}...</h3>
  <div>
  <p>You took: <span class="bold">${timeTaken}</span> seconds</p>
  <p>You made <span class="bold red">${errorCount}</span> mistakes</p>
  </div>
  </div>
  </div>
  
  `; 
  
    
  let previousTests = JSON.parse(localStorage.getItem("testHistory")) || [];
  previousTests.push({ questionText, timeTaken, errorCount });
  localStorage.setItem("testHistory", JSON.stringify(previousTests));
  displayHistory();

}

function displayHistory() {

  histories.innerHTML = "";
  
  const previousTests = JSON.parse(localStorage.getItem("testHistory")) || [];
  previousTests.forEach((test) => {
    
    const newRow = document.createElement("div");
    newRow.innerHTML = `
    
    <div class="col">
    <div class="card">
    <h3>${test.questionText.slice(0, 40)}...</h3>
    <p>You took: <span class="bold">${test.timeTaken}</span> seconds</p>
    <p>You made <span class="bold red">${test.errorCount}</span> mistakes</p> 
    </div>
    </div>
    
    `;
    
    histories.appendChild(newRow);
  });
}

