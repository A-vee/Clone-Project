



let tl3=gsap.timeline();
function time()
{
    let a=0;
    setInterval(()=>
    {
    
        tl3.to("#loader",
{
delay:2,
duration:7,
opacity:0
})
tl3.to("#loader",
{
    height:"-100vh"
})
   
    },800)
}


time()
  
 





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
       




        