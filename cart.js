
const product =[
{
id:0,
image:'ph1.jpg',
title:'Iphone 11 Pro',
price:35000,
},
{
id: 1,
image:'ph4.jpg',
title:'Iphone 14 pro',
price:76000,
},
{
id: 2,
image:'ph3.jpg',
title: 'Iphone 13 pro',
price:64000,
},
{
id: 3,
image:'ph2.jpg',
title: 'Iphone 12 pro',
price:45000,
}
];
const categories =[...new Set(product.map((item)=>
{return item}))]
let i=0;
document.getElementById('root').innerHTML= categories.map((item)=>
{
var { image,title,price}=item;
return(
`<div class='box'>
<div class='img-box'>
<img class='images' src=${image}></img>
</div>
<div class='bottom'>
<p>${title}</p>
<h2>Rs ${price}.00</h2>`+
"<button onClick='addtocart("+(i++)+")'>Add to cart</button>"+
`
<a href="payment.html">
<button>Buy Now</button></div></a>

</div>`
)
}).join('')
var cart=[];
 
function addtocart(a){
    cart.push({...categories[a]});
    displaycart();
}
function delElement(a){
    cart.splice(a,1);
    displaycart(); 
}

function displaycart(a){
    let j=0,total=0;
    document.getElementById("count").innerHTML=cart.length;
    if(cart.length==0){
        document.getElementById('cartItem').innerHTML="Your cart is empty!";
        document.getElementById("total").innerHTML="$ "+0+".00 ";
    }
    else{
        document.getElementById('cartItem').innerHTML= cart.map((items)=>
        {
            var{image,title,price}=items;
            total=total+price;
            document.getElementById("total").innerHTML="Rs "+total+".00";
            return(
                `<div class='cart-item'>
                <div class='row-img'>
                <img class='rowimg' src=${image}>
                </div>
                <p style='font-size:17px;'> ${title}</p>
                <h2 style='font-size:15px;'> Rs ${price}.00</h2>`+
                "<i class='bx bxs-trash-alt' onClick= 'delElement(${index})'></i></div>"

            );
        }).join('');
    }


}







