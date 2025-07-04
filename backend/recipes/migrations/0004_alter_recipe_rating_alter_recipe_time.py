# Generated by Django 4.2.23 on 2025-06-15 22:35

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('recipes', '0003_alter_recipe_img_alter_recipe_url'),
    ]

    operations = [
        migrations.AlterField(
            model_name='recipe',
            name='rating',
            field=models.DecimalField(decimal_places=1, max_digits=2),
        ),
        migrations.AlterField(
            model_name='recipe',
            name='time',
            field=models.PositiveIntegerField(verbose_name='time in minutes'),
        ),
    ]
