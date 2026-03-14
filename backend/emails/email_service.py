from django.core.mail import EmailMultiAlternatives
from django.template.loader import render_to_string
from django.conf import settings
from datetime import datetime
import threading

def send_html_email(subject, template, context, recipient_list):

    def send():

        html_content = render_to_string(template, context)

        email = EmailMultiAlternatives(
            subject=subject,
            body="",
            from_email=settings.DEFAULT_FROM_EMAIL,
            to=recipient_list,
        )

        email.attach_alternative(html_content, "text/html")
        email.send(fail_silently=False)

    thread = threading.Thread(target=send)
    thread.start()

# ---------------------------------------------------
# 1️⃣ Registration Success Email
# ---------------------------------------------------

def send_registration_success_email(user):

    context = {
        "name": user.email,   # if field different, change to user.email or user.username
    }

    send_html_email(
        subject="Welcome to Volunteer Platform",
        template="emails/registration_success.html",
        context=context,
        recipient_list=[user.email],
    )


# ---------------------------------------------------
# 2️⃣ Opportunity Created Email (Mass Email)
# ---------------------------------------------------

def send_opportunity_created_email(opportunity, volunteers):

    context = {
        "opportunity_title": opportunity.title,
        "location": opportunity.location,
        "start_date": opportunity.start_date,
    }

    for v in volunteers:
        email = v.user.email
        if email:
            send_html_email(
                subject=f"New Opportunity: {opportunity.title}",
                template="emails/opportunity_created.html",
                context=context,
                recipient_list=[email],
            )

# ---------------------------------------------------
# 3️⃣ Application Status Updated Email
# ---------------------------------------------------

def send_application_status_email(application):

    status = application.status.lower()

    context = {
        "opportunity_title": application.opportunity.title,
        "status": status.capitalize(),
        "status_class": status
    }

    send_html_email(
        subject="Application Status Updated",
        template="emails/application_status_update.html",
        context=context,
        recipient_list=[application.volunteer.user.email],
    )
