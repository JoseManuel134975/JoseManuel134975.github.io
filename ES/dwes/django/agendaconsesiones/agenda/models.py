from django.db import models
from rest_framework import serializers

# Create your models here.

class Cita():

    def __init__(self, descripcion, fecha):
        self.descripcion=descripcion     
        self.fecha = fecha 

    def serializar(self):
        return {'descripcion': self.descripcion, 'fecha': self.fecha}

    # def deserializar(cls, data):
