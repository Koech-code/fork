# Generated by Django 3.2.15 on 2022-10-12 11:40

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('accounts', '0004_remove_user_name'),
    ]

    operations = [
        migrations.AddField(
            model_name='user',
            name='username',
            field=models.CharField(default='', max_length=255),
        ),
    ]
