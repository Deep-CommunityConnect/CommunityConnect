from django.dispatch import receiver
from .signals import user_registered, opportunity_created, application_status_changed
from .email_service import (
    send_registration_success_email,
    send_opportunity_created_email,
    send_application_status_email
)

@receiver(user_registered)
def handle_user_registration(sender, user, **kwargs):
    """
    Receiver to send a registration success email when the user_registered signal is fired.
    """
    try:
        send_registration_success_email(user)
    except Exception as e:
        print(f"Signal Email Error (Registration): {str(e)}")

@receiver(opportunity_created)
def handle_opportunity_creation(sender, opportunity, volunteers, **kwargs):
    """
    Receiver to send an email notification when a new opportunity is created.
    """
    try:
        send_opportunity_created_email(opportunity, volunteers)
    except Exception as e:
        print(f"Signal Email Error (Opportunity Created): {str(e)}")

@receiver(application_status_changed)
def handle_application_status_change(sender, application, **kwargs):
    """
    Receiver to send an email update when an application status changes.
    """
    try:
        send_application_status_email(application)
    except Exception as e:
        print(f"Signal Email Error (Status Update): {str(e)}")
