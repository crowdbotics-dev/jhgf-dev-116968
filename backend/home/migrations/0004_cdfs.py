# Generated by Django 3.2.20 on 2023-09-18 06:08

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('home', '0003_vbfd'),
    ]

    operations = [
        migrations.CreateModel(
            name='Cdfs',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('nvnfj', models.BigIntegerField()),
                ('ryrs', models.BigIntegerField()),
            ],
        ),
    ]
