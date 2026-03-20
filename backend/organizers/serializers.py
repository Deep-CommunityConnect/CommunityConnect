from rest_framework import serializers
from .models import OrganizationProfile, Opportunity, Application

class OrganizationProfileSerializer(serializers.ModelSerializer):
    class Meta:
        model = OrganizationProfile
        fields = '__all__'
        read_only_fields = ['created_at']

class OpportunitySerializer(serializers.ModelSerializer):
    is_active = serializers.BooleanField(required=False, default=True)

    class Meta:
        model = Opportunity
        fields = '__all__'
        read_only_fields = ['created_at', 'organization']

class ApplicationStatusSerializer(serializers.ModelSerializer):
    class Meta:
        model = Application
        fields = ['status']
