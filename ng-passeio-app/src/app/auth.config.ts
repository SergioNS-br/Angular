import { AuthConfig } from "angular-oauth2-oidc";

export const autenticacao: AuthConfig = {
    issuer: 'https://accounts.google.com',
    redirectUri: window.location.origin,
    clientId: '650352823996-60fknjpoko851f9eomt1rbeo68mt9rde.apps.googleusercontent.com',
    scope: 'openid profile email',
    strictDiscoveryDocumentValidation:false
}