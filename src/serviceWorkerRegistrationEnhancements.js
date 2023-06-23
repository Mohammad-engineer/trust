export function serviceWorkerRegistrationEnhancements(config, registration) {
    const AUTOMATIC_UPDATE_CHECK_INTERVAL = 24;   // expressed in hours

    // OBJECTIVE 1.) SETUP A CALLBACK FOR THE ACTIVATED EVENT.
    // see: https://developer.mozilla.org/en-US/docs/Web/API/ServiceWorkerGlobalScope/activate_event
    registration.addEventListener('activate', function (event) {
        // waiting for the 'activate' event to complete would be the 
        // same thing as listening for the non-existent 'activated' event  to fire.
        event.waitUntil(() => {
            if (config && config.onActivated) {
                config.onActivated(registration);
            }
        });
    });

    // OBJECTIVE 2.) SETUP PERIODIC UPDATE CHECKS.
    // periodically poll for updates to the service worker
    function checkUpdates(registration) {

        if (registration && registration.update) {
            registration.update();
            setTimeout(function () {  // queue up the next update check
                checkUpdates(registration);
            }, 1000 * 60 * 60 * AUTOMATIC_UPDATE_CHECK_INTERVAL);
        }
    }

    // initiate periodic update checks.
    checkUpdates(registration);

}