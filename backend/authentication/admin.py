from django.contrib import admin
from .models import AuthUser

@admin.register(AuthUser)
class AuthUserAdmin(admin.ModelAdmin):
    list_display = ('id', 'email', 'role', 'created_at')
    search_fields = ('email',)
    list_filter = ('role',)
