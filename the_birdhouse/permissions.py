# Permissions from the rest framework walkthrough
from rest_framework import permissions

class IsPersonOrReadOnly(permissions.BasePermission):
  def has_object_permission(self, request, view, obj):
    if request.method in permissions.SAFE_METHODS:
      return True
    return obj.person == request.user