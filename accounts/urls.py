
from django.urls import path
from django.conf import settings
from django.conf.urls.static import static
from . views import RegisterView, LoginView, UserView, LogoutView

urlpatterns = [
    path('register/', RegisterView.as_view()),
    path('login/', LoginView.as_view()),
    path('user/', UserView.as_view()),
    path('logout/', LogoutView.as_view())
     
]

if settings.DEBUG:
    urlpatterns += static(settings.STATIC_URL, document_root=settings.STATIC_ROOT)
    urlpatterns += static(settings.MEDIA_URL, 
                document_root=settings.MEDIA_ROOT)