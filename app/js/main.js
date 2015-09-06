;( function(){

  'use strict';

  var retina = "http://dsx.weather.com/util/image/w/68a62f4e-122e-4c72-91b2-ec9f5024e031.jpg?api=7db9fe61-7414-47b5-9871-e17d87b8b6a0&h=598&w=640&v=at";

  if(window.devicePixelRatio > 1){

    $('.image').attr({
      src: retina
    });

  }



}());
