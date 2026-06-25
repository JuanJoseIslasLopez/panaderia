<%@ Page Title="Inicio" Language="VB" MasterPageFile="~/Site.master" AutoEventWireup="false" CodeBehind="Default.aspx.vb" Inherits="PanaderiaMaldonadoVB._Default" %>
<asp:Content ID="Title" ContentPlaceHolderID="TitleContent" runat="server">Inicio</asp:Content>
<asp:Content ID="Body" ContentPlaceHolderID="MainContent" runat="server">
<section class="hero">
    <div>
        <p class="eyebrow">Panadería Maldonado</p>
        <h1>Panadería artesanal y tienda online</h1>
        <p>Pan fresco, bizcochos, masas, tortas y especialidades para todos los días.</p>
        <a class="btn" href="Tienda.aspx">Ir a tienda</a>
    </div>
</section>
<section class="cards">
    <article><h2>Panificados</h2><p>Panes artesanales, flautas, catalanes y opciones integrales.</p></article>
    <article><h2>Dulces y meriendas</h2><p>Bizcochos, facturas, alfajores, masitas y tortas.</p></article>
    <article><h2>WooCommerce demo</h2><p>Carrito, checkout, envío, pago y confirmación de compra.</p></article>
</section>
</asp:Content>
