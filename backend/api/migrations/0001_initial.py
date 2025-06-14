# Generated by Django 4.2.23 on 2025-06-15 20:58

from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Recipe',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('img', models.CharField(max_length=2048, verbose_name='thumbnail image url')),
                ('title', models.CharField(max_length=150)),
                ('rating', models.PositiveIntegerField(max_length=5)),
                ('time', models.PositiveIntegerField()),
                ('servings', models.PositiveIntegerField(verbose_name=50)),
                ('url', models.CharField(max_length=2048)),
            ],
        ),
    ]
