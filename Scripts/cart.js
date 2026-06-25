const CART_KEY='maldonadoCart';
const CHECKOUT_KEY='maldonadoCheckout';
const ORDER_KEY='maldonadoLastOrder';

const shippingMethods=[
  {id:'local_pickup',name:'Retiro en local',description:'Retira el pedido en Panadería Maldonado.',price:0},
  {id:'flat_rate',name:'Envío a domicilio',description:'Costo fijo dentro de Maldonado y alrededores.',price:140},
  {id:'free_shipping',name:'Envío gratis',description:'Disponible para pedidos mayores o iguales a $ 900.',price:0,minSubtotal:900}
];

const paymentMethods=[
  {id:'cod',name:'Pago contra entrega',description:'Abona en efectivo al recibir o retirar el pedido.'},
  {id:'bank_transfer',name:'Transferencia bancaria',description:'Se muestran los datos luego de confirmar el pedido.'},
  {id:'mercadopago',name:'Mercado Pago',description:'Integración demo. En producción se conecta a la pasarela.'}
];

function money(value){return Number(value||0).toFixed(2)}
function getCart(){return JSON.parse(localStorage.getItem(CART_KEY)||'[]')}
function saveCart(cart){localStorage.setItem(CART_KEY,JSON.stringify(cart));updateCartCount()}
function getSubtotal(){return getCart().reduce((s,x)=>s+(Number(x.price)*Number(x.qty)),0)}
function getCheckout(){return JSON.parse(localStorage.getItem(CHECKOUT_KEY)||'{}')}
function saveCheckout(data){localStorage.setItem(CHECKOUT_KEY,JSON.stringify(data))}
function getSelectedShippingMethod(){let saved=getCheckout().methodId||'local_pickup';let subtotal=getSubtotal();let method=shippingMethods.find(x=>x.id===saved)||shippingMethods[0];if(method.minSubtotal&&subtotal<method.minSubtotal){method=shippingMethods[1]}return method}
function getSelectedPaymentMethod(){let saved=getCheckout().paymentId||'cod';return paymentMethods.find(x=>x.id===saved)||paymentMethods[0]}
function getShippingCost(){let method=getSelectedShippingMethod();return method.price||0}
function getOrderTotal(){return getSubtotal()+getShippingCost()}

function addToCart(id,name,price){let cart=getCart();let item=cart.find(x=>x.id==id);if(item){item.qty++}else{cart.push({id,name,price:Number(price),qty:1})}saveCart(cart);alert('Producto agregado al carrito')}
function updateCartCount(){let count=getCart().reduce((s,x)=>s+x.qty,0);let el=document.getElementById('cartCount');if(el)el.textContent=count}

function renderCart(){let cart=getCart();let box=document.getElementById('cartItems');if(!box)return;if(cart.length===0){box.innerHTML='<p>Tu carrito está vacío.</p>'}else{box.innerHTML=cart.map((x,i)=>`<div class="cart-row"><div><strong>${x.name}</strong><br>Cantidad: ${x.qty}</div><div>$ ${money(x.price*x.qty)} <button type="button" onclick="removeItem(${i})">x</button></div></div>`).join('')}let total=document.getElementById('cartTotal');if(total)total.textContent=money(getSubtotal())}
function removeItem(i){let cart=getCart();cart.splice(i,1);saveCart(cart);renderCart();renderCheckout()}
function clearCart(){saveCart([]);localStorage.removeItem(CHECKOUT_KEY);renderCart();renderCheckout()}

function renderCheckout(){let cart=getCart();let cartBox=document.getElementById('checkoutCart');let shippingBox=document.getElementById('shippingMethods');let paymentBox=document.getElementById('paymentMethods');let subtotal=getSubtotal();if(cartBox){cartBox.innerHTML=cart.length===0?'<p>No hay productos en el carrito.</p>':cart.map(x=>`<div class="summary-row"><span>${x.qty} x ${x.name}</span><strong>$ ${money(x.price*x.qty)}</strong></div>`).join('')}
if(shippingBox){let selected=getSelectedShippingMethod().id;shippingBox.innerHTML=shippingMethods.map(m=>{let disabled=m.minSubtotal&&subtotal<m.minSubtotal;let note=disabled?`<small>Disponible desde $ ${money(m.minSubtotal)}</small>`:`<small>${m.description}</small>`;return `<label class="shipping-option ${disabled?'disabled':''}"><input type="radio" name="shippingMethod" value="${m.id}" ${selected===m.id?'checked':''} ${disabled?'disabled':''} onchange="selectShippingMethod('${m.id}')" /> <span><strong>${m.name}</strong>${note}</span><em>$ ${money(m.price)}</em></label>`}).join('')}
if(paymentBox){let selected=getSelectedPaymentMethod().id;paymentBox.innerHTML=paymentMethods.map(m=>`<label class="shipping-option"><input type="radio" name="paymentMethod" value="${m.id}" ${selected===m.id?'checked':''} onchange="selectPaymentMethod('${m.id}')" /> <span><strong>${m.name}</strong><small>${m.description}</small></span></label>`).join('')}
let subtotalEl=document.getElementById('checkoutSubtotal');let shippingEl=document.getElementById('checkoutShipping');let totalEl=document.getElementById('checkoutTotal');if(subtotalEl)subtotalEl.textContent=money(subtotal);if(shippingEl)shippingEl.textContent=money(getShippingCost());if(totalEl)totalEl.textContent=money(getOrderTotal())}

