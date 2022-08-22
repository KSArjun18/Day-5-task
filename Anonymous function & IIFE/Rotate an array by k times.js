//IIFE :

(function(f,k){
    n=f.length;
 c=[];
  d="";
  for(i=0;i<n;i++)
  {
      c[(i+k)%(n)]=f[i]
  }
  for(i=0;i<c.length-1;i++)
  {
      d+=c[i]+" "
  }
  d+=c[c.length-1]
  console.log(d);
}) ([1,2,3,4,5],3);


//Anonymoys :

var arr=function(f){
    var g=[];
    var n=f.length;
    for(let i=0;i<n-1;i++)
    {
        for(let j=i+1;j<n;j++)
        {
            if(f[i]===f[j])
            {
                delete f[j]
            }
        }
    }
    for(let i=0;i<f.length;i++)
    {
        if(f[i]%10===Math.floor(f[i]%10))
        {
            g.push(f[i])
        }
    }
    let c=""
    for(let i=0;i<g.length-1;i++)
     {
         c+=g[i]+" ";
    }
    c+=g[g.length-1];
     return c;
    
}
console.log(arr([1,1,4,5,8,9,6,9,5,6,6,7,]));

