# Generated by Django 4.2.1 on 2023-12-09 17:36

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ("app", "0001_initial"),
    ]

    operations = [
        migrations.RenameField(
            model_name="users",
            old_name="id",
            new_name="user_id",
        ),
    ]
