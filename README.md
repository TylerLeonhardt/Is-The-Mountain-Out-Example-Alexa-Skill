# "Is the mountain out?" Example Alexa Skill

An example Alexa Skill that pulls the latest tweet from a Twitter user and responds with that.

In this case, I used @IsMtRainierOut to tell us if the mountain is out! - If you're not from Seattle and don't know what I mean by Mountain, this is what I'm talking about!:

![The Mountain is Out!](http://media-cache-ec0.pinimg.com/736x/32/0d/cd/320dcdbdcb002671cd13b0641e3cfbe5.jpg)

Mt Rainier in all its glory :)

You can get this Skill [here](https://www.amazon.com/Tyler-Leonhardt-Mt-Rainier/dp/B072KGC5B1/ref=sr_1_1?s=digital-skills&ie=UTF8&qid=1497715426&sr=1-1&keywords=Mt+Rainier)!

## Prereqs

You'll need to [make a Twitter app](https://apps.twitter.com) so you can use their API. If you don't know how to get the 4 keys needed to interact with the API, I recommend follow my workshop [here](http://techknights.org/workshops/nodejs-twitterbot/)

You'll also need an Amazon & AWS account since you're creating an Alexa Skill and this uses an AWS Lambda Function (It's the easiest way to make an Alexa skill).

Take a look at the docs for getting an Alexa Skill [here](https://developer.amazon.com/public/solutions/alexa/alexa-skills-kit/docs/registering-and-managing-alexa-skills-in-the-developer-portal).

Take a look at the docs for getting a Lambda function [here](https://developer.amazon.com/public/solutions/alexa/alexa-skills-kit/docs/developing-an-alexa-skill-as-a-lambda-function).

(optional) I used [Claudia.js](https://www.claudiajs.com) to deploy to the Alexa Skill since it makes it so easy to get going, but you don't have to. Look at the [Getting Started](https://www.claudiajs.com/tutorials/index.html) page if you'd like to give it a go!

## Getting Started

Now that you have your 4 Twitter keys and are able to easily deploy the code, first we need to create a `secrets.json` file to store those keys that is mentioned in the .gitignore.

Create a `secrets.json` file in the root directory with the contents:
```json
{
    "twitter": {
        "consumer_key":         "your",
        "consumer_secret":      "keys",
        "access_token":         "go",
        "access_token_secret":  "here",
    }
}
```

Save that and deploy it.

If you configured your Alexa Skill correctly, you should be able to ask your Echo: 

>You: Alexa, ask ~your skill name~ if the mountain is out.

>Alexa: Yes!

Open an issue if you have problems and I'll help :)