# Create your models here.
from django.db import models
from authentication.models import AuthUser

class VolunteerProfile(models.Model):
    user = models.OneToOneField(AuthUser, on_delete=models.CASCADE)
    name = models.CharField(max_length=100)
    bio = models.TextField(blank=True)
    image = models.ImageField(
        upload_to='volunteer/',
        default='default/avatar.png',
        blank=True
    )

    def __str__(self):
        return self.name