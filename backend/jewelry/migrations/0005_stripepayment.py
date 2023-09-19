# Generated by Django 4.2.5 on 2023-09-19 11:27

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('jewelry', '0004_remove_jewelry_owner_delete_client'),
    ]

    operations = [
        migrations.CreateModel(
            name='StripePayment',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('charge_id', models.CharField(max_length=100)),
                ('name', models.CharField(max_length=100)),
                ('email', models.CharField(max_length=100)),
                ('amount', models.IntegerField()),
                ('timestamp', models.DateTimeField(auto_now_add=True)),
            ],
        ),
    ]
