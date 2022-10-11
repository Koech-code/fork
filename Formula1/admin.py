from django.contrib import admin

# Register your models here.
from .models import Tweet, Formula1TweetLike, Comment, Formula1CommentLike


class TweetLikeAdmin(admin.TabularInline):
    model = Formula1TweetLike

class CommentLikeAdmin(admin.TabularInline):
    model = Formula1CommentLike

class TweetAdmin(admin.ModelAdmin):
    inlines = [TweetLikeAdmin]
    list_display = ['__str__', 'user']
    search_fields = ['content', 'user__username', 'user__email']
    class Meta:
        model = Tweet

class CommentAdmin(admin.ModelAdmin):
    inlines = [CommentLikeAdmin]
    list_display = ['__str__', 'user']
    search_fields = ['content', 'user__username', 'user__email']
    class Meta:
        model = Comment

admin.site.register(Tweet, TweetAdmin)
admin.site.register(Comment, CommentAdmin)


from django.contrib import admin

# Register your models here.
