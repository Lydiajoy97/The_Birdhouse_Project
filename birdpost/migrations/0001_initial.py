# Generated by Django 3.2.25 on 2024-06-18 08:59

from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Category',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(max_length=30)),
            ],
        ),
        migrations.CreateModel(
            name='Birdpost',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('title', models.CharField(max_length=255)),
                ('image', models.ImageField(default='../default_profile_qdjgyp', upload_to='images/')),
                ('location', models.TextField(blank=True)),
                ('content', models.TextField(blank=True)),
                ('updated_at', models.DateTimeField(auto_now=True)),
                ('uploaded_by', models.CharField(default='name', max_length=255)),
                ('categories', models.ManyToManyField(related_name='birdpost', to='birdpost.Category')),
            ],
        ),
    ]