# Generated by Django 4.0.4 on 2022-05-29 00:45

from django.db import migrations, models
import django.utils.timezone


class Migration(migrations.Migration):

    dependencies = [
        ('app', '0002_usuario_remove_oferta_who_ask_and_more'),
    ]

    operations = [
        migrations.AlterField(
            model_name='ticket',
            name='fecha',
            field=models.TimeField(default=django.utils.timezone.now),
        ),
    ]
