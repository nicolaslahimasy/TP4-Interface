import * as msal from "@azure/msal-browser";

/**
 * List the requested scopes (aka. the requested permissions)
 */
const requestedScopes = {
    scopes: ["User.read"]
};


const msalInstance = new msal.PublicClientApplication({
    auth: {
        clientId: "e8137439-4d1d-462d-a85f-f81cfea8f0d8",
        authority: `https://login.microsoftonline.com/413600cf-bd4e-4c7c-8a61-69e73cddf731`
    },
    cache: {
        cacheLocation: "sessionStorage",
    },
});

/**
 * Fonction pour initialiser MSAL avant d'utiliser d'autres méthodes.
 */
export async function initializeMsalInstance() {
    // Added function
    if (!msalInstance.getActiveAccount()) {
        await msalInstance.initialize();
    }
}

/**
 * Fonction pour authentifier et obtenir les informations de l'utilisateur
 */
export async function signInAndGetUser() {
    await initializeMsalInstance(); // We're adding this line to initialize the msalInstance

    const authResult = await msalInstance.loginPopup(requestedScopes)
    msalInstance.setActiveAccount(authResult.account)
    return authResult.account
}