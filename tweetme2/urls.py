"""tweetme2 URL Configuration

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/2.2/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  path('', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  path('', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.urls import include, path
    2. Add a URL to urlpatterns:  path('blog/', include('blog.urls'))
"""
from django.conf import settings
from django.conf.urls.static import static
from django.contrib import admin
from django.urls import path, re_path, include # url()
from django.views.generic import TemplateView

# from accounts.views import RegisterAPI
# from knox import views as knox_views
# from accounts.views import LoginAPI
# from django.urls import path


from Afcon.views import (
    Afconhome_view,
    Afcontweets_list_view,
    Afcontweets_detail_view,
)

from Baseball.views import (
    Baseballhome_view,
    Baseballtweets_list_view,
    Baseballtweets_detail_view,
)

from Bundesliga.views import (
    Bundesligahome_view,
    Bundesligatweets_list_view,
    Bundesligatweets_detail_view,
)
from Champions.views import (
    Championshome_view,
    Championstweets_list_view,
    Championstweets_detail_view,
)
from Europa.views import (
    Europahome_view,
    Europatweets_list_view,
    Europatweets_detail_view,
)
from Formula1.views import (
    Formula1home_view,
    Formula1tweets_list_view,
    Formula1tweets_detail_view,
)
from Laliga.views import (
    Laligahome_view,
    Laligatweets_list_view,
    Laligatweets_detail_view,
)
from NBA.views import (
    NBAhome_view,
    NBAtweets_list_view,
    NBAtweets_detail_view,
)
from tweets.views import (
    home_view,
    tweets_list_view,
    tweets_detail_view,
)

from NFL.views import (
    NFLhome_view,
    NFLtweets_list_view,
    NFLtweets_detail_view,
)
from Worldcup.views import (
    Worldcuphome_view,
    Worldcuptweets_list_view,
    Worldcuptweets_detail_view,
)


urlpatterns = [
    path('api/', include('accounts.urls')),
    path('', home_view),
    path('Afcon/', Afconhome_view),
    path('Baseball/', Baseballhome_view),
    path('Bundesliga/', Bundesligahome_view),
    path('Champions/', Championshome_view),
    path('Europa/', Europahome_view),
    path('Formula1/', Formula1home_view),
    path('Laliga/', Laligahome_view),
    path('NBA/', NBAhome_view),
    path('NFL/', NFLhome_view),
    path('Worldcup/', Worldcuphome_view),
    path('admin/', admin.site.urls),
    path('react/', TemplateView.as_view(template_name='react.html')),
    path('global/', tweets_list_view),
    # path('api/register/', RegisterAPI.as_view(), name='register'),
    # path('api/login/', LoginAPI.as_view(), name='login'),
    # path('api/logout/', knox_views.LogoutView.as_view(), name='logout'),
    # path('api/logoutall/', knox_views.LogoutAllView.as_view(), name='logoutall'),
    # path('login/', login_view),
    # path('logout/', logout_view),
    # path('register/', register_view),
    path('Afcon/<int:tweet_id>/', Afcontweets_detail_view),
    path('Baseball/<int:tweet_id>/', Baseballtweets_detail_view),
    path('Bundesliga/<int:tweet_id>/', Bundesligatweets_detail_view),
    path('Champions/<int:tweet_id>/', Championstweets_detail_view),
    path('Europa/<int:tweet_id>/', Europatweets_detail_view),
    path('Formula1/<int:tweet_id>/', Formula1tweets_detail_view),
    path('Laliga/<int:tweet_id>/', Laligatweets_detail_view),
    path('NBA/<int:tweet_id>/', NBAtweets_detail_view),
    path('NFL/<int:tweet_id>/', NFLtweets_detail_view),
    path('Worldcup/<int:tweet_id>/', Worldcuptweets_detail_view),
    path('<int:tweet_id>', tweets_detail_view),
    re_path(r'profiles?/', include('profiles.urls')),
    path('api/tweets/', include('tweets.api.urls')),
    path('api/NBA/', include('NBA.api.urls')),
    path('api/NFL/', include('NFL.api.urls')),
    path('api/Laliga/', include('Laliga.api.urls')),
    path('api/Bundesliga/', include('Bundesliga.api.urls')),
    path('api/Worldcup/', include('Worldcup.api.urls')),
    path('api/Afcon/', include('Afcon.api.urls')),
    
    path('api/Baseball/', include('Baseball.api.urls')),
    path('api/Europa/', include('Europa.api.urls')),
    path('api/Formula1/', include('Formula1.api.urls')),
    path('api/Champions/', include('Champions.api.urls')),
    re_path(r'api/profiles?/', include('profiles.api.urls')),
]

if settings.DEBUG:
    urlpatterns += static(settings.STATIC_URL, 
                document_root=settings.STATIC_ROOT)
    urlpatterns += static(settings.MEDIA_URL, 
                document_root=settings.MEDIA_ROOT)