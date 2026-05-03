function startsite(){
    let name=document.getElementById("username").value.trim();
    if(name==""){
        alert("Please enter your Name");
        return;
    }
    localStorage.setItem("username",name);
    document.getElementById("popup").style.display="none";
    document.getElementById("greetings").innerHTML="Hello "+name;
}
window.onload=function(){
    let saved=this.localStorage.getItem("username");
    if(saved){
        document.getElementById("popup").style.display="none";
        document.getElementById("greetings").innerHTML="Hello "+saved;

    }
    
    showExpenses();
    getTotalExpenses();
    getTotalAmount();
    getTodayTotal();
    getTotalBudget();
    showExpenses();
}
function dash(){
    document.getElementById("dashboard").style.display="block";
    document.getElementById("dashboard").style.textAlign="center";
    document.getElementById("addexpense").style.display="none";
    document.getElementById("all").style.display="none";
    document.getElementById("budget").style.display="none";
    
}
function add(){
    document.getElementById("dashboard").style.display="none";
    document.getElementById("addexpense").style.display="block";
    document.getElementById("addexpense").style.textAlign="center";
    document.getElementById("all").style.display="none";
    document.getElementById("budget").style.display="none";
    
}
function trans(){
    document.getElementById("dashboard").style.display="none";
    document.getElementById("addexpense").style.display="none";
    document.getElementById("all").style.display="block";
    document.getElementById("all").style.textAlign="center";
    document.getElementById("budget").style.display="none";
    
}
function report(){
    document.getElementById("dashboard").style.display="none";
    document.getElementById("addexpense").style.display="none";
    document.getElementById("all").style.display="none";
    document.getElementById("budget").style.display="block";
    document.getElementById("budget").style.textAlign="center";
    
}
let expenses=JSON.parse(localStorage.getItem("expenses"))|| [];


