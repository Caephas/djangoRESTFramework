from django.contrib import admin

# Register your models here.
from djangocrud.api.models import Movie

admin.site.register(Movie)