# Generated by Django 3.2.15 on 2022-10-12 11:37

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('accounts', '0003_user'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='user',
            name='name',
        ),
    ]