window.onload = function() {
    console.log('Beta version of skip bot is loaded');
    const targetNode = document.getElementById('movie_player');

// Options for the observer (which mutations to observe)
const config = { attributes: true, childList: true, subtree: true };

// Callback function to execute when mutations are observed
const callback = function(mutationsList, observer) {
    // Use traditional 'for loops' for IE 11
    for(let mutation of mutationsList) {
        if (mutation.type === 'childList') {
            // console.log('A child node has been added or removed.');
        }
        else if (mutation.type === 'attributes') {
            // console.log('The ' + mutation.attributeName + ' attribute was modified.');
        }
    }
    try {
        const el = document.getElementsByClassName('ytp-ad-skip-button')[0];
        if (el) {
            el.click(); 
            console.log('Successfully skip ad')
        }
        
    } catch (error) {
        // console.log('did not find youtube ad button');
    }
    
};

// Create an observer instance linked to the callback function
const observer = new MutationObserver(callback);

// Start observing the target node for configured mutations
observer.observe(targetNode, config);
}