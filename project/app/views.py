from django.http import HttpResponse
from django.views import View
from .models import Ticket,Oferta, Usuario
from django.core import serializers
# from django.forms.models import model_to_dict
import json
from datetime import datetime

# Create your views here.

class getTickets(View):

    def get(self,request):#para pedir los tickets
        # tickets=serializers.serialize('json',Ticket.objects.values())
        tickets=Ticket.objects.values()
        users=Usuario.objects.values()
        for ticket in tickets:
            ticket['fecha']=ticket['fecha'].strftime("%d/%m/%Y, %H:%M")
            for user in users:
                if ticket['who_ask_id'] == user['id']:
                    ticket['name']=user['name']

        print(tickets)
        return HttpResponse(tickets)

class getOfertas(View):
    def get(self,request):
        tickets=Ticket.objects.values()
        users=Usuario.objects.values()
        ofertas= Oferta.objects.values()

        print('\nticket:',tickets)
        print('\nuser:',users)
        print('\noferta:',ofertas)

        for oferta in ofertas:
            oferta['fecha_cambio']= oferta['fecha_cambio'].strftime("%d/%m/%Y, %H:%M")
            for user in users:
                if oferta['who_resp_id'] == user['id']:
                    oferta['name_resp']=user['name']

            for ticket in tickets:
                oferta['fecha_ticket']=ticket['fecha'].strftime("%d/%m/%Y, %H:%M")
                for user in users:
                    if ticket['who_ask_id'] == user['id']:
                        oferta['name_ask']=user['name']
            
                


        return HttpResponse(ofertas)

class createTicket(View):

    def get(self,request):
        #recibe el usuario y fecha
        body=json.loads(request.body)
        fecha=body['date']
        user=Usuario.objects.filter(name=body['user'])
        new_ticket=Ticket(who_ask=user[0],fecha=fecha)
        new_ticket.save()
        return HttpResponse('OK')
    
class createOferta(View):

    def get(self,request):
        body=json.loads(request.body)
        fecha=body['date']
        id_ticket=Ticket.objects.filter(pk=body['id_ticket'])
        user=Usuario.objects.filter(name=body['user'])
        oferta=Oferta(who_resp=user[0],fecha_cambio=fecha,id_ticket=id_ticket[0])
        oferta.save()

        return HttpResponse('OK')
