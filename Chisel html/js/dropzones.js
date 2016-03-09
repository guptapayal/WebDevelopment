(function (interact) {
	//alert(abc);
     x=0;
	 flag=0;
	 d1=d2=d3=d4=d5=0;
	//var fitnessCal={};
	var temp = document.getElementById("calories");
	console.log("temp "+temp	);
	/*if(temp > 0)
	{
		var calories = document.getElementById('calories').innerHTML;
		console.log(calories);
		var protein = document.getElementById('protien').innerHTML;
		var carbs = document.getElementById('carbs').innerHTML;
	}
	else{
*/		var protein=0;
		var calories = 0;
		//console.log(calories);
		var carbs=0;
		var fat = 0;
	//}
	//fitnessCal['drag1']={'protein':10,'calories':50};
	var fitnessCal = {
          drag1: {
			  cal: 52,
			  fat:0.2,
			  carb:0.7,
			  prot: 11
         },
          drag2: {
           cal: 98,
		  fat:4.3,
		  carb:3.4,
		  prot: 11
          },
          drag3: {
            cal: 34,
			  fat:0.1,
			  carb:5,
			  prot: 3.4
          },
          drag4: {
            cal: 165,
			  fat:3.6,
			  carb:0,
			  prot: 31
          },
		  
        };
    
    'use strict';

    var position = {};
    
    // setup draggable elements.
    interact('.js-drag')
        .draggable(true)
		 
        .on('dragstart', function (event) {
            position.x = parseInt(event.target.dataset.x, 10) || 0;
            position.y = parseInt(event.target.dataset.y, 10) || 0;
			if(flag==1){
				 position.x =  0;
            	 position.y =  0;
			}
			 //console.log("dragstart"+event.target.dataset.x);
        })
		.restrict({
        drag: "parent",
        endOnly: true
    })
        .on('dragmove', function (event) {
            position.x += event.dx;
            position.y += event.dy;
           // console.log(position.x);
            event.target.dataset.x = position.x;
            event.target.dataset.y = position.y;
            event.target.style.webkitTransform = event.target.style.transform = 'translate(' + position.x + 'px, ' + position.y + 'px)';
        });

    // setup drop areas.
    // dropzone #1 accepts draggable #1
    //setupDropzone('#drop1', '#drag1');
	//setupDropzone('#drop1', '#drag2');
    // dropzone #2 accepts draggable #1 and #2
    setupDropzone('#drop1', '.js-drag');
    // every dropzone accepts draggable #3
    //setupDropzone('.js-drop', '#drag3');
	//setupDropzone('.js-drop', '#drag1');
	//setupDropzone('.js-drop', '#drag2');

    /**
     * Setup a given element as a dropzone.
     *
     * @param {HTMLElement|String} el
     * @param {String} accept
     */
    function setupDropzone(el, accept) {
        interact(el)
            .dropzone({
                accept: accept,
                ondropactivate: function (event) {
                    event.relatedTarget.classList.add('-drop-possible');
					  event.relatedTarget.classList.remove('-do-over');
                },
                ondropdeactivate: function (event) {
                    	event.relatedTarget.classList.remove('-drop-possible');
						event.relatedTarget.classList.add('-do-over');
						//console.log(event.relatedTarget.id);
						flag=1;
					//event.target.classList.add('-do-over');
                }
            })
            .on('dropactivate', function (event) {
               // console.log('activate', event);
                event.target.classList.add('-drop-possible');
                //event.target.textContent = 'Drop me here!';

            })
            .on('dropdeactivate', function (event) {
                //console.log('deactivate', event);
                event.target.classList.remove('-drop-possible');
				
               // event.target.textContent = 'Dropzone';
            })
            .on('dragenter', function (event) {
                event.target.classList.add('-drop-over');
                //event.relatedTarget.textContent = 'I\'m in';
            })
            .on('dragleave', function (event) {
				
                event.target.classList.remove('-drop-over');
				
                //event.relatedTarget.textContent = 'Drag me…';
            })
            .on('drop', function (event) {
					
					x++;
					getId=event.relatedTarget.id
					if(getId=="drag1"){
						
						did=document.getElementById('dragged1');
						did.className='dragged displayblock';
						if(did.children[0].innerHTML==0)
						{
							d1=0
						}
						d1++;
						did.children[0].innerHTML=d1;
						
					}
					else if(getId=="drag2"){
						
						did=document.getElementById('dragged2');
						did.className='dragged displayblock';
						if(did.children[0].innerHTML==0)
						{
							d2=0
						}
						d2++;
						did.children[0].innerHTML=d2;
					}
					else if(getId=="drag3"){
						
						did=document.getElementById('dragged3');
						did.className='dragged displayblock';
						if(did.children[0].innerHTML==0)
						{
							d3=0
						}
						d3++;
						did.children[0].innerHTML=d3;
					}
					else if(getId=="drag4"){
						did=document.getElementById('dragged4');
						did.className='dragged displayblock';
						if(did.children[0].innerHTML==0)
						{
							d4=0
						}
						d4++;
						did.children[0].innerHTML=d4;
					}
					else if(getId=="drag5"){
						did=document.getElementById('dragged5');
						did.className='dragged displayblock';
						if(did.children[0].innerHTML==0)
						{
							d5=0
						}
						d5++;
						did.children[0].innerHTML=d5;
					}
					var fitnessCalcualtor = fitnessCal[getId];
					calories = document.getElementById('calories').value;
					protein = document.getElementById('protien').value;
					carbs = document.getElementById('carbs').value;
					fat = document.getElementById('fat').value;
					console.log("drop "+calories);
					if(document.getElementById('calories').value==0){
					  calories = 0;
					  carbs = 0;
					  fat = 0;
					  protein = 0;
					}
					/*else if(document.getElementById('carbs').innerHTML==0){
					  carbs=0;
					}
					else if(document.getElementById('fat').innerHTML==0){
					  fat=0;
					}
					else if(document.getElementById('protien').innerHTML==0){
					  protein=0;
					}*/
					//console.log(fitnessCalcualtor.carb);
					console.log("prev "+calories);
					console.log("prev "+carbs);
					console.log("prev "+fat);
					console.log("prev "+protein);
					
					protein = parseFloat(protein) + fitnessCalcualtor.prot;
					calories = parseFloat(calories) +fitnessCalcualtor.cal;
					carbs = parseFloat(carbs) + fitnessCalcualtor.carb;
					fat = parseFloat(fat) + fitnessCalcualtor.fat;
					
					/*protein += fitnessCalcualtor.prot;
					calories += fitnessCalcualtor.cal;
					carbs += fitnessCalcualtor.carb;
					fat += fitnessCalcualtor.fat;*/
					
					
					var protein1 = protein.toFixed(1);
					//var calories1 = calories.toFixed(2);
					var carbs1 = carbs.toFixed(1);
					var fat1 = fat.toFixed(1);
					console.log(calories);
					console.log(carbs);
					console.log(fat);
					console.log(protein);
					
					( calories > 500) ? $("#cal_war").show() : $("#cal_war").hide();
					( carbs > 20) ? $("#carb_war").show() : $("#carb_war").hide();	
					( fat > 20) ? $("#fat_war").show() : $("#fat_war").hide();
					( protein > 60) ? $("#prot_war").show() : $("#prot_war").hide();	
					document.getElementById('calories').value=calories;
					document.getElementById('carbs').value=carbs1;
					document.getElementById('fat').value=fat1;
					document.getElementById('protien').value=protein1;
					document.getElementById('calories1').value=calories;
					document.getElementById('carbs1').value=carbs1;
					document.getElementById('fat1').value=fat1;
					document.getElementById('protien1').value=protein1;
                	event.target.classList.remove('-drop-over');
					
				
            });
			
			
    }

}(window.interact));
