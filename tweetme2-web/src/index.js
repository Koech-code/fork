import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {ProfileBadgeComponent} from './profiles'
import {FeedComponent, CommentFeedComponent, TweetsComponent, CommentDetailComponent, TweetDetailComponent} from './tweets'
import {NBAFeedComponent, NBACommentFeedComponent, NBATweetsComponent, NBACommentDetailComponent, NBATweetDetailComponent} from './NBA'
import {WorldcupFeedComponent, WorldcupCommentFeedComponent, WorldcupTweetsComponent, WorldcupCommentDetailComponent, WorldcupTweetDetailComponent} from './Worldcup'
import {LaligaFeedComponent, LaligaCommentFeedComponent, LaligaTweetsComponent, LaligaCommentDetailComponent, LaligaTweetDetailComponent} from './Laliga'
import {BundesligaFeedComponent, BundesligaCommentFeedComponent, BundesligaTweetsComponent, BundesligaCommentDetailComponent, BundesligaTweetDetailComponent} from './Bundesliga'
import {NFLFeedComponent, NFLCommentFeedComponent, NFLTweetsComponent, NFLCommentDetailComponent, NFLTweetDetailComponent} from './NFL'
import {ChampionsFeedComponent, ChampionsCommentFeedComponent, ChampionsTweetsComponent, ChampionsCommentDetailComponent, ChampionsTweetDetailComponent} from './Champions'
import {BaseballFeedComponent, BaseballCommentFeedComponent, BaseballTweetsComponent, BaseballCommentDetailComponent, BaseballTweetDetailComponent} from './Baseball'
import {AfconFeedComponent, AfconCommentFeedComponent, AfconTweetsComponent, AfconCommentDetailComponent, AfconTweetDetailComponent} from './Afcon'
import {Formula1FeedComponent, Formula1CommentFeedComponent, Formula1TweetsComponent, Formula1CommentDetailComponent, Formula1TweetDetailComponent} from './Formula1'
import {EuropaFeedComponent, EuropaCommentFeedComponent, EuropaTweetsComponent, EuropaCommentDetailComponent, EuropaTweetDetailComponent} from './Europa'
import * as serviceWorker from './serviceWorker';

const appEl = document.getElementById('root')
if (appEl) {
    ReactDOM.render(<App />, appEl);
}
const e = React.createElement
const tweetsEl = document.getElementById("tweetme-2")
if (tweetsEl) {
    ReactDOM.render(
        e(TweetsComponent, tweetsEl.dataset), tweetsEl);
}

const tweetsNBAEl = document.getElementById("tweetme-2-NBA")
if (tweetsNBAEl) {
    ReactDOM.render(
        e(NBATweetsComponent, tweetsNBAEl.dataset), tweetsNBAEl);
}

const tweetsChampionsEl = document.getElementById("tweetme-2-Champions")
if (tweetsChampionsEl) {
    ReactDOM.render(
        e(ChampionsTweetsComponent, tweetsChampionsEl.dataset), tweetsChampionsEl);
}

const tweetsFormula1El = document.getElementById("tweetme-2-Formula1")
if (tweetsFormula1El) {
    ReactDOM.render(
        e(Formula1TweetsComponent, tweetsFormula1El.dataset), tweetsFormula1El);
}

const tweetsEuropaEl = document.getElementById("tweetme-2-Europa")
if (tweetsEuropaEl) {
    ReactDOM.render(
        e(EuropaTweetsComponent, tweetsEuropaEl.dataset), tweetsEuropaEl);
}

const tweetsBaseballEl = document.getElementById("tweetme-2-Baseball")
if (tweetsBaseballEl) {
    ReactDOM.render(
        e(BaseballTweetsComponent, tweetsBaseballEl.dataset), tweetsBaseballEl);
}

const tweetsAfconEl = document.getElementById("tweetme-2-Afcon")
if (tweetsAfconEl) {
    ReactDOM.render(
        e(AfconTweetsComponent, tweetsAfconEl.dataset), tweetsAfconEl);
}

const tweetsWorldcupEl = document.getElementById("tweetme-2-Worldcup")
if (tweetsWorldcupEl) {
    ReactDOM.render(
        e(WorldcupTweetsComponent, tweetsWorldcupEl.dataset), tweetsWorldcupEl);
}

