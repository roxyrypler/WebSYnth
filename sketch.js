



function setup() {
	//createCanvas(720, 256);
	
	isOsc1Active = false;
	isOsc2Active = false;

	osc1 = new p5.TriOsc(); // set frequency and type
	osc1.amp(0.5);
	
	osc2 = new p5.TriOsc();
	osc2.amp(0.5);
	
	
	// osc 1 controllers
	oscSlider = createSlider(1, 880, 100);
  	oscSlider.position(20, 20);
	volumeSlider = createSlider(0, 1, 0.5, 0.001);
	volumeSlider.position(20, 80);
	osc1Button = createButton("Start/Stop");
	osc1Button.position(20, 120);
	osc1Button.mousePressed(ActivateOscOne);
	
	// osc 2 controllers
	osc2Slider = createSlider(40, 880, 100);
	osc2Slider.position(200, 20);
	osc2Volume = createSlider(0, 1, 0.5, 0.001);
	osc2Volume.position(200, 80);
	osc2Button = createButton("Start/Stop");
	osc2Button.position(200, 120);
	osc2Button.mousePressed(ActivateOscTwo);
}

function draw() {
	background(255);
	getAudioContext().resume();
	
	let oscFreq = oscSlider.value();
	let volumeSliderOsc = volumeSlider.value();
	
	let osc2Freq = osc2Slider.value();
	let osc2vOlumes = osc2Volume.value();
	
	OscOne(oscFreq, volumeSliderOsc);
	OscTwo(osc2Freq, osc2vOlumes);
}

function ActivateOscOne() {
	if (isOsc1Active == false) {
		isOsc1Active = true;
		osc1.start();
	}else {
		isOsc1Active = false;
		osc1.stop();
	}
}

function ActivateOscTwo() {
	if (isOsc2Active == false) {
		isOsc2Active = true;
		osc2.start();
	}else {
		isOsc2Active = false;
		osc2.stop();
	}
}

function OscOne(oscFreq, volume) {
	
	if (isOsc1Active == true) {

		let freq = oscFreq;
		osc1.freq(freq);

		let amp = volume;
		osc1.amp(amp);	
	}
}

function OscTwo(oscFreq, volume) {
	if (isOsc2Active == true) {
		let freq = oscFreq;
		osc2.freq(freq);

		let amp = volume;
		osc2.amp(amp);
	}
}