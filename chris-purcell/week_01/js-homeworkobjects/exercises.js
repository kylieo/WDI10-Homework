var rectangle = {
	leng: 4,
	wid: 4
};

var isSquare = function(){
	if (rectangle.leng === rectangle.wid){
		return "this is a square";
	} else {
		return "not a square";
	}
}

var areaRect = function(){
	var answer = rectangle.leng * rectangle.wid;
	return answer;
}

var perimRect = function(){
	var answer = ((rectangle.leng * 2) + (rectangle.wid * 2))
	return answer;
}

var triangle = {
	sideA: 3,
	sideB: 4,
	sideC: 4
};

var isEquilateral = function(){
	var answer;
	if (triangle.sideA === triangle.sideB && triangle.sideB === triangle.sideC){
		return "yes this is equilateral";
	} else {
		return "this is not an equilateral";
	}
}

var isIsoscelese = function(){
	if (triangle.sideA === triangle.sideB && triangle.sideC){
		return "this is not isoscelese";
	} else if (triangle.sideB === triangle.sideC || triangle.sideA){
		return "yes this is isoscelese";
	} else {
		return "this is not isoscelese";
	}
}

var isIsoscelese2 = function(){
// created a function to check if the triangle object above is isosceles
// i want to check each side against one another to ensure that two sides match.
// if only 2 are equal then i want it to come back true.
// however if 3 sides are equal it must come back false.
	if ((!isEquilateral()) && (triangle.sideA === triangle.sideB || triangle.sideA === triangle.sideC || triangle.sideB === triangle.sideC)){
		return "this is isoscelese";
		}
}
	

var areaTriangle = function(){
	var answer = ((triangle.sideA/2) * triangle.sideB);
	return answer;
}

var isObtuse = function(){
//need to find the hypotenuse & see if the longest side of the triangle is greater than the hypotenuse, if it is this is obtuse.
// 
}

