Imports System.Data
Imports System.Linq

Namespace PanaderiaMaldonadoVB
    Public Class Tienda
        Inherits System.Web.UI.Page

        Protected Sub Page_Load(sender As Object, e As EventArgs) Handles Me.Load
            If Not IsPostBack Then CargarProductos()
        End Sub

        Protected Sub ddlCategoria_SelectedIndexChanged(sender As Object, e As EventArgs) Handles ddlCategoria.SelectedIndexChanged
            CargarProductos()
        End Sub

        Private Sub CargarProductos()
            Dim productos = ProductoRepositorio.ObtenerTodos()
            If ddlCategoria.SelectedValue <> "" Then
                productos = productos.Where(Function(p) p.Categoria = ddlCategoria.SelectedValue).ToList()
            End If
            rptProductos.DataSource = productos
            rptProductos.DataBind()
        End Sub
    End Class
End Namespace
