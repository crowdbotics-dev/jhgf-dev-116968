from django.urls import path, include
from rest_framework.routers import DefaultRouter
from .viewsets import CvbghViewSet,VbfdViewSet,CdfsViewSet,CdfsViewSet,CvbghViewSet,VbfdViewSet,CdfsViewSet,CvbghViewSet,VbfdViewSet,CdfsViewSet,CvbghViewSet,VbfdViewSet

from home.api.v1.viewsets import (
    SignupViewSet,
    LoginViewSet,
)

router = DefaultRouter()
router.register("signup", SignupViewSet, basename="signup")
router.register("login", LoginViewSet, basename="login")
router.register('cvbgh', CvbghViewSet )
router.register('vbfd', VbfdViewSet )
router.register('cdfs', CdfsViewSet )

urlpatterns = [
    path("", include(router.urls)),
]
