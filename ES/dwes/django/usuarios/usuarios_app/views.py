from django.shortcuts import render, redirect
from usuarios_app.forms import RegistroForm
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
    else:
        form = RegistroForm()
    
    return render(request, 'registro.html', {'form': form} )


@login_required
def inicio(request):

    return render(request, 'index.html')


def salir(request):

    logout(request)
    return redirect('login')

