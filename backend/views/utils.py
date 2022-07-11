from django.conf import settings


def calculate_rating(ratings):
    if len(ratings) == 0:
        return 0

    total = 0
    for rating in ratings:
        total += rating.rating
    return total / len(ratings)


def calculate_difficulty(difficulties):
    if len(difficulties) == 0:
        return 0

    total = 0
    for difficulty in difficulties:
        total += difficulty.difficulty
    return total / len(difficulties)


def get_semester(subject_versions):
    autumn = False
    spring = False

    for subject_version in subject_versions:
        if subject_version.semester == 'AUTUMN':
            autumn = True
        elif subject_version.semester == 'SPRING':
            spring = True
        else:
            autumn = True
            spring = True
            break

    if autumn and spring:
        return 'BOTH'
    elif autumn:
        return 'AUTUMN'
    else:
        return 'SPRING'


def get_prerequisite_names(prerequisites):
    prerequisite_names = []
    for prerequisite in prerequisites:
        prerequisite_names.append(prerequisite.prerequisite.name)
    return prerequisite_names


def score_to_grade(score):
    if score >= 91:
        return 'A'
    elif score >= 81:
        return 'B'
    elif score >= 71:
        return 'C'
    elif score >= 61:
        return 'D'
    elif score >= 51:
        return 'E'
    else:
        return 'F'


def get_grades(scores):
    grades = []
    for score in scores:
        grades.append({
            'score': score_to_grade(score.score),
            'year': score.year,
            'semester': score.semester
        })
    return grades


def get_comments(comments, user_id):
    result = []
    for comment in comments:
        result.append({
            'nickname': comment.nickname.nickname,
            'datetime': comment.datetime,
            'comment': comment.comment,
            'is_your_comment': comment.user.id == user_id
        })
    return result
