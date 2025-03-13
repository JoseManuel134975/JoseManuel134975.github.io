"""mywall URL Configuration

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
from usuarios_app.views import register, exit, index
from publicaciones_app.views import crear_publicacion, cambiar_publicacion, eliminar_publicacion, listar_usuarios, visitar, comentar, ver_comentarios, volver_a_visitar
from django.contrib.auth import views as auth_views


urlpatterns = [
    path('admin/', admin.site.urls),
    path('register/', register, name='register'),
    path('logout/', exit, name='logout'),
    path('index/', index, name='index'),
    path('crear/publicacion', crear_publicacion, name='crear_publicacion'),
    path('usuarios/', listar_usuarios, name='listar_usuarios'),
    path('visitar/<int:pk>', visitar, name='visitar'),
    path('ver/comentarios/<int:pkUsuario>/<int:pkPublicacion>', ver_comentarios, name='ver_comentarios'),
    path('volver/a/visitar/<int:pk>', volver_a_visitar, name='volver_a_visitar'),
    path('comentar/<int:pkUsuario>/<int:pkPublicacion>', comentar, name='comentar'),
    path('cambiar/publicacion/<int:pk>', cambiar_publicacion, name='cambiar_publicacion'),
    path('eliminar/publicacion/<int:pk>', eliminar_publicacion, name='eliminar_publicacion'),
    path('', auth_views.LoginView.as_view(template_name='login.html'), name='login'),
    
]
