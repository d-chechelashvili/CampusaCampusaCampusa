from django.core.handlers.wsgi import WSGIRequest
from django.http import JsonResponse


def subjects(request: WSGIRequest) -> JsonResponse:
    response = {
        "subjects": [
            "Programming Methodology",
            "Programming Abstraction",
            "Programming Paradigms",
            "Nand2Tetris",
            "Design Patterns",
            "Distributed Systems",
            "Compilers",
            "Computer Networks",
        ]
    }
    return JsonResponse(response)
