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
        authority: `https://login.microsoftonline.com/7fc52728-ab93-4bc2-8448-7ebd2295863c`
    },
    cache: {
        cacheLocation: "sessionStorage",
    },
});

/**
 * Function to initialize MSAL instance.
 */
export async function initializeMsalInstance() {
    if (!msalInstance.getActiveAccount()) {
        await msalInstance.initialize();
    }
}

/**
 * Function to authenticate and obtain user info.
 */
export async function signInAndGetUser() {
    await initializeMsalInstance();
    const authResult = await msalInstance.loginPopup(requestedScopes);
    msalInstance.setActiveAccount(authResult.account);

    // Return the email or preferred username from the account object
    return {
        email: authResult.account.username || authResult.account.idTokenClaims.preferred_username,
        ...authResult.account
    };
}
/**
 * Function to get the active account (if user is already logged in).
 */
export function getActiveAccount() {
    const account = msalInstance.getActiveAccount();
    return account ? account : null;
}
