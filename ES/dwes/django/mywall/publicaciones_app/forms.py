from django import forms
from .models import Publicacion, Comentario

class PublicacionForm(forms.ModelForm):
    class Meta:
        model = Publicacion

        fields=['contenido', 'fecha'] 
        # No mostramos el campo usuario
        exclude=['usuario']
        widget = {
            'contenido': forms.Textarea,
            # revisar
            'fecha': forms.DateInput(attrs={'type': 'date'})
        }
        
class ComentarioForm(forms.ModelForm):
    class Meta:
        model = Comentario

        fields=['texto', 'fecha'] 
        # No mostramos el campo usuario
        exclude=['usuario']
        widget = {
            # 'contacto': forms.TextInput,
            # 'publicacion': forms.TextInput,        
            # revisar
            'texto': forms.TextInput,
            'fecha': forms.DateInput(attrs={'type': 'date'})
        }