from curses import tigetflag
from django.contrib import admin
from .models import Usuario,Ticket,Oferta
# Register your models here.
admin.site.register(Usuario)
admin.site.register(Ticket)
admin.site.register(Oferta)