from django.urls import path
from .views import getOfertas, getTickets,createTicket,createOferta


urlpatterns=[
    path('getTickets/', getTickets.as_view(), name='Tickets'),
    path('crearTicket/',createTicket.as_view(),name='CrearTicket'),
    path('crearOferta/',createOferta.as_view(),name='CrearOferta'),
    path('getOfertas/',getOfertas.as_view(),name='Ofertas')
]