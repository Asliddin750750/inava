# Generated by Django 3.2.7 on 2021-10-03 12:43

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('account', '0002_slugmodel'),
    ]

    operations = [
        migrations.AlterField(
            model_name='slugmodel',
            name='slug',
            field=models.SlugField(max_length=200, unique=True),
        ),
    ]
