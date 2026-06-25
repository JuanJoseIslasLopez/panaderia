<%@ Page Title="Pedido recibido" Language="VB" MasterPageFile="~/Site.master" AutoEventWireup="false" CodeBehind="Confirmacion.aspx.vb" Inherits="PanaderiaMaldonadoVB.Confirmacion" %>
<asp:Content ID="Title" ContentPlaceHolderID="TitleContent" runat="server">Pedido recibido</asp:Content>
<asp:Content ID="Body" ContentPlaceHolderID="MainContent" runat="server">
<section class="checkout order-received">
    <p class="eyebrow">WooCommerce demo</p>
    <h1>Pedido recibido</h1>
    <p class="muted">Gracias. Tu pedido fue registrado en la tienda demo de Panadería Maldonado.</p>
    <div id="orderReceived"></div>
    <a class="btn" href="Tienda.aspx">Volver a la tienda</a>
</section>
</asp:Content>
