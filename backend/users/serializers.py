from rest_framework import serializers
from .models import VolunteerProfile

class VolunteerProfileSerializer(serializers.ModelSerializer):
    class Meta:
        model = VolunteerProfile
        fields = ['name', 'bio', 'image']
