import { OktaAuth } from "@okta/okta-auth-js";

const config = {
  issuer: "https://dev-71520271.okta.com/oauth2/default",
  clientId: "0oa2v869oehOdnHzK5d7",
  redirectUri: `${window.location.origin}/login/callback`,
  scopes: ["openid", "profile", "email"],
  pkce: true
};

const oktaAuth = new OktaAuth(config);

async function isInGroup(group) {
  const user = await oktaAuth.getUser();
  return !!user && user.groups.includes(group);
}

export default {
  oktaAuth,
  isInGroup
};