const tweetsBundesligaEl = document.getElementById("tweetme-2-Bundesliga")
if (tweetsBundesligaEl) {
    ReactDOM.render(
        e(BundesligaTweetsComponent, tweetsBundesligaEl.dataset), tweetsBundesligaEl);
}

const tweetsLaligaEl = document.getElementById("tweetme-2-Laliga")
if (tweetsLaligaEl) {
    ReactDOM.render(
        e(LaligaTweetsComponent, tweetsLaligaEl.dataset), tweetsLaligaEl);
}

const tweetsNFLEl = document.getElementById("tweetme-2-NFL")
if (tweetsNFLEl) {
    ReactDOM.render(
        e(NFLTweetsComponent, tweetsNFLEl.dataset), tweetsNFLEl);
}

const tweetFeedEl = document.getElementById("tweetme-2-feed")
if (tweetFeedEl) {
    ReactDOM.render(
        e(FeedComponent, tweetFeedEl.dataset), tweetFeedEl);
}

const tweetNBAFeedEl = document.getElementById("tweetme-2-NBAfeed")
if (tweetNBAFeedEl) {
    ReactDOM.render(
        e(NBAFeedComponent, tweetNBAFeedEl.dataset), tweetNBAFeedEl);
}

const tweetChampionsFeedEl = document.getElementById("tweetme-2-Championsfeed")
if (tweetChampionsFeedEl) {
    ReactDOM.render(
        e(ChampionsFeedComponent, tweetChampionsFeedEl.dataset), tweetChampionsFeedEl);
}

const tweetFormula1FeedEl = document.getElementById("tweetme-2-Formula1feed")
if (tweetFormula1FeedEl) {
    ReactDOM.render(
        e(Formula1FeedComponent, tweetFormula1FeedEl.dataset), tweetFormula1FeedEl);
}

const tweetEuropaFeedEl = document.getElementById("tweetme-2-Europafeed")
if (tweetEuropaFeedEl) {
    ReactDOM.render(
        e(EuropaFeedComponent, tweetEuropaFeedEl.dataset), tweetEuropaFeedEl);
}

const tweetBaseballFeedEl = document.getElementById("tweetme-2-Baseballfeed")
if (tweetBaseballFeedEl) {
    ReactDOM.render(
        e(BaseballFeedComponent, tweetBaseballFeedEl.dataset), tweetBaseballFeedEl);
}

const tweetAfconFeedEl = document.getElementById("tweetme-2-Afconfeed")
if (tweetAfconFeedEl) {
    ReactDOM.render(
        e(AfconFeedComponent, tweetAfconFeedEl.dataset), tweetAfconFeedEl);
}

const tweetWorldcupFeedEl = document.getElementById("tweetme-2-Worldcupfeed")
if (tweetWorldcupFeedEl) {
    ReactDOM.render(
        e(WorldcupFeedComponent, tweetWorldcupFeedEl.dataset), tweetWorldcupFeedEl);
}

const tweetBundesligaFeedEl = document.getElementById("tweetme-2-Bundesligafeed")
if (tweetBundesligaFeedEl) {
    ReactDOM.render(
        e(BundesligaFeedComponent, tweetBundesligaFeedEl.dataset), tweetBundesligaFeedEl);
}

const tweetLaligaFeedEl = document.getElementById("tweetme-2-Laligafeed")
if (tweetLaligaFeedEl) {
    ReactDOM.render(
        e(LaligaFeedComponent, tweetLaligaFeedEl.dataset), tweetLaligaFeedEl);
}


const tweetNFLFeedEl = document.getElementById("tweetme-2-NFLfeed")
if (tweetNFLFeedEl) {
    ReactDOM.render(
        e(NFLFeedComponent, tweetNFLFeedEl.dataset), tweetNFLFeedEl);
}

const commentFeedEl = document.getElementById("tweetme-2-commentfeed")
if (commentFeedEl) {
    ReactDOM.render(
        e(CommentFeedComponent, commentFeedEl.dataset), commentFeedEl);
}

const commentNBAFeedEl = document.getElementById("tweetme-2-NBAcommentfeed")
if (commentNBAFeedEl) {
    ReactDOM.render(
        e(NBACommentFeedComponent, commentNBAFeedEl.dataset), commentNBAFeedEl);
}


