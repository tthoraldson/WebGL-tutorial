// stats.js
var stats = new Stats();
stats.showPanel( 1 ); // 0: fps, 1: ms, 2: mb, 3+: custom
document.body.appendChild( stats.dom );

function animate() {

	stats.begin();
	stats.end();

	requestAnimationFrame( animate );

}

requestAnimationFrame( animate );


var example = (function(){
  "use strict";

  // create a scene
  var scene = new THREE.Scene(),
  renderer = window.WebGLRenderingContext ? new THREE.WebGLRenderer() : new THREE.CanvasRenderer(),
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

    box = new THREE.Mesh(
      new THREE.BoxGeometry(20, 20, 20),
      new THREE.MeshBasicMaterial({ color: 0x2E4272 })
    );

    box.name = "box";
    scene.add(box);

    render()
  }

  function render(){
    box.rotation.y += 0.01;
    box.rotation.x += 0.01;

    renderer.render(scene, camera);
    requestAnimationFrame(render);
  }

  window.onload = initScene;

  return {
    scene: scene
  }
})();

function degreesToRadians(degree){
  return degree * (3.14159 / 180)
}
