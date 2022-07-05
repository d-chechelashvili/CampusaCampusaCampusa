# Generated by Django 4.0.6 on 2022-07-05 14:24

from django.db import migrations, models
import django.db.models.deletion
import django.utils.timezone


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Faculty',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(max_length=100, unique=True)),
                ('abbreviation', models.CharField(max_length=100, unique=True)),
            ],
        ),
        migrations.CreateModel(
            name='Nickname',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('nickname', models.CharField(max_length=100, unique=True)),
            ],
        ),
        migrations.CreateModel(
            name='Subject',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(max_length=100, unique=True)),
                ('credits', models.IntegerField()),
                ('syllabus_path', models.CharField(max_length=100)),
            ],
        ),
        migrations.CreateModel(
            name='User',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('email', models.CharField(max_length=100, unique=True)),
            ],
        ),
        migrations.CreateModel(
            name='SubjectVersion',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('year', models.IntegerField()),
                ('semester', models.CharField(max_length=100)),
                ('faculty', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='backend.faculty')),
                ('subject', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='backend.subject')),
            ],
        ),
        migrations.CreateModel(
            name='Score',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('score', models.FloatField()),
                ('year', models.IntegerField(blank=True, null=True)),
                ('semester', models.CharField(blank=True, max_length=100, null=True)),
                ('subject_id', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='backend.subject')),
                ('user_id', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='backend.user')),
            ],
        ),
        migrations.CreateModel(
            name='Rating',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('rating', models.IntegerField()),
                ('subject_id', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='backend.subject')),
                ('user_id', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='backend.user')),
            ],
        ),
        migrations.CreateModel(
            name='Prerequisite',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('prerequisite_subject_id', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='prerequisite_of', to='backend.subject')),
                ('subject_id', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='subject_id', to='backend.subject')),
            ],
        ),
        migrations.CreateModel(
            name='PlannerItem',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('semester', models.IntegerField()),
                ('grade', models.CharField(max_length=1)),
                ('subject_id', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='backend.subject')),
                ('user_id', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='backend.user')),
            ],
        ),
        migrations.CreateModel(
            name='Difficulty',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('difficulty', models.IntegerField()),
                ('subject_id', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='backend.subject')),
                ('user_id', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='backend.user')),
            ],
        ),
        migrations.CreateModel(
            name='Comment',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('comment', models.TextField()),
                ('datetime', models.DateTimeField(blank=True, default=django.utils.timezone.now)),
                ('nickname_id', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='backend.nickname')),
                ('subject_id', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='backend.subject')),
                ('user_id', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='backend.user')),
            ],
        ),
    ]
