from django.urls import path, include
from django.contrib.auth.models import User
from rest_framework import routers, serializers, viewsets

# ViewSets define the view behavior.
from rest_framework.response import Response

from djangocrud.api.models import Movie
from djangocrud.api.serializers import MovieSerializer, MovieMiniSerializer


class MovieViewSet(viewsets.ModelViewSet):
    queryset = Movie.objects.all()
    serializer_class = MovieSerializer


    def list(self, request, *args, **kwargs):
        movies = Movie.objects.all()
        serializer = MovieMiniSerializer(movies, many=True)
        return  Response(serializer.data)