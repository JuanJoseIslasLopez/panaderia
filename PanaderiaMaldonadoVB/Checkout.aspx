<%@ Page Title="Finalizar compra" Language="VB" MasterPageFile="~/Site.master" AutoEventWireup="false" CodeBehind="Checkout.aspx.vb" Inherits="PanaderiaMaldonadoVB.Checkout" %>
<asp:Content ID="Title" ContentPlaceHolderID="TitleContent" runat="server">Finalizar compra</asp:Content>
<asp:Content ID="Body" ContentPlaceHolderID="MainContent" runat="server">
<h1>Finalizar compra</h1>
<p class="muted">Formulario tipo WooCommerce con facturación, envío, método de pago y resumen del pedido.</p>
<section class="checkout-grid">
    <div class="checkout">
        <h2>Detalles de facturacion</h2>
        <div class="form-grid">
            <label>Nombre *<input id="billingFirstName" class="input" autocomplete="given-name" /></label>
            <label>Apellido<input id="billingLastName" class="input" autocomplete="family-name" /></label>
        </div>
        <label>Teléfono *<input id="billingPhone" class="input" autocomplete="tel" /></label>
        <label>Correo electronico<input id="billingEmail" class="input" autocomplete="email" /></label>

        <h2>Detalles de envío</h2>
        <label>Dirección<input id="shippingAddress" class="input" autocomplete="street-address" placeholder="Calle, numero, apartamento" /></label>
        <label>Ciudad / barrio<input id="shippingCity" class="input" placeholder="Ej: Centro, Maldonado" /></label>
        <label>Notas del pedido<textarea id="orderNotes" class="input" rows="4" placeholder="Indicaciones para la entrega, horario preferido, etc."></textarea></label>
    </div>

    <aside class="checkout order-box">
        <h2>Tu pedido</h2>
        <div id="checkoutCart"></div>
        <hr />
        <div class="summary-row"><span>Subtotal</span><strong>$ <span id="checkoutSubtotal">0.00</span></strong></div>
        <h3>Envío</h3>
        <div id="shippingMethods"></div>
        <h3>Medio de pago</h3>
        <div id="paymentMethods"></div>
        <div class="summary-row total"><span>Total</span><strong>$ <span id="checkoutTotal">0.00</span></strong></div>
        <button type="button" class="btn full" onclick="placeOrder()">Realizar pedido</button>
        <a class="linkbtn" href="Carrito.aspx">Volver al carrito</a>
    </aside>
</section>
</asp:Content>
