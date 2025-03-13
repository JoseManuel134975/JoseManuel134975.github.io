from django.shortcuts import render, redirect, get_object_or_404
from .models import Publicacion, Comentario
from usuarios_app.models import Usuario
from .forms import PublicacionForm, ComentarioForm

# Create your views here.

def index(request):

    # Recoger los Publicacions del suaurio
    Publicacions = Publicacion.objects.filter(autor = request.user)
    
    return render(request, 'index.html', {'Publicacions': Publicacions})

def crear_publicacion(request):

    if request.method == 'POST':
        form = PublicacionForm(request.POST)
        if form.is_valid():
            # Recogemos el Publicacion pero no lo guardamos
            Publicacion = form.save(commit=False)
            # Le asignamos el usuario
            Publicacion.autor = request.user
            # Y ahora sí lo grabamos
            Publicacion.save()
            # Mostramos de nuevo las citas
            return redirect('index')
    else:
        form = PublicacionForm()
    
    return render(request, 'nuevapublicacion.html', {'form': form})

def mirar(request, pk):
    paraUsuario = get_object_or_404(Usuario, pk=pk)
    # usuario = request.user
    Publicacions = Publicacion.objects.filter(autor = paraUsuario)
    Comentarios = Comentario.objects.filter(contacto = paraUsuario)
    
    return render(request, 'murode.html', { 'usuario': paraUsuario, 'Publicacions': Publicacions, 'Comentarios': Comentarios })

def cambiar_publicacion(request, pk):

    # recogemos el Publicacion
    publicacion = get_object_or_404(Publicacion, pk=pk)

    if request.method == 'POST':
        # se lo pasamos al formulario para que lo edite
        form = PublicacionForm(request.POST, instance=publicacion)
        # recogemos el Publicacion actualizado
        if form.is_valid():
            # Recogemos el Publicacion y lo guardamos porque ya tiene al usuario asociadp
            form.save()            
            return redirect('index')
    else:
        # se lo pasamos al formulario para que lo edite
        form = PublicacionForm(instance=publicacion)
    
    # mostramos el formulario de edición
    return render(request, 'nuevapublicacion.html', {'form': form})

def borrar_publicacion(request, pk):

    # recogemos el Publicacion
    publicacion = get_object_or_404(Publicacion, pk=pk)

    if request.method == 'POST':
        # borramos el Publicacion
        publicacion.delete()
    
    # mostramos los Publicacions del usuario
    return redirect('index')

def usuarios(request):

    # recogemos el Publicacion
    # Publicacion = get_object_or_404(Publicacion, pk=pk)
    # leemos todos los usuarios
    usuarios = Usuario.objects.all

    # mostraremos el Publicacion con sus usuarios y totos los usuarios
    return render(request, 'usuarios.html', {'usuarios':usuarios})

def comentar(request, pkUsuario, pkPublicacion):

    # recogemos el usuario al que queremos comentar
    # usuario = get_object_or_404(Usuario, pk=pkUsuario)
    # recogemos el Publicacion sobre el que estamos trabajando
    publicacion = get_object_or_404(Publicacion, pk=pkPublicacion)

    if request.method == 'POST':
        form = ComentarioForm(request.POST)
        if form.is_valid():
            # Recogemos el Comentario pero no lo guardamos
            comentario = form.save(commit=False)
            # Le asignamos el usuario
            comentario.contacto = request.user
            comentario.publicacion = publicacion
            # Y ahora sí lo grabamos
            comentario.save()
            # añadimos el usuario al Publicacion
            # publicacion.comentarios.add(usuario)
            # Mostramos de nuevo las citas
            # nos quedamos en la misma página
            return redirect('mirar', pkUsuario)
    else:
        form = ComentarioForm()

    return render(request, 'comentar.html', {'form': form})

def borrar_comentario(request, pkusuario, pkPublicacion):

    # recogemos el usuario al que queremos borrar del Publicacion
    usuario = get_object_or_404(Usuario, pk=pkusuario)
    # recogemos el Publicacion sobre el que estamos trabajando
    Publicacion = get_object_or_404(Publicacion, pk=pkPublicacion)
    # eliminamos al usuario
    Publicacion.usuarios.remove(usuario)
    # grabamos el Publicacion
    Publicacion.save()
    # volvemos a la misma página
    return redirect('usuarios', pkPublicacion)


def mis_comentarios(request):
    
    usuario = request.user  # Obtenemos el usuario autenticado
    Publicacions = usuario.comentarios.all()  # Accedemos a los Publicacions donde hemos sido usuarios a través de related_name
    return render(request, 'miscomentarios.html', {'Publicacions': Publicacions})

    