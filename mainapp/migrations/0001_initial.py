# Generated by Django 3.1.7 on 2021-03-02 16:22

from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Student',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(max_length=400)),
                ('roll_no', models.IntegerField(unique=True)),
                ('maths', models.DecimalField(decimal_places=2, max_digits=5)),
                ('physics', models.DecimalField(decimal_places=2, max_digits=5)),
                ('chemistry', models.DecimalField(decimal_places=2, max_digits=5)),
            ],
        ),
    ]
