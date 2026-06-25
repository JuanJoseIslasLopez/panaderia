<%@ Page Title="Carrito" Language="VB" MasterPageFile="~/Site.master" AutoEventWireup="false" CodeBehind="Carrito.aspx.vb" Inherits="PanaderiaMaldonadoVB.Carrito" %>
<asp:Content ID="Title" ContentPlaceHolderID="TitleContent" runat="server">Carrito</asp:Content>
<asp:Content ID="Body" ContentPlaceHolderID="MainContent" runat="server">
<h1>Carrito</h1>
<div id="cartItems"></div>
<div class="checkout">
    <h2>Subtotal: $ <span id="cartTotal">0.00</span></h2>
    <p class="muted">El costo de envio se calcula en el checkout.</p>
    <a class="btn" href="Checkout.aspx">Finalizar compra</a>
    <button type="button" class="linkbtn" onclick="clearCart()">Vaciar carrito</button>
</div>
</asp:Content>