function selectShippingMethod(id){let data=getCheckout();data.methodId=id;saveCheckout(data);renderCheckout()}
function selectPaymentMethod(id){let data=getCheckout();data.paymentId=id;saveCheckout(data);renderCheckout()}
function collectCheckout(){let data=getCheckout();data.firstName=document.getElementById('billingFirstName')?.value||'';data.lastName=document.getElementById('billingLastName')?.value||'';data.phone=document.getElementById('billingPhone')?.value||'';data.email=document.getElementById('billingEmail')?.value||'';data.address=document.getElementById('shippingAddress')?.value||'';data.city=document.getElementById('shippingCity')?.value||'';data.notes=document.getElementById('orderNotes')?.value||'';let selected=document.querySelector('input[name="shippingMethod"]:checked');data.methodId=selected?selected.value:(data.methodId||'local_pickup');let payment=document.querySelector('input[name="paymentMethod"]:checked');data.paymentId=payment?payment.value:(data.paymentId||'cod');saveCheckout(data);return data}

function placeOrder(){let cart=getCart();if(cart.length===0){alert('El carrito está vacío');return}let data=collectCheckout();let method=getSelectedShippingMethod();let payment=getSelectedPaymentMethod();if(!data.firstName||!data.phone){alert('Completa nombre y teléfono para finalizar el pedido.');return}if(method.id!=='local_pickup' && (!data.address||!data.city)){alert('Completa dirección y ciudad para el envío.');return}
let order={number:'PM-'+Date.now().toString().slice(-6),date:new Date().toLocaleString('es-UY'),customer:data,items:cart,shipping:method,payment:payment,subtotal:getSubtotal(),shippingCost:getShippingCost(),total:getOrderTotal(),status:'Pendiente de pago'};localStorage.setItem(ORDER_KEY,JSON.stringify(order));saveCart([]);localStorage.removeItem(CHECKOUT_KEY);window.location.href='confirmacion.html'}

function renderOrderReceived(){let box=document.getElementById('orderReceived');if(!box)return;let order=JSON.parse(localStorage.getItem(ORDER_KEY)||'{}');if(!order.number){box.innerHTML='<p>No se encontró un pedido reciente.</p>';return}let items=(order.items||[]).map(x=>`<div class="summary-row"><span>${x.qty} x ${x.name}</span><strong>$ ${money(x.price*x.qty)}</strong></div>`).join('');box.innerHTML=`<div class="summary-row"><span>Número de pedido</span><strong>${order.number}</strong></div><div class="summary-row"><span>Fecha</span><strong>${order.date}</strong></div><div class="summary-row"><span>Estado</span><strong>${order.status}</strong></div><h2>Resumen</h2>${items}<div class="summary-row"><span>Subtotal</span><strong>$ ${money(order.subtotal)}</strong></div><div class="summary-row"><span>${order.shipping?.name||'Envío'}</span><strong>$ ${money(order.shippingCost)}</strong></div><div class="summary-row"><span>Método de pago</span><strong>${order.payment?.name||''}</strong></div><div class="summary-row total"><span>Total</span><strong>$ ${money(order.total)}</strong></div>`}

document.addEventListener('DOMContentLoaded',function(){updateCartCount();renderCart();renderCheckout();renderOrderReceived()});

function filterProducts(){
  const value=document.getElementById('categoryFilter')?.value||'';
  document.querySelectorAll('.product[data-category]').forEach(card=>{
    card.style.display=(!value || card.dataset.category===value)?'block':'none';
  });
}
