from django.shortcuts import render, redirect
from usuarios_app.forms import RegistroForm
from publicaciones_app.models import Publicacion
from django.contrib.auth import logout
from django.contrib.auth.decorators import login_required


# Create your views here.

def registro(request):

    # Si hemos recibido datos
    if request.method == 'POST':
        # recuperamos el formulario
        form = RegistroForm(request.POST)
        # Si es válido
        if form.is_valid():
            # Grabamos el usuario
            usuario = form.save()
            # login(request, usuario)
            # Debemos irnos al formulario de login
            return redirect('login')
    else:
        form = RegistroForm()
    
    return render(request, 'registro.html', {'form': form} )


@login_required
def index(request):

    # Recoger los Publicacions del suaurio
    Publicacions = Publicacion.objects.filter(autor = request.user)
    
    return render(request, 'index.html', {'Publicacions': Publicacions})


def salir(request):

    logout(request)
    return redirect('login')

