from django.shortcuts import render
from .forms import formulario

# Create your views here.

def index(request):
    nombre = ""
    # Preguntamos si hemos recogido datos
    if request.method == "POST":
        # Recogemos los datos del formulario
        form = formulario(request.POST)
        # Si el formulario es válido
        if form.is_valid():
            # Recogemos el campo nombre
            nombre = form.cleaned_data['nombre'] 
        else:
            # Si no hay datos creamos el formulario
            form = formulario()
            
    return render(request, "index.html", {"form": formulario, "nombre": nombre})