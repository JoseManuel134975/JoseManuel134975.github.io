from django import forms
from .models import Evento

class EventoForm(forms.ModelForm):
    # Class meta para asociar el formulario con la clase (entidad)
    class meta:
        model = Evento
        
        fields = [
            'titulo',
            'descripcion',
            
            'fecha'
        ] # Añadir participantes