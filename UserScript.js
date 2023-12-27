twitch-pointclaim.js text/javascript

const claimButton = '[data-test-selector="DropsCampaignInProgressRewardPresentation-claim-button"]';
var onMutate = function(mutationsList) {
	mutationsList.forEach(mutation => {
		if(document.querySelector(claimButton)) document.querySelector(claimButton).click();
	})
}
var observer = new MutationObserver(onMutate);
observer.observe(document.body, {childList: true, subtree: true});

setInterval(function() {
                  window.location.reload();
                }, 15*60000);