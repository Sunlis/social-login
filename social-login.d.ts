declare module 'social-login' {
  import {Application, Request} from 'express';
  import {Profile} from 'passport';

  type Socials =
      'facebook'|'twitter'|'instagram'|
      'linkedin'|'github'|'google'|'amazon'|
      'dropbox'|'foursquare'|'imgur'|'meetup'|
      'wordpress'|'tumblr';
  
  type AuthCallback = (
    req: Request,
    type: Socials,
    uniqueId: string,
    accessToken: string,
    refreshToken: string,
    profile: Profile,
    done: Function
  ) => void;

  type Options = {
    returnRaw?: boolean;
    app?: Application;
    url?: string;
    logout?: {
      url: string,
      after: string,
    },
    onAuth?: AuthCallback,
  };

  type SocialConfigSettings = {
    clientID?: string,
    clientSecret?: string,
    authParameters?: {
      scope?: string,
    },
  };

  type SocialConfigUrl = {
    auth: string,
    callback: string,
    success: string,
    fail: string,
  };

  type SocialConfig = {
    settings: SocialConfigSettings,
    url: SocialConfigUrl,
  };

  type SocialsSettingsMap = {
    [key in Socials]?: SocialConfig
  };

  class SocialLogin {
    use(settings: SocialsSettingsMap);
  }

  function socialLoginClass(options: Options): SocialLogin;
  
  export default socialLoginClass;
}
