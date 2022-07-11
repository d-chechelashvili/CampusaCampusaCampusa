from typing import Any, Optional


def get_first_matching_attr(
    obj: Any, *attrs: Any, default: Optional[Any] = None
) -> Any:
    for attr in attrs:
        if hasattr(obj, attr):
            return getattr(obj, attr)
    return default


def get_error_message(exc: Any) -> str:
    if hasattr(exc, "message_dict"):
        message_dict: str = exc.message_dict
        return message_dict
    error_msg: str = get_first_matching_attr(exc, "message", "messages")

    if isinstance(error_msg, list):
        error_msg = ", ".join(error_msg)

    if error_msg is None:
        error_msg = str(exc)

    return error_msg
