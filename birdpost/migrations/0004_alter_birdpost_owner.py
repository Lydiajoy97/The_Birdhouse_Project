# Generated by Django 3.2.25 on 2024-06-21 16:39

from django.conf import settings
from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        migrations.swappable_dependency(settings.AUTH_USER_MODEL),
        ('birdpost', '0003_auto_20240621_1143'),
    ]

    operations = [
        migrations.AlterField(
            model_name='birdpost',
            name='owner',
            field=models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='test', to=settings.AUTH_USER_MODEL),
        ),
    ]