const commentChampionsFeedEl = document.getElementById("tweetme-2-Championscommentfeed")
if (commentChampionsFeedEl) {
    ReactDOM.render(
        e(ChampionsCommentFeedComponent, commentChampionsFeedEl.dataset), commentChampionsFeedEl);
}

const commentFormula1FeedEl = document.getElementById("tweetme-2-Formula1commentfeed")
if (commentFormula1FeedEl) {
    ReactDOM.render(
        e(Formula1CommentFeedComponent, commentFormula1FeedEl.dataset), commentFormula1FeedEl);
}


const commentEuropaFeedEl = document.getElementById("tweetme-2-Europacommentfeed")
if (commentEuropaFeedEl) {
    ReactDOM.render(
        e(EuropaCommentFeedComponent, commentEuropaFeedEl.dataset), commentEuropaFeedEl);
}

const commentBaseballFeedEl = document.getElementById("tweetme-2-Baseballcommentfeed")
if (commentBaseballFeedEl) {
    ReactDOM.render(
        e(BaseballCommentFeedComponent, commentBaseballFeedEl.dataset), commentBaseballFeedEl);
}

const commentAfconFeedEl = document.getElementById("tweetme-2-Afconcommentfeed")
if (commentAfconFeedEl) {
    ReactDOM.render(
        e(AfconCommentFeedComponent, commentAfconFeedEl.dataset), commentAfconFeedEl);
}

const commentWorldcupFeedEl = document.getElementById("tweetme-2-Worldcupcommentfeed")
if (commentWorldcupFeedEl) {
    ReactDOM.render(
        e(WorldcupCommentFeedComponent, commentWorldcupFeedEl.dataset), commentWorldcupFeedEl);
}

const commentBundesligaFeedEl = document.getElementById("tweetme-2-Bundesligacommentfeed")
if (commentBundesligaFeedEl) {
    ReactDOM.render(
        e(BundesligaCommentFeedComponent, commentBundesligaFeedEl.dataset), commentBundesligaFeedEl);
}

const commentLaligaFeedEl = document.getElementById("tweetme-2-Laligacommentfeed")
if (commentLaligaFeedEl) {
    ReactDOM.render(
        e(LaligaCommentFeedComponent, commentLaligaFeedEl.dataset), commentLaligaFeedEl);
}

const commentNFLFeedEl = document.getElementById("tweetme-2-NFLcommentfeed")
if (commentNFLFeedEl) {
    ReactDOM.render(
        e(NFLCommentFeedComponent, commentNFLFeedEl.dataset), commentNFLFeedEl);
}


const tweetDetailElements = document.querySelectorAll(".tweetme-2-detail")

tweetDetailElements.forEach(container=> {
    ReactDOM.render(
        e(TweetDetailComponent, container.dataset), 
        container);
})




const tweetNBADetailElements = document.querySelectorAll(".tweetme-2-NBAdetail")

tweetNBADetailElements.forEach(container=> {
    ReactDOM.render(
        e(NBATweetDetailComponent, container.dataset), 
        container);
})


const tweetChampionsDetailElements = document.querySelectorAll(".tweetme-2-Championsdetail")

tweetChampionsDetailElements.forEach(container=> {
    ReactDOM.render(
        e(ChampionsTweetDetailComponent, container.dataset), 
        container);
})

const tweetFormula1DetailElements = document.querySelectorAll(".tweetme-2-Formula1detail")

tweetFormula1DetailElements.forEach(container=> {
    ReactDOM.render(
        e(Formula1TweetDetailComponent, container.dataset), 
        container);
})

const tweetEuropaDetailElements = document.querySelectorAll(".tweetme-2-Europadetail")

tweetEuropaDetailElements.forEach(container=> {
    ReactDOM.render(
        e(EuropaTweetDetailComponent, container.dataset), 
        container);
})

const tweetBaseballDetailElements = document.querySelectorAll(".tweetme-2-Baseballdetail")

tweetBaseballDetailElements.forEach(container=> {
    ReactDOM.render(
        e(BaseballTweetDetailComponent, container.dataset), 
        container);
})
const tweetAfconDetailElements = document.querySelectorAll(".tweetme-2-Afcondetail")
tweetAfconDetailElements.forEach(container=> {
    ReactDOM.render(
        e(AfconTweetDetailComponent, container.dataset), 
        container);
})

