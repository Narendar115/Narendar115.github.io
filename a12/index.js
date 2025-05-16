const objects=[
    {id:1, name:"product1",price:20},
    {id:1, name: "product2",price:30},
    {id:1, name: "product3",price:40},
]
objects.forEach((value)=>{
    // console.log(value.name)
    value.price=value.price+5;
    console.log(value.name+" "+value.price);
})
