fetch("https://6560acc483aba11d99d151a5.mockapi.io/api/movies")
  .then((res) => res.json())
  .then((data) => {
    console.log(data);
    for (let i = 0; i < data.length; i++) {
      let box = document.querySelector(".box");
      box.innerHTML += `       
             <div class="row">
    <div class="col">
      <div class="card">
        <div class="card-image">
          <img src=${data[i].movieImg}>
          <span class="card-title">${data[i].movieName}</span>
        </div>
        <div class="card-content">
          <h6>${data[i].starring}....</h6>
          <p>${data[i].releasedDate}....</p>
        </div>
        <div class="card-action">
        <a href=${data[i].trailer} target="_blank">Watch reciept</a>
        </div>
      </div>
    </div>
  </div> `;
    }
  });
