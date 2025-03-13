from django.shortcuts import render, redirect
from .forms import RegisterForm
from django.contrib.auth.decorators import login_required
from publicaciones_app.models import Publicacion
from .models import Usuario
from django.contrib.auth import logout

# Create your views here.
def register(request):
    form = RegisterForm()
    
    if request.method == "POST":
        form = RegisterForm(request.POST)
        if form.is_valid():
            Usuario = form.save()
            return redirect('login')

    return render(request, 'register.html', { 'form': form })
            
            
@login_required
def index(request):
    Publicacions = Publicacion.objects.filter(autor = request.user)
    return render(request, 'index.html', { 'Publicacions': Publicacions })
            
            
def exit(request):
    logout(request)
    return redirect('login')