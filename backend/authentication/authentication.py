from rest_framework_simplejwt.authentication import JWTAuthentication
from rest_framework_simplejwt.exceptions import InvalidToken, AuthenticationFailed
from authentication.models import AuthUser


class CustomJWTAuthentication(JWTAuthentication):
    """
    Custom JWT authentication that looks up users from the
    custom AuthUser model instead of Django's default User model.
    """

    def get_user(self, validated_token):
        try:
            user_id = validated_token.get('user_id')
            if user_id is None:
                raise InvalidToken('Token contained no recognizable user identification')

            user = AuthUser.objects.get(id=user_id)

            if not user.is_active:
                raise AuthenticationFailed('User is inactive')

            return user

        except AuthUser.DoesNotExist:
            raise AuthenticationFailed('User not found')
