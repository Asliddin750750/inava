# Generated by Django 3.2.7 on 2021-10-03 12:57

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('account', '0004_customuser_slug_name'),
    ]

    operations = [
        migrations.AlterField(
            model_name='customuser',
            name='slug_name',
            field=models.SlugField(default='slug', unique=True),
        ),
    ]
