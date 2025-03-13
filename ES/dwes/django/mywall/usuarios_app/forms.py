# from django import forms
from django.contrib.auth.forms import UserCreationForm
from django.contrib.auth import get_user_model
from usuarios_app.models import Usuario
from django import forms




class RegistroForm(UserCreationForm):

    class Meta:
        model = Usuario
        fields = ['username']
    
