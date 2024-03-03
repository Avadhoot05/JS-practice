
Array.prototype.CustomArrayFlat = function()
{
	if(!Array.isArray(this))
  	throw new Error(this+ "is not an array");
		  
  
	let res = [];
	for(let el of this)
  {
  	if(Array.isArray(el))
    {
    	res = res.concat(el.CustomArrayFlat());
    }
    else
    {
    	res.push(el);
    }
  }
  
  return res;
}

const arr1 = [];
const arr2 = [1,2,3];
const arr3 = [1,2,[3,4,[5],6],7];
const arr4 = [1,2,{name:"Avadhoot", surname : "khedekar"},[3,4],[]];

console.log(arr1.CustomArrayFlat());
console.log(arr2.CustomArrayFlat());
console.log(arr3.CustomArrayFlat());
console.log(arr4.CustomArrayFlat());


