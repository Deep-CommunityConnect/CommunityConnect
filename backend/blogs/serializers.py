from rest_framework import serializers
from .models import Blog

class BlogSerializer(serializers.ModelSerializer):
    class Meta:
        model = Blog
        fields = "__all__"
        read_only_fields = ("organization", "reading_time", "created_at", "updated_at")

class BlogCardSerializer(serializers.ModelSerializer):
    class Meta:
        model = Blog
        fields = [ "id", "title", "slug", "cover_image", "reading_time", "excerpt", "created_at"]
