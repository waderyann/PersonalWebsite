// try turning this up to 10, 100, 1000...
let speed = 1;
let empty = 0;
let plantgrow = 0.5;
let plant = 1;

let dimx = 10, dimy = 10;
let field = new field2D(dimx, dimy);
let fieldnext = new field2D(dimx, dimy);
//let field_copy = field.clone();
let count = 1;

// turn it black
field.set(0)

// starting position:
let antx;
let anty;
let plantx = dimx/2;
let planty = dimy/2;

let direction = 0;

// how to render the scene
function draw()	{
	// draw the field:
	field.draw()

}

// update the state of the scene.
function update(dt) {
  antx = random(dimx);
  anty = random(dimy);
  //count = count +1;
  //console.Log(count);


    let N = field.get(antx, anty-1);
    let NE = field.get(antx+1, anty-1);
    let E = field.get(antx+1, anty);
    let SE = field.get(antx+1, anty+1);
    let S = field.get(antx, anty+1);
    let SW = field.get(antx-1, anty+1);
    let W = field.get(antx-1, anty);
    let NW = field.get(antx-1, anty-1);
    let total = N+NE+E+SE+S+SW+W+NW;

  field.set(1,plantx,planty);

	for (let i = 1; i <= speed; i++) {

		// apply the rule.
		let C = fieldnext.get(antx, anty);
		if (C == 0){

			   fieldnext.set(1,antx, anty);



		} else if (C == 1) {

			fieldnext.set(0,antx, anty);
		}




	}

  /*let tmp = field_copy;
  field_copy = field;
  field = tmp;
  field.diffuse(field_copy, -0.001)*/
  let temp = fieldnext;
  fieldnext = field;
  field = temp;
}
