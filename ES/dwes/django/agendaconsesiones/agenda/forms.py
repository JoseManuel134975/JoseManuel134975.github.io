from django import forms

class Formulario(forms.Form):
    descripcion = forms.CharField()
    fecha = forms.DateField(widget=forms.DateInput(attrs={'type':'date'}))
    

