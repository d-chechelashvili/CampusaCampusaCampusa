from django.http import JsonResponse
from rest_framework.views import APIView

from backend.mixins import APIErrorsMixin, PublicAPIMixin
from backend.models.subject import Subject, SubjectSerializer
from backend.models.subject_version import SubjectVersion


class SubjectListAPI(PublicAPIMixin, APIErrorsMixin, APIView):
    # permission_classes = [IsAuthenticated]
    #example of joins
    def get(self, request):
        subjectss = SubjectVersion.objects.select_related().first()
        print(subjectss.subject.name)
        subjects = Subject.objects.all()
        serializer = SubjectSerializer(subjects, many=True)
        return JsonResponse(serializer.data, safe=False)
