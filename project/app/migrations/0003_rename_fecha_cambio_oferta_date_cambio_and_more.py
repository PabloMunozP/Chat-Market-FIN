# Generated by Django 4.0.4 on 2022-05-29 02:44

import datetime
from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('app', '0002_alter_oferta_id_ticket_alter_ticket_fecha'),
    ]

    operations = [
        migrations.RenameField(
            model_name='oferta',
            old_name='fecha_cambio',
            new_name='date_cambio',
        ),
        migrations.RenameField(
            model_name='ticket',
            old_name='estado',
            new_name='state',
        ),
        migrations.RenameField(
            model_name='usuario',
            old_name='name',
            new_name='user',
        ),
        migrations.RemoveField(
            model_name='ticket',
            name='fecha',
        ),
        migrations.AddField(
            model_name='ticket',
            name='date',
            field=models.DateTimeField(default=datetime.datetime(2022, 5, 29, 2, 44, 4, 50106)),
        ),
    ]
