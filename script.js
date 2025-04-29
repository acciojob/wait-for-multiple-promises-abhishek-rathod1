//your JS code here. If required.
const tableBody = document.getElementById("output");
tableBody.innerHTML = `
<tr id="loading"><td colspan="2">Loading...</td></tr>

`

function promise1() {
	return new Promise((resolve, reject)=>{
			let time = Math.random()
		setTimeout(()=>{
			resolve(time*3)
		},time*3000)
	})
	
}

function promise2() {
	return new Promise((resolve, reject)=>{
			let time = Math.random()
		setTimeout(()=>{
			resolve(time*3)
		},time*3000)
	})
	
}

function promise3() {
	return new Promise((resolve, reject)=>{
			let time = Math.random();
		setTimeout(()=>{
			resolve(time*3)
		}, time*3000)
	})
	
}

Promise.all([promise1(), promise2(), promise3()]).then((data)=>{
	tableBody.innerHTML=`
	<tr><td>Promise 1</td><td>${data[0].toFixed(0)}</td></tr>
<tr><td>Promise 2</td><td>${data[1].toFixed(0)}</td></tr>
<tr><td>Promise 3</td><td>${data[2].toFixed(0)}</td></tr>
<tr><td><b>Total</b></td><td>${Math.max(...data).toFixed(3)}</td></tr>
`
	console.log(data);
}).catch((e)=>{
	console.log(e);
})


// ddddddfffsdsssff