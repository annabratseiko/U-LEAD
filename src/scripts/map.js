var regions = document.querySelectorAll('.mapst0');

for (let i = 0; i < regions.length; i++) {
	regions[i].onclick = function() {
		for(let j = 0; j < regions.length; j++) {
			regions[j].classList.remove('active');
		}
		this.classList.add('active');
	}
}
