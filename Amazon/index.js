// let deliver_div = document.querySelector(".deliver");

// console.log(deliver_div)

// deliver_div.addEventListener("mouseover",()=>{
//     deliver_div.style.border=" 1px solid white";
// })

// deliver_div.addEventListener("mouseout",()=>{
//     deliver_div.style.border="none";

// })

// let order_div = document.querySelector(".orders");
// order_div.addEventListener("mouseover",()=>{
//     order_div.style.border="1px solid white";

// })
// order_div.addEventListener("mouseout",()=>{
//     order_div.style.border="none";

// })

// let cat_div = document.querySelector(".categories");
// let child_of_cat = cat_div.children;
// console.log(child_of_cat);


// for( let i=0;i<child_of_cat.length;i++){

//     child_of_cat[i].addEventListener("mouseover",(e)=>{

//        // child_of_cat[i].classList.add("hoverEffect");

//         child_of_cat[i].style.border="1px solid white";
//     })
//     child_of_cat[i].addEventListener("mouseout",(e)=>{

//         child_of_cat[i].style.border="none";
//     })



// }



let fetch_data = fetch("https://dummyjson.com/products");
console.log(fetch_data);
let container_div = document.querySelector('.container')


async function fetching_data() {
    try {
        let res = await fetch("https://dummyjson.com/products");
        let data = await res.json();
        console.log(data);
        let productArr = data.products;
        productArr.map((ele)=>{
            container_div.innerHTML = container_div.innerHTML + `
            <div class="card">
            <div class="image-card">
            <img src="${ele.thumbnail}" alt="${ele.title}" srcset="">   
            </div>
             <div class="card-content">
             ${ele.title}
             </div>
            </div>  
            `;  

        })
             
    } catch (err) {
        console.log(err);
    }


}

fetching_data();