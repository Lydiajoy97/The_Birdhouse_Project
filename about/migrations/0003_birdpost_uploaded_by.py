# Generated by Django 3.2.25 on 2024-05-26 15:23

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('about', '0002_auto_20240525_1622'),
    ]

    operations = [
        migrations.AddField(
            model_name='birdpost',
            name='uploaded_by',
            field=models.CharField(default='name', max_length=255),
        ),
    ]
