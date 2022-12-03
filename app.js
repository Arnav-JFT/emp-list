let data = new employee()
let arr = []
let count =0;
let currId
document.querySelector("form").addEventListener("submit",async (e)=>{
    e.preventDefault()
    let name = document.getElementById("name").value
    let job = document.getElementById("job").value
    let salary = document.getElementById("salary").value
    let obj = {
        id:++count,
        name,
        job,
        salary
    }

    if(document.getElementById("btn").innerHTML === 'Update'){
        let arr = await data.put(currId,name,job,salary)
        show(arr)
        clear()
        document.getElementById("btn").innerHTML = "Add"
    }
    else {
        save(obj) 
        clear()
    }  
    function clear() {
        document.getElementById("name").value = ""
        document.getElementById("job").value = ""
        document.getElementById("salary").value =""
    }
})

async function save(obj) {
    let arr = await data.post(obj)
    show(arr)
   
}
async function remove(id){
   let arr = await data.remove(id)
   show(arr)
}

async function update(id){
    document.getElementById("btn").innerHTML = "Update"
    let e = await data.get(id)

        document.getElementById("name").value = e.name
        document.getElementById("job").value = e.job
        document.getElementById("salary").value = e.salary
    

    currId = id-1
}


function show(arr){
    document.getElementById("main").innerHTML = 
    "<table><tr> <th>Name</th><th>Job</th><th>Salary</th><th>Action</th></tr>" + arr.map(ele=>{
        return `
        <tr>
          <td>${ele.name}</td>
          <td>${ele.job}</td>
          <td>${ele.salary}</td>
          <td><button onclick="update(${ele.id})">edit</button> <button onclick="remove(${ele.id})"> Delete</button></td>
        </tr>`
        
    }).join("")+
    "</table>"
} 

function get(){
    data.get().then(e => console.log(e)).catch(err => console.log(err))
}