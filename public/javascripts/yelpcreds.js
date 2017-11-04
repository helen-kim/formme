function yelpcreds() {
    var creds = {
        //
        // Update with your auth tokens.
        //
        consumerKey : "S3yH_0hNDtkO4SYOZiFROA",
        consumerSecret : "NXQro3vSpGwgaMuL3N7OeUVi9xc",
        accessToken : "5QfCEAXQD-CqfMMv_hUg2VJbObcZV91z",
        // This example is a proof of concept, for how to use the Yelp v2 API with javascript.
        // You wouldn't actually want to expose your access token secret like this in a real application.
        accessTokenSecret : "BAsY9N0jdeaL6QVPWcAqiBVP4FU",
        serviceProvider : {
            signatureMethod : "HMAC-SHA1"
        }
    };

    return creds;
}