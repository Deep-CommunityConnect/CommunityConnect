from django.contrib import admin
from .models import Blog

@admin.register(Blog)
class BlogAdmin(admin.ModelAdmin):
    list_display = ("title", "organization", "is_published", "created_at")
    prepopulated_fields = {"slug": ("title",)}
