# Generated by Django 5.2.3 on 2025-06-29 07:18

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('recipes', '0007_alter_recipe_url'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='recipe',
            name='id',
        ),
        migrations.AlterField(
            model_name='recipe',
            name='url',
            field=models.URLField(primary_key=True, serialize=False, unique=True),
        ),
    ]
