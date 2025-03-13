from django.shortcuts import render
from agenda.forms import Formulario
from agenda.models import Cita


# Create your views here.

def index(request):

    # La primera vez creamos la variable de sesión
    if "agenda" not in request.session:
        request.session["agenda"] = []

    # Si hemos recibido el formulario
    if request.method == 'POST':
        # recogemos el formulario
        form = Formulario(request.POST)
        if form.is_valid():
            # recogemos cada uno de los campos
            descripcion = form.cleaned_data["descripcion"]
            fecha = form.cleaned_data["fecha"]
            fechaString = fecha.strftime('%Y-%m-%d') 
            # creamos la cita
            cita = Cita(descripcion, fechaString)
            # la guardamos en la sesión
            # recuperamos la sesión
            agenda = request.session["agenda"]
            # Añadimos la cita
            agenda.append(cita.serializar())
            # Y guardamos de nuevo la sesión
            request.session["agenda"] = agenda

    else:
        form = Formulario()

    return render(request, 'index.html', {'form':form, 'agenda': request.session["agenda"]})

