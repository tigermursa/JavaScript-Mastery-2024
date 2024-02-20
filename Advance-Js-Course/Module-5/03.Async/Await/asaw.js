

// const someFunction = async () => {
//     const result = await  console.log("how are you");
// }

// someFunction()

//fetch("hlo").then(res=>res.json()).then(data => console.log(data))

const fetchUsers = async()=>{
    const res = await fetch("url");
    const data = await res.json();
    console.log(data);
}