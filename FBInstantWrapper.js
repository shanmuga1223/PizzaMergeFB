var preloadedRewardedVideo = null;
var preloadedInterstitial = null;

window.GetRewardedAD = function() {
    FBInstant.getRewardedVideoAsync('297914763115953_297921203115309').then(function(rewarded) {
        preloadedRewardedVideo = rewarded;
        return preloadedRewardedVideo.loadAsync();
    }).then(function() {
        console.log('Rewarded video preloaded');
    }).catch(function(err) {
        console.error('Rewarded video failed to preload: ' + err.message);
    });
}

window.ShowRewardedAD = function() {
    preloadedRewardedVideo.showAsync().then(function() {
        console.log('Rewarded video watched successfully');
        myGameInstance.SendMessage('FBInstant', 'RewardedADShown');
    }).catch(function(e) {
        myGameInstance.SendMessage('FBInstant', 'RewardedADNotShown');
        console.error(e.message);
    });
}

window.GetInterstitialAD = function() {
    FBInstant.getInterstitialAdAsync('297914763115953_297920556448707').then(function(interstitial) {
        preloadedInterstitial = interstitial;
        return preloadedInterstitial.loadAsync();
    }).then(function() {
        console.log('Interstitial preloaded');
    }).catch(function(err) {
        console.error('Interstitial failed to preload: ' + err.message);
    });
}

window.ShowInterstitialAD = function() {
    preloadedInterstitial.showAsync().then(function() {
        myGameInstance.SendMessage('FBInstant', 'InterstitialADShown');
        console.log('Interstitial ad finished successfully');
    }).catch(function(e) {
        myGameInstance.SendMessage('FBInstant', 'InterstitialADNotShown');
        console.error(e.message);
    });
}
window.TestFunction=function(){
    console.log("ENTERING JAVASCRIPT");
    myGameInstance.SendMessage('FBInstant', 'TestCallBack');
}