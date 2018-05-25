import { OAuthProvider, IOAuthOptions } from "../provider";

/*
 * Configuration options for using Salesforce oauth
 * @deprecated
 */
export interface ISalesForceOptions extends IOAuthOptions {
    sandbox?: boolean;
    state?: string; 
}

export class Salesforce extends OAuthProvider {

    options: ISalesForceOptions;
    protected sandboxAuthUrl: string = 'https://test.salesforce.com/services/oauth2/authorize';
    protected productionAuthUrl: string = 'https://login.salesforce.com/services/oauth2/authorize';
    protected authUrl: string = '';
    protected APP_SCOPE_DELIMITER = ' ';
    protected defaults: Object = {
      responseType: 'token'
    };

    constructor(options: ISalesForceOptions = {}) {
        super(options);        
        this.authUrl = options.sandbox ? this.sandboxAuthUrl : this.productionAuthUrl

        
    }

   

}
