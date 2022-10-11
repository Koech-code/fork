from django.urls import path

from .views import (
    profile_detail_api_view,
    profile_update_view,
    tweet_list_view,
)
'''
CLIENT
Base ENDPOINT /api/profiles/
'''
urlpatterns = [
    path('<str:username>/', profile_detail_api_view),
    path('<str:username>/list', tweet_list_view),
    path('<str:username>/follow', profile_detail_api_view),
    path('<str:username>/edit', profile_update_view),
]
