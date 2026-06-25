Namespace PanaderiaMaldonadoVB
    Public Class Producto
        Public Property Id As Integer
        Public Property Nombre As String
        Public Property Categoria As String
        Public Property Precio As Decimal
        Public Property Imagen As String
    End Class

    Public Module ProductoRepositorio
        Public Function ObtenerTodos() As List(Of Producto)
            Return New List(Of Producto) From {
                New Producto With {.Id=1, .Nombre="Pan flauta artesanal", .Categoria="Panificados", .Precio=58D, .Imagen="Images/pan-flauta.svg"},
                New Producto With {.Id=2, .Nombre="Bizcochos surtidos 1/2 kg", .Categoria="Bizcochos", .Precio=260D, .Imagen="Images/bizcochos.svg"},
                New Producto With {.Id=3, .Nombre="Pan de campo", .Categoria="Panificados", .Precio=145D, .Imagen="Images/pan-campo.svg"},
                New Producto With {.Id=4, .Nombre="Medialunas dulces x6", .Categoria="Bizcochos", .Precio=210D, .Imagen="Images/medialunas.svg"},
                New Producto With {.Id=5, .Nombre="Alfajor de maicena grande", .Categoria="Dulces", .Precio=85D, .Imagen="Images/alfajor.svg"},
                New Producto With {.Id=6, .Nombre="Torta de chocolate", .Categoria="Tortas", .Precio=690D, .Imagen="Images/torta-chocolate.svg"},
                New Producto With {.Id=7, .Nombre="Tarta salada de jamón y queso", .Categoria="Salados", .Precio=240D, .Imagen="Images/tarta-salada.svg"},
                New Producto With {.Id=8, .Nombre="Empanadas al horno x6", .Categoria="Salados", .Precio=390D, .Imagen="Images/empanadas.svg"},
                New Producto With {.Id=9, .Nombre="Pan integral con semillas", .Categoria="Panificados", .Precio=175D, .Imagen="Images/pan-integral.svg"},
                New Producto With {.Id=10, .Nombre="Masas finas surtidas 1/2 kg", .Categoria="Dulces", .Precio=520D, .Imagen="Images/masas-finas.svg"},
                New Producto With {.Id=11, .Nombre="Rosca de chicharrón", .Categoria="Panificados", .Precio=230D, .Imagen="Images/rosca.svg"},
                New Producto With {.Id=12, .Nombre="Combo desayuno familiar", .Categoria="Combos", .Precio=760D, .Imagen="Images/combo-desayuno.svg"}
            }
        End Function
    End Module
End Namespace
