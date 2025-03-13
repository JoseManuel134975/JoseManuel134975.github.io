from django.shortcuts import render, redirect, get_object_or_404
from .models import Publicacion, Comentario
from .forms import PublicacionForm, ComentarioForm
from usuarios_app.models import Usuario

# Create your views here.
def crear_publicacion(request):
    form = PublicacionForm()
    
    if request.method == "POST":
        form = PublicacionForm(request.POST)
        if form.is_valid():
            publicacion = Publicacion()
            publicacion = form.save(commit=False)
            publicacion.autor = request.user
            publicacion.save()
            return redirect('index')

    return render(request, 'nuevapublicacion.html', { 'form': form })



def cambiar_publicacion(request, pk):
    publicacion = get_object_or_404(Publicacion, pk=pk)
    form = PublicacionForm()
    if request.method == 'POST':
        form = PublicacionForm(request.POST, instance=publicacion)
        if form.is_valid():
            form.save()            
            return redirect('index')

    return render(request, 'cambiarpublicacion.html', {'form': form})



def eliminar_publicacion(request, pk):
    publicacion = get_object_or_404(Publicacion, pk=pk)
    if request.method == "POST":
        publicacion.delete()
        return redirect('index')
    
    
def listar_usuarios(request):
    usuarios = Usuario.objects.all()
    
    return render(request, 'usuarios.html', { 'usuarios': usuarios })
    
    
def visitar(request, pk):
    usuario = get_object_or_404(Usuario, pk=pk)
    Publicacions = Publicacion.objects.filter(autor = usuario)

    return render(request, 'visitar.html', {'Publicacions': Publicacions, 'usuario': usuario })


def comentar(request, pkUsuario, pkPublicacion):
    publicacion = get_object_or_404(Publicacion, pk=pkPublicacion)
    usuario = get_object_or_404(Usuario, pk=pkUsuario)
    form = ComentarioForm()
    
    if request.method == "POST":
        form = ComentarioForm(request.POST)
        
        if form.is_valid():
            comentario = Comentario()
            comentario = form.save(commit=False)
            comentario.publicacion = publicacion
            comentario.contacto = request.user
            # publicacion.comentarios.add(comentario)
            comentario.save()
            # publicacion.save()
            return redirect('visitar', pkUsuario)
        
    return render(request, 'comentar.html', { 'form': form })


def ver_comentarios(request, pkUsuario, pkPublicacion):
    publicacion = get_object_or_404(Publicacion, pk=pkPublicacion)
    usuario = get_object_or_404(Usuario, pk=pkUsuario)
    comentarios = Comentario.objects.filter(publicacion = publicacion)
    return render(request, 'ver_comentarios.html', { 'publicacion': publicacion, 'comentarios': comentarios, 'usuario': usuario })


def volver_a_visitar(request, pk):
    return redirect('visitar', pk)