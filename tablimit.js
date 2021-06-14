//let tabs = browser.tabs.query({currentWindow: true});


function limit(tab) {
        if (tab.index > 5) {
                browser.tabs.remove(tab.id);
        }
        //console.log(tab.index);

}

//fires function and passes in tab object whenever new tab is created
browser.tabs.onCreated.addListener(limit);




