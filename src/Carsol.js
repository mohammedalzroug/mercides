import React from 'react'

function Carsol() {
  return (
    <div id="carouselExampleIndicators" class="carousel slide" data-bs-ride="carousel">
  <div class="carousel-indicators">
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
  </div>
  <div class="carousel-inner">
    <div class="carousel-item active">
      <img src="https://s.blogcdn.com/slideshows/images/slides/497/186/2/S4971862/slug/l/17c174-001-1.jpg" class="d-block w-100" alt="..." />
    </div>
    <div class="carousel-item">
      <img src="https://th.bing.com/th/id/R.e46c44902bd4dcd49c9e9c71ce868c21?rik=1EFI2d3s%2fwM94g&riu=http%3a%2f%2finventorspot.com%2ffiles%2fblog1%2f2016-mercedes-benz-e-class-coupe-hd-picture-with-high-7-on-gallery-mercedes-benz-m17g3-High-Resolution-Wallpaper.jpg&ehk=v%2fxCfLFfqMxGBnC7x60E2c9KK%2f%2fhlRSazLIO6HLTOyg%3d&risl=&pid=ImgRaw&r=0" class="d-block w-100" alt="..." />
    </div>
    <div class="carousel-item">
      <img src="https://th.bing.com/th/id/R.c98e67573a636938019953462b675cdd?rik=T6r23rzkAt7q3Q&pid=ImgRaw&r=0" class="d-block w-100" alt="..." />
    </div>
  </div>
  <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>
</div>
  )
}

export default Carsol