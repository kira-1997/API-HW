let colors = ['#FF6633', '#FFB399', '#FF33FF', '#FFFF99', '#00B3E6', 
'#E6B333', '#3366E6', '#999966', '#99FF99', '#B34D4D',
'#80B300', '#809900', '#E6B3B3', '#6680B3', '#66991A', 
'#FF99E6', '#CCFF1A', '#FF1A66', '#E6331A', '#33FFCC']
function api(){
  fetch('https://rickandmortyapi.com/api/character',{
    method: "get"
  })
    
     .then(response=>response.json())
     .then(data =>{
         for(let i=0; i<data.results.length;i++){
            console.log(data.results.length)
            let getData=document.getElementById('container')
            let res=document.createElement('div')
            res.className="box"
            res.style.backgroundColor=colors[i]
            res.style.color=colors[data.results.length-i]
            res.style.fontWeight='bolder'
            res.style.fontSize='x-large'
            res.style.textShadow='1px 0px 2px  black'
            res.innerHTML= data.results[i].name
            let pic=document.createElement('img')
            pic.src=data.results[i].image
            console.log(data.results[i].name);
            res.appendChild(pic)
            getData.appendChild(res)
            

         }



     })


}

api() 


/* api url
const api_url = 
	"https://employeedetails.free.beeceptor.com/my/api/path";

// Defining async function
async function getapi(url) {

	// Storing response
	const response = await fetch(url);

	// Storing data in form of JSON
	var data = await response.json();
	console.log(data);
	if (response) {
		hideloader();
	}
	show(data);
}
// Calling that async function
getapi(api_url);

// Function to hide the loader
function hideloader() {
	document.getElementById('loading').style.display = 'none';
}
// Function to define innerHTML for HTML table
function show(data) {
	let tab = 
		`<tr>
		<th>Name</th>
		<th>Office</th>
		<th>Position</th>
		<th>Salary</th>
		</tr>`;

	// Loop to access all rows 
	for (let r of data.list) {
		tab += `<tr> 
	<td>${r.name} </td>
	<td>${r.office}</td>
	<td>${r.position}</td> 
	<td>${r.salary}</td>		 
</tr>`;
	}
	// Setting innerHTML as tab variable
	document.getElementById("employees").innerHTML = tab;
}*/
