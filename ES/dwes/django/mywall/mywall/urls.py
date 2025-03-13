"""publicacions URL Configuration

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/3.2/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  path('', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  path('', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.urls import include, path
    2. Add a URL to urlpatterns:  path('blog/', include('blog.urls'))
"""
from django.contrib import admin
from django.urls import path, include
from django.contrib.auth import views as auth_views

from publicaciones_app.views import index, mirar, crear_publicacion, cambiar_publicacion, borrar_publicacion, comentar, borrar_comentario, mis_comentarios, usuarios
from usuarios_app.views import salir, index, registro

    
urlpatterns = [
    # path('publicacions/', include('usuarios_app/urls')),
    path('publicacion/nuevo/', crear_publicacion, name='crear_publicacion'),
    path('publicacion/editar/<int:pk>/', cambiar_publicacion, name='cambiar_publicacion'),
    path('publicacion/borrar/<int:pk>/', borrar_publicacion, name='borrar_publicacion'),
    path('muro/de/<int:pk>/', mirar, name='mirar'),
    # path('publicacion/comentarios/<int:pk>/', comentarios, name='comentarios'),
    path('publicacion/comentar/<int:pkUsuario>/<int:pkPublicacion>/', comentar, name='comentar'),
    path('publicacion/borrarcomentario/<int:pkusuario>/<int:pkpublicacion>/', borrar_comentario, name='borrar_comentario'),
    path('usuarios', usuarios, name='usuarios'),
    path('miscomentarios', mis_comentarios, name='mis_comentarios'),
    path('salir/', salir, name='salir'),
    path('registro/', registro, name='registro'),
    path('index/', index, name="index"),
    path('', auth_views.LoginView.as_view(template_name='login.html'), name='login'),
    path('admin/', admin.site.urls),
]
