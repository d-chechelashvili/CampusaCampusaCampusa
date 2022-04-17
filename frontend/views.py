from http.client import HTTPResponse

from django.core.handlers.wsgi import WSGIRequest
from django.shortcuts import render


def index(request: WSGIRequest) -> HTTPResponse:
    response: HTTPResponse = render(request, "index.html")
    return response
