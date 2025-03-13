from django.shortcuts import render, redirect
from .models import Evento
from .forms import EventoForm

# Create your views here.

def index(request):
    eventos = Evento.objects.filter(usuario = request.user)
    # eventos = Evento.objects.all
    
    return render(request, 'index.html', { 'eventos': eventos })

def crear_evento(request):
    form = EventoForm()
    
    if request.method == "POST":
        form = EventoForm(request.POST)
        form.save()
        return redirect('index')
    else:
        return render(request, 'nuevoevento.html', { 'form': form })