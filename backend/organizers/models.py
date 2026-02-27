from django.db import models
from authentication.models import AuthUser

class OrganizationProfile(models.Model):
    user = models.OneToOneField(AuthUser, on_delete=models.CASCADE)
    name = models.CharField(max_length=150)
    bio = models.TextField(blank=True)
    image = models.ImageField(
        upload_to='organization/',
        default='default/avatar.png',
        blank=True
    )

    def __str__(self):
        return self.name

class Opportunity(models.Model):
    organization = models.ForeignKey(OrganizationProfile, on_delete=models.CASCADE)
    title = models.CharField(max_length=200)
    description = models.TextField()
    created_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return f"{self.title} - {self.organization.name}"

class Application(models.Model):
    volunteer = models.ForeignKey('users.VolunteerProfile', on_delete=models.CASCADE)
    opportunity = models.ForeignKey(Opportunity, on_delete=models.CASCADE)
    status = models.CharField(
        max_length=20,
        choices=[('pending','pending'),('accepted','accepted'),('rejected','rejected')],
        default='pending'
    )
    created_at = models.DateTimeField(auto_now_add=True)

    class Meta:
        unique_together = ('volunteer', 'opportunity')

    def __str__(self):
        return f"{self.volunteer.name} → {self.opportunity.title} ({self.status})"
