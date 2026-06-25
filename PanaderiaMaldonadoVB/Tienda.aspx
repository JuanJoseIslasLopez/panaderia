<%@ Page Title="Tienda" Language="VB" MasterPageFile="~/Site.master" AutoEventWireup="false" CodeBehind="Tienda.aspx.vb" Inherits="PanaderiaMaldonadoVB.Tienda" %>
<asp:Content ID="Title" ContentPlaceHolderID="TitleContent" runat="server">Tienda</asp:Content>
<asp:Content ID="Body" ContentPlaceHolderID="MainContent" runat="server">
<h1>Tienda</h1>
<p class="muted">Catálogo demo estilo WordPress/WooCommerce para Panadería Maldonado.</p>
<div class="filters">
    <asp:DropDownList ID="ddlCategoria" runat="server" AutoPostBack="true" CssClass="input">
        <asp:ListItem Text="Todas las categorías" Value="" />
        <asp:ListItem Text="Panificados" Value="Panificados" />
        <asp:ListItem Text="Bizcochos" Value="Bizcochos" />
        <asp:ListItem Text="Dulces" Value="Dulces" />
        <asp:ListItem Text="Tortas" Value="Tortas" />
        <asp:ListItem Text="Salados" Value="Salados" />
        <asp:ListItem Text="Combos" Value="Combos" />
    </asp:DropDownList>
</div>
<asp:Repeater ID="rptProductos" runat="server">
<ItemTemplate>
    <article class="product">
        <div class="img"><img src="<%# Eval("Imagen") %>" alt="<%# Eval("Nombre") %>" /></div>
        <small><%# Eval("Categoria") %></small>
        <h2><%# Eval("Nombre") %></h2>
        <p class="price">$ <%# Eval("Precio", "{0:N2}") %></p>
        <button type="button" class="btn small" onclick="addToCart('<%# Eval("Id") %>', '<%# Replace(Eval("Nombre").ToString(), "'", "\'") %>', <%# Eval("Precio") %>)">Agregar al carrito</button>
    </article>
</ItemTemplate>
</asp:Repeater>
</asp:Content>
