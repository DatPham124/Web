
function myFunction() {
    myVar = setTimeout(showPage, 2000);
}

function showPage() {
    document.getElementById("preloader").style.display = "none";
    document.getElementById("preloader-wrapper").style.display = "none";
    document.getElementById("preloader-inner").style.display = "none";
}
  

// Backtop
$(document).ready(function() {
    $(window).scroll(function() {
        if($(this).scrollTop()) {
            $('.backtop').fadeIn();
        } else {
            $('.backtop').fadeOut();
        }
    });
    // $(".backtop").click(function() {
    //     $('html').animate({scrollTop: 0}, 500);
    // });
});

// Thanh tìm kiếm
function TKP(event)
{
    var p= event.which || event.keyCode;
    if(p==32)
        Search-Tim();
}

function Tim()
{
    var frm= document.forms["search-form"];
    if(frm.contents.value.length>=1) frm.submit();
}

function TimKiem()
{
    var url = new URL(window.location);
    var ct = url.searchParams.get("contents");
    document.getElementById("detail").innerHTML="<p>Bạn đang tìm kiếm: \"<b>"+ct+"</b>\"</p>";
}


//tương tác với sản phẩm

function heartAct() {
    let heartIcon = document.querySelectorAll('.heart-icon-empty');   
    let heartIconRed = document.querySelectorAll('.heart-icon-full');
    let i;

    for(i = 0; i<heartIcon.length; i++) {
        let a = i;
        heartIcon[i].onclick = function() {
            
            heartIcon[a].style.display = 'none';
            heartIconRed[a].style.display= 'inline-block';
        }
    }

    for(i = 0; i<heartIconRed.length; i++) {
        let a = i;
        heartIconRed[i].onclick = function() { 
            heartIconRed[a].style.display = 'none';
            heartIcon[a].style.display= 'inline-block';
        }
    }
    
}

heartAct();

const showCart = document.querySelector('header .header_cart');
const hiddenCart = document.querySelector('.cart_exit-icon');
const payCart =  document.querySelector('.cart_pay-btn');

//hiện giỏ hàng
showCart.addEventListener('click', function() {
    document.querySelector("main .cart").style.right="0";
});

//ẩn giỏ hàng
hiddenCart.addEventListener('click', function(){
    document.querySelector("main .cart").style.right="-100%";
});

//thanh toán
payCart.addEventListener('click', function(){
    var cartItem = document.querySelectorAll('.cart tbody tr');
    if(cartItem.length >0) alert("Thanh toán thành công");
    else{
        alert("Không có sản phẩm nào");
    }
});

//Lấy các item của sản phẩm được chọn

let btn=document.querySelectorAll(".product-item_basket");

btn.forEach(function(button){
    button.addEventListener("click", function(event){
        var btnItem = event.target;
        var product = btnItem.parentElement.parentElement;
        var productImg= product.querySelector("img").src;
        var productName= product.querySelector(".product-item_name").innerText;
        var productPrice= product.querySelector(".product-item_price-current").innerText;
        productPrice= productPrice.slice(0,-1);
        console.log(productImg);
        addCart(productImg,productName,productPrice);

    })
})


// thêm sản phẩm vào giỏ hàng
function addCart(productImg,productName,productPrice){
    var addtr= document.createElement("tr");
    var cartItem = document.querySelectorAll('.cart tbody tr')
    for( var i=0;i<cartItem.length;i++){
        var productT= document.querySelectorAll('.cart tbody .cart_product-name')
             if(productT[i].innerText == productName){
                 alert("Sản phẩm của bạn đã có trong giỏ hàng")
                 return;
             }
    }
    var trcontent = '<td><img src="'+productImg+'" alt=""><p class="cart_product-name">'+productName+'</p></td><td> <span class="cart_product-price"><h4>'+productPrice+'<small><sub><u>đ</u></sub></small></h4></span></td><td><input class="cart_product-quantity" type="number" value="1" min="1"></td><td class="cart_delete-icon"><i class="fa-solid fa-trash"></i></td>'
    addtr.innerHTML= trcontent;
    var cartTable = document.querySelector(".cart tbody");
    cartTable.append(addtr);
    alert("Đã thêm sản phẩm vào giỏ hàng");
    totalCart();
    deleteCart();
    
}   

//Tính tổng

function totalCart() {
    var cartItem = document.querySelectorAll(" .cart tbody tr");
    var total=0;
    for(var i = 0; i<cartItem.length; i++) {
        var inputValue = cartItem[i].querySelector(".cart .cart_product-quantity").value;
        inputValue = Number(inputValue);
        var price = cartItem[i].querySelector(".cart tbody .cart_product-price h4").innerText;
        price= price.slice(0,-1);
        price = parseFloat(price, 10);
        var totalB = price*inputValue*1000000;
        total = total +totalB;
           }
    inputchange();
    var cartTotal = document.querySelector('.cart .price-total h4');
    var tail = '<small><sub><u>đ</u></sub></small>';
    
    cartTotal.innerHTML= total.toLocaleString('de-DE') + tail;
   
    //Thêm số lượng vào nút giỏ hàng
    var cartQuantity = document.querySelector(".header_cart-quantity");
    console.log(cartItem.length);
    if(cartItem.length> 0) {
        cartQuantity.style.display= "flex";
        cartQuantity.innerHTML=cartItem.length;
    } else cartQuantity.style.display= "none";
     
    
}

//Xóa sản phẩm

function deleteCart(){
    var cartItem = document.querySelectorAll('.cart tbody tr')
    for( var i=0;i<cartItem.length;i++){
        var productT= document.querySelectorAll('.cart_delete-icon')
       productT[i].addEventListener("click",function(event){
        var cartDelete = event.target
        var cartitemT = cartDelete.parentElement.parentElement
        console.log(cartitemT);
        cartitemT.remove()
        totalCart()
       })
    } 
}

//Thay đổi số lượng của sản phẩm.
function inputchange(){
    var cartItem = document.querySelectorAll('.cart tbody tr')
    for( var i=0;i<cartItem.length;i++){
        var inputValue = cartItem[i].querySelector('.cart input')
         inputValue.addEventListener("change",function(){
            totalCart()
         })
       }
       
}

