from django import forms

class formulario(forms.Form):
    nombre = forms.CharField(label='Escribe tu nombre')