const tweetWorldcupDetailElements = document.querySelectorAll(".tweetme-2-Worldcupdetail")

tweetWorldcupDetailElements.forEach(container=> {
    ReactDOM.render(
        e(WorldcupTweetDetailComponent, container.dataset), 
        container);
})

const tweetBundesligaDetailElements = document.querySelectorAll(".tweetme-2-Bundesligadetail")

tweetBundesligaDetailElements.forEach(container=> {
    ReactDOM.render(
        e(BundesligaTweetDetailComponent, container.dataset), 
        container);
})

const tweetLaligaDetailElements = document.querySelectorAll(".tweetme-2-Laligadetail")

tweetLaligaDetailElements.forEach(container=> {
    ReactDOM.render(
        e(LaligaTweetDetailComponent, container.dataset), 
        container);
})

const tweetNFLDetailElements = document.querySelectorAll(".tweetme-2-NFLdetail")

tweetNFLDetailElements.forEach(container=> {
    ReactDOM.render(
        e(NFLTweetDetailComponent, container.dataset), 
        container);
})

const commentDetailElements = document.querySelectorAll(".tweetme-2-commentdetail")

commentDetailElements.forEach(container=> {
    ReactDOM.render(
        e(CommentDetailComponent, container.dataset), 
        container);
})

const commentNBADetailElements = document.querySelectorAll(".tweetme-2-NBAcommentdetail")

commentNBADetailElements.forEach(container=> {
    ReactDOM.render(
        e(NBACommentDetailComponent, container.dataset), 
        container);
})

const commentChampionsDetailElements = document.querySelectorAll(".tweetme-2-Championscommentdetail")

commentChampionsDetailElements.forEach(container=> {
    ReactDOM.render(
        e(ChampionsCommentDetailComponent, container.dataset), 
        container);
})


const commentFormula1DetailElements = document.querySelectorAll(".tweetme-2-Formula1commentdetail")

commentFormula1DetailElements.forEach(container=> {
    ReactDOM.render(
        e(Formula1CommentDetailComponent, container.dataset), 
        container);
})

const commentEuropaDetailElements = document.querySelectorAll(".tweetme-2-Europacommentdetail")

commentEuropaDetailElements.forEach(container=> {
    ReactDOM.render(
        e(EuropaCommentDetailComponent, container.dataset), 
        container);
})

const commentBaseballDetailElements = document.querySelectorAll(".tweetme-2-Baseballcommentdetail")

commentBaseballDetailElements.forEach(container=> {
    ReactDOM.render(
        e(BaseballCommentDetailComponent, container.dataset), 
        container);
})


const commentAfconDetailElements = document.querySelectorAll(".tweetme-2-Afconcommentdetail")

commentAfconDetailElements.forEach(container=> {
    ReactDOM.render(
        e(AfconCommentDetailComponent, container.dataset), 
        container);
})

const commentWorldcupDetailElements = document.querySelectorAll(".tweetme-2-Worldcupcommentdetail")

commentWorldcupDetailElements.forEach(container=> {
    ReactDOM.render(
        e(WorldcupCommentDetailComponent, container.dataset), 
        container);
})

const commentBundesligaDetailElements = document.querySelectorAll(".tweetme-2-Bundesligacommentdetail")

commentBundesligaDetailElements.forEach(container=> {
    ReactDOM.render(
        e(BundesligaCommentDetailComponent, container.dataset), 
        container);
})

const commentLaligaDetailElements = document.querySelectorAll(".tweetme-2-Laligacommentdetail")

commentLaligaDetailElements.forEach(container=> {
    ReactDOM.render(
        e(LaligaCommentDetailComponent, container.dataset), 
        container);
})

const commentNFLDetailElements = document.querySelectorAll(".tweetme-2-NFLcommentdetail")

commentNFLDetailElements.forEach(container=> {
    ReactDOM.render(
        e(NFLCommentDetailComponent, container.dataset), 
        container);
})

const userProfileBadgeElements = document.querySelectorAll(".tweetme-2-profile-badge")

userProfileBadgeElements.forEach(container=> {
    ReactDOM.render(
        e(ProfileBadgeComponent, container.dataset), 
        container);
})
// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