function addd(){
    let a=document.getElementById("name").value.trim();
    let b=document.getElementById("amount").value.trim();
    let c=document.getElementById("cat").value.trim();
    let d=document.getElementById("date").value.trim();
    if(a==""||b==""||c==""||d==""){
        alert("Fill all fields");
        return;
    }
    let expense={
        a:a,
        b:b,
        c:c,
        d:d
    };
    expenses.push(expense);
    localStorage.setItem("expenses",JSON.stringify(expenses));
    showExpenses();
    document.getElementById("name").value="";
    document.getElementById("amount").value="";
    document.getElementById("cat").value="";
    document.getElementById("date").value="";
}
function showExpenses(){
    let a1=document.getElementById("transa");
    a1.innerHTML="";
    expenses.forEach((item,index)=>{
        a1.innerHTML+=`
        <div class="das">
        <p><b> Name of Expense:</b> ${item.a}</p>
        <p><b> Amount:</b> ${item.b}</p>
        <p><b> Category:</b> ${item.c}</p>
        <p><b> Date:</b> ${item.d}</p>
        <button onclick="deleteexpenses(${index})">Delete X</button>
        </div>`;  
    });
    getTotalAmount();
    getTotalExpenses();
    getTodayTotal();
}
function deleteexpenses(index){
    expenses.splice(index,1);
    localStorage.setItem("expenses",JSON.stringify(expenses));
    getTotalAmount();
    getTotalExpenses();
    getTodayTotal();
    showExpenses();
}
function getTotalAmount(){
    let t1=0;
    expenses.forEach(item=>{
        t1+=Number(item.b);
    });
    document.getElementById("month").innerHTML=t1;
    return t1;
}
function getTotalExpenses(){
    let total=0;
    expenses.forEach(item=>{
        total+=1;
    });
    document.getElementById("expense").innerHTML=total;
}
function getTodayTotal(){
    let today=new Date().toISOString().split("T")[0];
    let t=0;
    expenses.forEach(item=>{
        if(item.d==today){
            t+=Number(item.b);
        }
    });
    document.getElementById("day").innerHTML=t;
}
function getTotalBudget(){
    const total=document.getElementById("tota");
    total.value=localStorage.getItem("total")|| "";
    total.oninput=function(){
        localStorage.setItem("total",total.value);
    };
    let bud=document.getElementById("tota").value.trim();
   let tt= getTotalAmount();
   if(tt<=bud){
        document.getElementById("totall").innerHTML=(tt);
        
        let as=((bud-tt)/bud)*100;
    document.getElementById("percent").innerHTML=as.toFixed(3)+"%";
}
    
   else{
    document.getElementById("totall").innerHTML=tt;
    document.getElementById("percent").innerHTML="exceeds budget by "+-(bud-tt);
   }
}
function menuf(){
    document.getElementById("menuwhite").style.display="none";
    document.getElementById("crosswhite").style.display="block";
    document.getElementsByClassName("links")[0].style.left="2%";
}
function menus(){
    document.getElementById("menublack").style.display="none";
    document.getElementById("crossblack").style.display="block";
    document.getElementsByClassName("links")[0].style.left="2%";
}
function crossf(){
    document.getElementById("menuwhite").style.display="block";
    document.getElementById("crosswhite").style.display="none";
    document.getElementsByClassName("links")[0].style.left="100%";
}
function crosss(){
    document.getElementById("menublack").style.display="block";
    document.getElementById("crossblack").style.display="none";
    document.getElementsByClassName("links")[0].style.left="100%";
}
function dark(){
    document.getElementById("greetings").style.color="rgb(16, 177, 177)";
    let num=document.getElementsByClassName("num");
    for( let i=0;i<num.length;i++){
        num[i].style.color="rgb(16, 177, 177)";

    }
    document.getElementById("dark").style.display="none";
    document.getElementById("light").style.display="block";
    document.getElementById("ligh").style.display="block";
    document.getElementById("dar").style.display="none";
    document.body.style.backgroundColor="rgb(4, 121, 93)";
    // document.body.style.backgroundColor="rgb(7, 177, 177)";
    document.getElementsByTagName("nav")[0].style.backgroundColor="black";
    let links=document.getElementsByTagName("a");
    for(let i=0;i<links.length;i++){
        links[i].style.color="rgb(154, 255, 231)";
    }
    let dash=document.getElementsByClassName("dashboard");
    for(let i=0;i<dash.length;i++){
        dash[i].style.backgroundColor="black";
        dash[i].style.color="rgb(154, 255, 231)";
    }
    document.getElementsByClassName("dashboard2")[0].style.backgroundColor="black";
    let inputs=document.getElementsByClassName("dashboard2")[0].getElementsByTagName("input");
    for(let i=0;i<inputs.length;i++){
        
        inputs[i].style.backgroundColor="black";
        inputs[i].style.color="rgb(59, 235, 194)";
        inputs[i].style.border="none";
        inputs[i].style.borderBottom="1px solid rgb(67, 219, 219)";
        inputs[i].classList.remove("new2-place");
        inputs[i].classList.add("newplace-color");
        inputs[i].style.setProperty(
            "--placeholder-color","rgb(67, 219, 219)"
        );    
    }
    document.getElementById("date").style.backgroundColor="black";
    document.getElementById("date").style.color="rgb(59, 235, 194)";
    document.getElementById("date").style.colorScheme="dark";

    let boxes=document.getElementsByClassName("das");
    for(let i=0;i<boxes.length;i++){
        boxes[i].style.backgroundColor="black";
        boxes[i].style.color="rgb(154, 255, 231)";
    }
   let inn=document.getElementById("tota");
   inn.style.backgroundColor="black";
   inn.classList.add("newplace-color");
   inn.style.color="white";
   inn.style.borderBottom="1px solid rgb(67, 219, 219)";
   
   let menuw=document.getElementById("menuwhite");
   let style1=window.getComputedStyle(menuw);
   if(style1.display=="block"){
    document.getElementById("menuwhite").style.display="none";
    document.getElementById("menublack").style.display="block";
    document.getElementsByClassName("links")[0].style.backgroundColor="black";
    let alin=document.getElementsByClassName("links")[0].getElementsByTagName("a");
    for(let i=0;i<alin.length;i++){
        alin[i].style.color="rgb(67, 219, 219)";
    }
   }
   else{
    document.getElementById("menublack").style.display="none";
    document.getElementById("menuwhite").style.display="none";
    }
    let crossw=document.getElementById("crosswhite");
   let style3=window.getComputedStyle(crossw);
   if(style3.display=="block"){
    document.getElementById("crosswhite").style.display="none";
    document.getElementById("crossblack").style.display="block";
    document.getElementsByClassName("links")[0].style.backgroundColor="black";
    let alin=document.getElementsByClassName("links")[0].getElementsByTagName("a");
    for(let i=0;i<alin.length;i++){
        alin[i].style.color="rgb(67, 219, 219)";
    }
   }
   else{
    document.getElementById("crossblack").style.display="none";
    document.getElementById("crosswhite").style.display="none";
    }
    document.getElementsByClassName("hide")[0].style.color="aqua";
}
function light(){
    document.getElementById("greetings").style.color="rgb(0, 94, 90)";
    let num=document.getElementsByClassName("num");
    for( let i=0;i<num.length;i++){
        num[i].style.color="rgb(0, 94, 90)";

    }
    document.getElementById("dar").style.display="block";
    document.getElementById("ligh").style.display="none";
    document.getElementById("light").style.display="none";
    document.getElementById("dark").style.display="block";
    document.body.style.backgroundColor="rgb(217, 248, 248)";
    document.getElementsByTagName("nav")[0].style.backgroundColor="rgb(255,255,255)";
    let links=document.getElementsByTagName("a");
    for(let i=0;i<links.length;i++){
        links[i].style.color="black";
    }
    let dash=document.getElementsByClassName("dashboard");
    for(let i=0;i<dash.length;i++){
        dash[i].style.backgroundColor="rgb(239, 252, 249)";
        dash[i].style.color="black";
    }
    document.getElementsByClassName("dashboard2")[0].style.backgroundColor="rgb(239, 252, 249)";
    document.getElementsByClassName("dashboard2")[0].style.color="white";
     let inputs=document.getElementsByClassName("dashboard2")[0].getElementsByTagName("input");
    for(let i=0;i<inputs.length;i++){
        inputs[i].classList.add("new2-place");
        inputs[i].style.color="black";
        inputs[i].style.backgroundColor="rgb(239, 252, 249)";
    }
    for(let i=0;i<inputs.length;i++){
        
        inputs[i].style.backgroundColor="rgb(239, 252, 249)";
        inputs[i].style.color="black";
        inputs[i].style.border="none";
        inputs[i].style.borderBottom="1px solid black";
        inputs[i].classList.remove("newplace-color");
        inputs[i].classList.add("new2-place");
        inputs[i].style.setProperty(
            "--placeholder-color","black"
        );   
    }
    document.getElementById("date").style.backgroundColor="rgb(239, 252, 249)";
    document.getElementById("date").style.color="black";
    document.getElementById("date").style.colorScheme="light";
    let boxes=document.getElementsByClassName("das");
    for(let i=0;i<boxes.length;i++){
        boxes[i].style.backgroundColor="rgb(239, 252, 249)";
        boxes[i].style.color="black";
    }
    let ino=document.getElementById("tota");
    ino.classList.remove("newplace-color");
    ino.classList.add("new2-place");
    ino.style.color="black";
   ino.style.backgroundColor="rgb(239, 252, 249)";
   ino.style.borderBottom="1px solid black";
let menub=document.getElementById("menublack");
   let style2=window.getComputedStyle(menub);
   if(style2.display=="block"){
    document.getElementById("menuwhite").style.display="block";
    document.getElementById("menublack").style.display="none";
    document.getElementsByClassName("links")[0].style.backgroundColor="rgb(245, 255, 254)";
    let ali=document.getElementsByClassName("links")[0].getElementsByTagName("a");
    for(let i=0;i<ali.length;i++){
        ali[i].style.color="black";
    }
   }
   else{
    document.getElementById("menublack").style.display="none";
    document.getElementById("menuwhite").style.display="none";

   }
   let crossb=document.getElementById("crossblack");
   let style4=window.getComputedStyle(crossb);
   if(style4.display=="block"){
    document.getElementById("crosswhite").style.display="block";
    document.getElementById("crossblack").style.display="none";
    document.getElementsByClassName("links")[0].style.backgroundColor="rgb(245, 255, 254)";
    let alin=document.getElementsByClassName("links")[0].getElementsByTagName("a");
    for(let i=0;i<alin.length;i++){
        alin[i].style.color="black";
    }
   }
   else{
    document.getElementById("crossblack").style.display="none";
    document.getElementById("crosswhite").style.display="none";
    }
   document.getElementsByClassName("hide")[0].style.color="rgb(50, 145, 140)";



}