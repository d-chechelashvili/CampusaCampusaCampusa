from django.core.handlers.wsgi import WSGIRequest
from django.http import JsonResponse


def subjects(request: WSGIRequest) -> JsonResponse:
    response = {
        "subjects": [
            "Programming Methodology",
            "Programming Abstraction",
            "Programming Paradigms",
        ]
    }
    return JsonResponse(response)
