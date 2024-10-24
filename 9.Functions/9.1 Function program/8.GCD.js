/define a function to calculate gcd of two numbers
//pg73

function gcd(a,b)
{
    while(b!=0)
    {
        r=a%b
        a=b
        b=r
    }
    return a
}
console.log(gcd(120,25))
