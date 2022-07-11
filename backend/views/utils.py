from datetime import datetime
from typing import List, Dict, Union

from backend.models.comment import Comment
from backend.models.difficulty import Difficulty
from backend.models.prerequisite import Prerequisite
from backend.models.rating import Rating
from backend.models.subject_version import SubjectVersion


def calculate_rating(ratings: List[Rating]) -> float:
    if len(ratings) == 0:
        return 0

    total = 0
    for rating in ratings:
        total += rating.rating
    return total / len(ratings)


def calculate_difficulty(difficulties: List[Difficulty]) -> float:
    if len(difficulties) == 0:
        return 0

    total = 0
    for difficulty in difficulties:
        total += difficulty.difficulty
    return total / len(difficulties)


def get_semester(subject_versions: List[SubjectVersion]) -> str:
    autumn = False
    spring = False

    for subject_version in subject_versions:
        if subject_version.semester == "AUTUMN":
            autumn = True
        elif subject_version.semester == "SPRING":
            spring = True
        else:
            autumn = True
            spring = True
            break

    if autumn and spring:
        return "BOTH"
    elif autumn:
        return "AUTUMN"
    else:
        return "SPRING"


def get_prerequisite_names(prerequisites: List[Prerequisite]) -> List[str]:
    prerequisite_names = []
    for prerequisite in prerequisites:
        prerequisite_names.append(prerequisite.prerequisite.name)
    return prerequisite_names


def score_to_grade(score: int) -> str:
    if score >= 91:
        return "A"
    elif score >= 81:
        return "B"
    elif score >= 71:
        return "C"
    elif score >= 61:
        return "D"
    elif score >= 51:
        return "E"
    else:
        return "F"


def get_comments(comments: List[Comment], user_id: int) -> List[Dict[str, Union[str, datetime, bool]]]:
    result: List[Dict[str, Union[str, datetime, bool]]] = []
    for comment in comments:
        result.append(
            {
                "nickname": comment.nickname.nickname,
                "datetime": comment.datetime,
                "comment": comment.comment,
                "is_your_comment": comment.user.id == user_id,
            }
        )
    return result
