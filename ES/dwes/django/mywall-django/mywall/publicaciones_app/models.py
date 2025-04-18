from django.db import models
from usuarios_app.models import Usuario
from django.utils import timezone


# Create your models here.

class Publicacion(models.Model):

    # Las propiedades que consideres
    contenido = models.CharField(max_length=1024)
    autor = models.ForeignKey(Usuario, on_delete=models.CASCADE, related_name="autor_publicacion")
    fecha = models.DateField(default=timezone.now)
    # IMPORTANTE: Para crear la tabla intermedia a partir de un modelo, 
    # necesario cuando esa tabla tiene más atributos,
    # se utiliza la clausula through
    comentarios = models.ManyToManyField(Usuario, through="Comentario")
    # Más las propiedades que consideres
    

class Comentario(models.Model):

    contacto = models.ForeignKey(Usuario, on_delete=models.SET_NULL, null=True, blank=True, related_name="autor_comentario")
    publicacion = models.ForeignKey(Publicacion, on_delete=models.SET_NULL, null=True, blank=True, related_name="publicacion")
    texto = models.CharField(max_length=1024)
    fecha = fecha = models.DateField(default=timezone.now)
    # Más las propiedades que consideres




    
