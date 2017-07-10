var example = (function(){
  "use strict";

  // create a scene
  var scene = new THREE.Scene(),
  renderer = new THREE.WebGLRenderer(),
  light = new THREE.AmbientLight(0xffffff),
  camera,
  box;

  // function to initiliaze scene
  function initScene(){
    renderer.setSize( window.innerWidth, window.innerHeight);
    document.getElementById('main').appendChild(renderer.domElement);

    scene.add(light);

    camera = new THREE.PerspectiveCamera(
      35,
      window.innerWidth / window.innerHeight,
      1,
      1000
    );

    camera.position.z = 100;
    scene.add(camera);
  }
})();
