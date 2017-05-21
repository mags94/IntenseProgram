// quicksort function 
function quickSort(arr,start,end){
	if(start<end){
	pindex=partition(arr,start,end)
	quickSort(arr,start,pindex-1)
	quickSort(arr,pindex+1,end)
}
	return arr
}
function partition(arr,start,end){
	pindex=start
	for(i=start;i<end;i++)
	{
			if(arr[i]<=arr[end]){
				temp=arr[i]
				arr[i]=arr[pindex]
				arr[pindex]=temp
				pindex++
			}
	}
	tempindex=arr[end]
	arr[end]=arr[pindex]
	arr[pindex]=tempindex
	return pindex

}
numbers = [13, 99, 69, 73, 16, 97, 0, 42, 14, 27];


strings = [
'bsraq',
'haysk',
'vlnbb',
'suxdq',
'ljpgw',
'ucwph',
'jwieu',
'wdovf',
'ijapc',
'jvixx'
];

objects = [
{'x': 3, 'y': 'xpggm'},
{'x': 4, 'y': 'qlqip'},
{'x': 6, 'y': 'xvlrt'},
{'x': 7, 'y': 'fkdbd'},
{'x': 0, 'y': 'rfvvc'},
{'x': 1, 'y': 'scsfd'},
{'x': 8, 'y': 'wrcdm'},
{'x': 5, 'y': 'vuedf'},
{'x': 2, 'y': 'wtstr'},
{'x': 9, 'y': 'pnsgf'}
];




// outputs

// numbers: 
var start=0
var end=numbers.length-1
console.log(quickSort(numbers,start,end))

// strings
var start=0
var end=strings.length-1
console.log(quickSort(strings,start,end))

// objects
// Case 1: Sort by 'x'
var start=0
var end=objects.length-1
var arr=[]
for(j=0;j<=end;j++){
	 arr.push(objects[j].x)
}

	//var temparr=quickSort(arr,start,end)
//for(i=0;i<=end;i++){
//	document.write(temparr[i]+"\n")}
	

console.log(quickSort(arr,start,end))

// Case 2: Sort by 'y'
var start=0
var end=objects.length-1
var arr=[]
for(j=0;j<=end;j++){
	 arr.push(objects[j].y)
	}
	//var temparr=quickSort(arr,start,end)
//for(i=0;i<=end;i++){
//	document.write(temparr[i]+"\n")}
console.log(quickSort(arr,start,end))