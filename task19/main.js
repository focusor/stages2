// Insertion sort
// 添加数字到array
// 长方形的高度应该是20*input
var numList = new Array;

Number.prototype.between = function (min, max) {
    return this >= min && this <=  max;
};

/* 
* check input: number within 10-100
*/ 
function testInput(input){
	// return isNaN(input);
	var reg = /\d+.\d*/;
	console.log(input);
	console.log(typeof input);
	//input = parseInt()
	if (reg.test(input) == false) {
		alert("not a number");
		return false;
	}
	if ((Number(input).between(10, 100)) == false) {
		alert("not between range");
		return false;
	}
	return true;
}
/*
* 限制输入的数字在10-100
* 队列元素数量最多限制为60个，当超过60个时，添加元素时alert出提示
* Add input to numList
*/
function add(){
	var input = document.getElementsByTagName("input")[0];
	if (testInput(input.value) == false) {
		alert("请输入10-100中的数字。")
	} else {
		if (numList.length == 60) {
			alert("添加数目超过60个，不能再添加了。")
		} else { 
			numList.push(input.value);
		}
		render();
	}
}

/*
* Insertion Sort numList
*/
function sort(){
	var len = numList.length;

	for (var i=0;i<len;i++){
		var tmp = numList[i]; // current element

		for (var j=i-1; j>=0&&(numList[j]>tmp);j--){
			numList[j+1] = numList[j];
		}
		numList[j+1] = tmp;
	}

	console.log(numList);
	render();
}

/*
* Render numlist to red blocks
*/
function render(){
	//console.log(numList);
	var boxList = document.getElementById("boxList");
	boxList.innerHTML = "";
	for (var i=0;i<numList.length;i++){
		var newBlock = document.createElement("div");
		newBlock.style.height = 10*numList[i]+"px";
		newBlock.className = "redbox";
		boxList.appendChild(newBlock);
	}
}