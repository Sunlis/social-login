declare module 'social-login' {
  import {App, Request} from 'express';
  import {Profile} from 'passport';

  export type Socials =
      'facebook'|'twitter'|'instagram'|
      'linkedin'|'github'|'google'|'amazon'|
      'dropbox'|'foursquare'|'imgur'|'meetup'|
      'wordpress'|'tumblr';
  
  export type AuthCallback = (
    req: Request,
    type: Socials,
    uniqueId: string,
    accessToken: string,
    refreshToken: string,
    profile: Profile,
    done: Function
  ) => void;

  export type Options = {
    returnRaw?: boolean;
    app?: App;
    url?: string;
    logout?: {
      url: string,
      after: string,
    },
    onAuth?: AuthCallback,
  };

  export type SocialConfigSettings = {
    clientID?: string,
    clientSecret?: string,
    authParameters?: {
      scope?: string,
    },
  };

  export type SocialConfigUrl = {
    auth: string,
    callback: string,
    success: string,
    fail: string,
  };

  export type SocialConfig = {
    settings: SocialConfigSettings,
    url: SocialConfigUrl,
  };

  export type SocialsSettingsMap = {
    [key: Socials]: SocialConfig
  };

  export class socialLoginClass {
    constructor(options: Options);
    use(settings: SocialsSettingsMap);
  }
  export = socialLoginClass;
};
