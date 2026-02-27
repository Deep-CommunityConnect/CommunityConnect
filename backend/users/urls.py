from rest_framework.routers import DefaultRouter
from .views import VolunteerViewSet

router = DefaultRouter()
router.register('', VolunteerViewSet, basename='users')

urlpatterns = router.urls
