import React from 'react';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

const Slider = () => {
  return (
    <div id="carouselExampleCaptions" className="carousel slide" data-bs-ride="carousel">
      <div className="carousel-indicators">
        <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
        <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
        <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
      </div>
      <div className="carousel-inner">
        <div className="carousel-item active">
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSMoOE1vD7unp8Bp1nYuBzXOHhDopkaNnLqWPhcNyRvp5MRpaAeZR3j_JqL5Qkmu-h0n8s&usqp=CAU" className="d-block w-100 mx-auto" style={{ height: '300px' }} alt="Slide 1" />
          <div className="carousel-caption d-none d-md-block">
          <h5 class="font-weight-bold  text-danger ">Welcome To GIETU CLUB</h5>
          <p class="text-danger">Our aim is excellency</p>


          </div>
        </div>
        <div className="carousel-item">
          <img src="https://www.giet.edu/wp-content/uploads/2020/06/wifi-facility.jpg" className="d-block w-100 mx-auto" style={{ height: '300px' }} alt="Slide 2" />
          
        </div>
        <div className="carousel-item">
          <img src="https://images.shiksha.com/mediadata/images/1580977964phpWNAero.jpeg" className="d-block w-100 mx-auto" style={{ height: '300px' }} alt="Slide 3" />
          
        </div>
      </div>
      
    </div>
  );
}

export default Slider;
