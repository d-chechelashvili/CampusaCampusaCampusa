from typing import Any, Dict

import requests
from django.conf import settings
from django.core.exceptions import ValidationError
from requests import Response

GOOGLE_USER_INFO_URL = "https://www.googleapis.com/oauth2/v3/userinfo"
GOOGLE_ACCESS_TOKEN_OBTAIN_URL = "https://oauth2.googleapis.com/token"
GOOGLE_ID_TOKEN_INFO_URL = "https://www.googleapis.com/oauth2/v3/tokeninfo"


def google_get_tokens(*, code: str, redirect_uri: str) -> Response:
    data = {
        "code": code,
        "client_id": settings.GOOGLE_OAUTH2_CLIENT_ID,
        "client_secret": settings.GOOGLE_OAUTH2_CLIENT_SECRET,
        "redirect_uri": redirect_uri,
        "grant_type": "authorization_code",
    }
    response = requests.post(GOOGLE_ACCESS_TOKEN_OBTAIN_URL, data=data)
    if not response.ok:
        raise ValidationError("Failed to obtain access token from Google.")
    return response


def google_get_user_info(*, access_token: str) -> Dict[str, Any]:
    response = requests.get(GOOGLE_USER_INFO_URL, params={"access_token": access_token})

    if not response.ok:
        raise ValidationError("Failed to obtain user info from Google.")

    result: Dict[str, Any] = response.json()
    return result
