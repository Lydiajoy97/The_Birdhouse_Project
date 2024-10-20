# Generated by Django 3.2.25 on 2024-10-19 20:30

from django.conf import settings
from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    initial = True

    dependencies = [
        migrations.swappable_dependency(settings.AUTH_USER_MODEL),
    ]

    operations = [
        migrations.CreateModel(
            name='Birdpost',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('title', models.CharField(max_length=255)),
                ('image', models.ImageField(default='../default_profile_qdjgyp', upload_to='images/')),
                ('location', models.TextField(blank=True)),
                ('content', models.TextField(blank=True)),
                ('type_of_bird', models.CharField(choices=[('owl', 'OWL'), ('eagle', 'EAGLE'), ('heron', 'HERON'), ('passerine', 'PASSERINE'), ('other', 'OTHER'), ('unknown', 'UNKNOWN')], default='unknown', max_length=60)),
                ('updated_at', models.DateTimeField(auto_now=True)),
                ('uploaded_by', models.CharField(default='name', max_length=255)),
                ('approved', models.BooleanField(default=True)),
                ('owner', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='displayname', to=settings.AUTH_USER_MODEL)),
            ],
        ),
    ]
