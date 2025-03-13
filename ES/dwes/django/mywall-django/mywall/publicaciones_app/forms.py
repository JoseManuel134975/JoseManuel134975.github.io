from django import forms
from .models import Publicacion, Comentario

class PublicacionForm(forms.ModelForm):
    class Meta:
        model = Publicacion

        fields=['contenido', 'fecha'] 
        exclude=['usuario']
        widget = {
            'contenido': forms.Textarea,
            'fecha': forms.DateInput(attrs={'type': 'date'})
        }
        
class ComentarioForm(forms.ModelForm):
    class Meta:
        model = Comentario

        fields=['texto', 'fecha'] 
        exclude=['usuario']
        widget = {
            'texto': forms.TextInput,
            'fecha': forms.DateInput(attrs={'type': 'date'})
        }