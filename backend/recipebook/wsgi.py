"""
WSGI config for recipebook project.

It exposes the WSGI callable as a module-level variable named ``application``.

For more information on this file, see
https://docs.djangoproject.com/en/4.2/howto/deployment/wsgi/
"""

import os
import django
from django.core.management import call_command
from django.core.wsgi import get_wsgi_application

os.environ.setdefault('DJANGO_SETTINGS_MODULE', 'recipebook.settings')

application = get_wsgi_application()

if os.environ.get("ENV") == "production":
  django.setup()
  call_command("migrate", interactive=False)
  print("Migrations applied successfully.")