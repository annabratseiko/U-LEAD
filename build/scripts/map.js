var regions = document.querySelectorAll('.mapst0');
var points = document.querySelectorAll('.mapst1');
var sidebar = document.querySelector('.header-map-sidebar');
var createDom = document.getElementById('create-value');
var populationDom = document.getElementById('population-value');
var workingDom = document.getElementById('working-value');
var imageDom = document.getElementById('image-value');
var titleDom = document.getElementById('title-value');
var timer;

for (let i = 0; i < regions.length; i++) {
	regions[i].onclick = function() {
		removeActiveClass(regions, this);
		redirectTo(regionsData, this);
	}
	regions[i].onmouseover = function() {
		clearTimeout(timer);
		sidebar.classList.add('hover');
		setInfo(regionsData, this);
	}
	regions[i].onmouseleave = function() {
		timer = setTimeout(function(){
			sidebar.classList.remove('hover');
		}, 100);
	}
}

for (let i = 0; i < points.length; i++) {
	points[i].onclick = function() {
		removeActiveClass(points, this);
		redirectTo(pointsData, this);
	}
	points[i].onmouseover = function() {
		clearTimeout(timer);
		sidebar.classList.add('hover');
		setInfo(pointsData, this);
	}
	points[i].onmouseleave = function() {
		timer = setTimeout(function(){
			sidebar.classList.remove('hover');
		}, 100);
	}
}

function removeActiveClass(array, item) {
	for(let i = 0; i < array.length; i++) {
		array[i].classList.remove('active');
	}
	item.classList.add('active');
}

function setInfo(array, item) {
	for(let i = 0; i < array.length; i++) {
		if (array[i].id === item.id) {
			imageDom.src = array[i].img;
			titleDom.textContent = array[i].name;
			createDom.textContent = array[i].est;
			populationDom.textContent = array[i].population;
			workingDom.textContent = array[i].working_places;
		}
	}
}

function redirectTo(array, item) {
	for(let i = 0; i < array.length; i++) {
		if (array[i].id === item.id) {
			window.location.href = array[i].link;
		}
	}
}