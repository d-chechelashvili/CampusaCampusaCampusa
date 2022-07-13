from typing import List

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
    fall = False
    spring = False

    for subject_version in subject_versions:
        if subject_version.semester == "FALL":
            fall = True
        elif subject_version.semester == "SPRING":
            spring = True
        else:
            fall = True
            spring = True
            break

    if fall and spring:
        return "BOTH"
    elif fall:
        return "FALL"
    else:
        return "SPRING"


def get_prerequisite_names(prerequisites: List[Prerequisite]) -> List[str]:
    prerequisite_names = []
    for prerequisite in prerequisites:
        prerequisite_names.append(prerequisite.prerequisite.name)
    return prerequisite_names


def get_postrequisite_names(postrequisites: List[Prerequisite]) -> List[str]:
    postrequisite_names = []
    for postrequisite in postrequisites:
        postrequisite_names.append(postrequisite.subject.name)
    return postrequisite_names


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
