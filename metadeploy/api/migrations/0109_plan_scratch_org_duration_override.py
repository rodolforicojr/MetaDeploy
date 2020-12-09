# Generated by Django 2.2.16 on 2020-11-16 19:39

import django.core.validators
from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ("api", "0108_markdownfield_helptext"),
    ]

    operations = [
        migrations.AddField(
            model_name="plan",
            name="scratch_org_duration_override",
            field=models.IntegerField(
                blank=True,
                help_text="Lifetime of Scratch Orgs created for this plan. Will inherit the global default value if left blank.",
                null=True,
                validators=[
                    django.core.validators.MinValueValidator(1),
                    django.core.validators.MaxValueValidator(30),
                ],
                verbose_name="Scratch Org duration (days)",
            ),
        ),
    ]
