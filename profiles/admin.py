from django.contrib import admin

from .models import Profile, ChampionLeague, EnglishPremierLeague, EuropaLeague, AfconLeague, Baseball, Bundesliga, Formula1,  Laliga, NBA,  NFL, Worldcup

admin.site.register(ChampionLeague)
admin.site.register(EuropaLeague)
admin.site.register(AfconLeague)
admin.site.register(Baseball)
admin.site.register(Bundesliga)
admin.site.register(Formula1)
admin.site.register(Laliga)
admin.site.register(NBA)
admin.site.register(NFL)
admin.site.register(Worldcup)
admin.site.register(EnglishPremierLeague)
admin.site.register(Profile)