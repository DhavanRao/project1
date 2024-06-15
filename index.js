// wap to check given number is prime or not
let num = 77;
if(num==1)
    {
        console.log("unique number");
    }
    for(let i=2;i<=num/2;i++)
        {
            if(num%i==0)
                {
                    flag=0;
                }
        }
        if(num!=1)
            {
                if (flag==0)
                    {
                        console.log("non prime");
                    }
                    else
                    console.log("Prime number");
                    
            }