# from django import forms
from django.contrib.auth.forms import UserCreationForm
from django.contrib.auth import get_user_model
from usuarios_app.models import Usuario




class RegistroForm(UserCreationForm):

    class Meta:
        model = Usuario
        fields = ['username','nombre_apellidos']
    
