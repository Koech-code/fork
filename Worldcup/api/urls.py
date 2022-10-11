from django.urls import path

from .views import (
    get_videos_view,
    tweet_action_view,
    tweet_delete_view,
    tweet_detail_view,
    tweet_feed_view,
    tweet_list_view,
    tweet_create_view,
    # comment_action_view,
    # comment_delete_view,
    # comment_detail_view,
    # comment_create_view,
    # comment_feed_view,
    upload_video_view,
    get_videos_view
)
'''
CLIENT
Base ENDPOINT /api/tweets/
'''
urlpatterns = [
    path('uploadvideos/', upload_video_view),
    path('getvideos/', get_videos_view),
    path('', tweet_list_view),
    path('feed/', tweet_feed_view),
    path('action/', tweet_action_view),
    # path('commentaction/',comment_action_view),
    # path('commentfeed/', comment_feed_view),
    path('create/', tweet_create_view),
    
    # path('commentcreate/', comment_create_view),
    path('<int:tweet_id>/', tweet_detail_view),
    path('<int:tweet_id>/delete/', tweet_delete_view),
    # path('<int:comment_id>/', comment_detail_view),
    # path('<int:comment_id>/delete', comment_delete_view),
]
