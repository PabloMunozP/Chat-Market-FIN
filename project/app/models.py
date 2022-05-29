from django.db import models
from datetime import datetime

# Create your models here.


class Usuario(models.Model):
    user = models.CharField(max_length=60)
    email = models.EmailField(max_length=50)

    def __str__(self):
        return self.user


class Ticket(models.Model):
    date = models.DateTimeField(default=datetime.now())
    who_ask = models.ForeignKey(Usuario, on_delete=models.CASCADE)
    state = models.CharField(max_length=30, default='En espera')

    def __str__(self):
        return self.who_ask.user


class Oferta(models.Model):
    who_resp = models.ForeignKey(Usuario, on_delete=models.CASCADE)
    date_cambio = models.DateTimeField()
    id_ticket = models.ForeignKey(Ticket, on_delete=models.CASCADE)

    def __str__(self):
        return self.who_resp.user
