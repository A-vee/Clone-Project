
function clse()
{
    var div = document.getElementById('display');
    var div1 = document.getElementById('display1');
   
    div1.style.display ="none";
    div.style.display ="none";
    
}




function display()
{


var div = document.getElementById("display");
var username = document.getElementById("username");
var pass = document.getElementById("password");
var no = document.getElementById("number");
var e = document.getElementById("email");

if (username.value !== "" && pass.value !== "" && e.value.includes('@') && no.value.length === 10) {
    div.style.display = "flex";
}
else if(username.value===""){
div.style.display = "none";
alert("Enter the username first")
}

else if(pass.value===""){
div.style.display = "none";
alert("Enter Password ")
}

else {
div.style.display = "none";
alert("Enter the credentials properly the error is due to may you haven't enter the mobile no or may be email properly")
}


}

function display1()
{

var div = document.getElementById("display1");

div.style.display = "flex";



}

let tl3=gsap.timeline();
function time()
{
  
    
        tl3.to("#loader",
{
delay:2,
duration:5,
opacity:0
})
tl3.to("#loader",
{
    duration:1,
    height:"-100vh"
})
   
}


time()
  
 



// nav drop down

        var click=document.querySelector("#drop2")
        var click1=document.querySelector("#bar")
        var b=0;
        let tl=gsap.timeline()
   {
    defaults:{
        duration:0.1 
    }
   }
        click.addEventListener("click",()=>
        {
            if(b==0)
        {
            gsap.to("#drop2",
            {
                duration:0.01,
                height:"200px",
                ease: "elastic",
                
            })
            gsap.to("#drop2 ul",
            {
                ease:"Power3.in(2,1)",
                
                display:"block"
            })
    
            b++;
        }
        else
        {
            tl.to("#drop2 ul",
            {
                display:"none"
            })

            tl.to("#drop2",
            {
              
                height:"40px",
                ease:"Power3.in(2,1)",
               
            })
            


            
            b=0;
        }
        });
        


// bottom bar profile card

        click1.addEventListener("click",()=>
        {
            if(b==0)
        {
           gsap.to(".profile-card",
            {
                opacity:1
            })
            gsap.to(".bottom #profile",
            {
                duration:0.3,
                height:"300px",
                opacity:1,
                ease:"Power2.easeInOut",
                y:0
              
            })
            
            
            b++;
        }
        else
        {
            gsap.to(".profile-card",
            {
                duration:0.3,
                opacity:0
            })
            gsap.to(".bottom #profile",
            {
                duration:0.3,
                ease:"Power3.in(1,2)",
                opacity:0,
                y:100,
                height:"40px"
            })
           
          
           
            
           
            
            b=0;
        }
        });
       



