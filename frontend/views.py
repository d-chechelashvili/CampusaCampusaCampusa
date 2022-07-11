from django.core.handlers.wsgi import WSGIRequest
from django.http import HttpResponse
from django.shortcuts import render


def index(request: WSGIRequest) -> HttpResponse:
    response: HttpResponse = render(request, "index.html")
    return response
