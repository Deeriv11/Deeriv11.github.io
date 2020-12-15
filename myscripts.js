const TAU = Zdog.TAU;
const offWhite = '#FED';
const gold = '#EA0';
const garnet = '#C25';
const eggplant = '#636';

const illo = new Zdog.Illustration({
  element: '.zdog-canvas',
  zoom: 5,
  rotate: { y: -TAU/8 },
  dragRotate: true,
});



var hipX = 3;

var hips = new Zdog.Shape({
  addTo: illo,
  path: [ { x: -hipX }, { x: hipX } ],
  translate: { y: 2 },
  stroke: 4,
  color: eggplant,
});



var leg = new Zdog.Shape({
  addTo: hips,
  path: [ { y: 0 }, { y: 12 } ],
  translate: { x: -hipX },
  rotate: { x: TAU/4 },
  color: eggplant,
  stroke: 4,
});


var foot = new Zdog.RoundedRect({
  addTo: leg,
  width: 2,
  height: 4,
  cornerRadius: 1,
  translate: { y: 14, z: 2 },
  rotate: { x: TAU/4 },
  color: garnet,
  fill: true,
  stroke: 4,
});

var standLeg = leg.copy({
  translate: { x: hipX },
  rotate: { x: -TAU/8 },
});

foot.copy({
  addTo: standLeg,
  rotate: { x: -TAU/8 },
});



var spine = new Zdog.Anchor({
  addTo: hips,
  rotate: { x: TAU/8 },
});

var chest = new Zdog.Shape({
  addTo: spine,
  path: [ { x: -1.5 }, { x: 1.5 } ],
  translate: { y: -6.5 },
  stroke: 9,
  color: garnet,
});

var head = new Zdog.Shape({
  addTo: chest,
  stroke: 12,
  translate: { y: -9.5 },
  color: gold,
});

var eye = new Zdog.Ellipse({
  addTo: head,
  diameter: 2,
  quarters: 2,
  translate: { x: -2, y: 1, z: 4.5 },
  rotate: { z: -TAU/4 },
  color: eggplant,
  stroke: 0.5,
  backface: false,
});
eye.copy({
  translate: { x: 2, y: 1, z: 4.5 },
});

new Zdog.Ellipse({
  addTo: head,
  diameter: 3,
  quarters: 2,
  translate: { y: 2.5, z: 4.5 },
  rotate: { z: TAU/4 },
  closed: true,
  color: '#FED',
  stroke: 0.5,
  fill: true,
  backface: false,
});



var armSize = 6;


var upperArm = new Zdog.Shape({
  addTo: chest,
  path: [ { y: 0 }, { y: armSize } ],
  translate: { x: -5, y: -2 },
  rotate: { x: -TAU/4 },
  color: eggplant,
  stroke: 4,
});

var forearm = new Zdog.Shape({
  addTo: upperArm,
  path: [ { y: 0 }, { y: armSize } ],
  translate: { y: armSize },
  rotate: { x: TAU/8 },
  color: gold,
  stroke: 4,
});


new Zdog.Shape({
  addTo: forearm,
  translate: { z: 1, y: armSize },
  stroke: 6,
  color: gold,
});


upperArm.copyGraph({
  translate: { x: 5, y: -2 },
  rotate: { x: TAU/4 },
});

function animate() {
  illo.updateRenderGraph();
  requestAnimationFrame( animate );
}

animate();

let animation = anime({
              targets: "#ann",
              translateX: 150,
              height: "100px",
              width: "1200px",
              duration: 2000,
              easing: "linear",
              direction: "alternate",
              loop: true,
          });


function lighton() {
  document.getElementById('myimage').src = "blubon.jpg";
}
function lightoff() {
  document.getElementById('myimage').src = "bluboff.jpg";
}


function changeImage() {
            var image = document.getElementById('myself');
            if (image.src.match("myself.jpg")) {
                image.src = "myself2.jpg";
            }
            else {
                image.src = "myself.jpg";
            }
        }


var imgObj = null;
           var animate ;

           function init() {
              imgObj = document.getElementById('mario');
              imgObj.style.position= 'relative';
              imgObj.style.left = '0px';
           }
           function moveRight() {
              imgObj.style.left = parseInt(imgObj.style.left) + 10 + 'px';
              animate = setTimeout(moveRight,20);    // call moveRight in 20msec
           }
           function stop() {
              clearTimeout(animate);
              imgObj.style.left = '0px';
           }

           window.onload = init;
