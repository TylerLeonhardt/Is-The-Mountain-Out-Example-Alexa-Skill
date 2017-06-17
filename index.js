const alexaSkillKit = require('alexa-skill-kit');
const AlexaMessageBuilder = require('alexa-message-builder');
const Twit = require('twit');

const secrets = require('./secrets.json');

var T = new Twit({
  consumer_key:         secrets.twtter.consumer_key,
  consumer_secret:      secrets.twtter.consumer_secret,
  access_token:         secrets.twtter.access_token,
  access_token_secret:  secrets.twtter.access_token_secret,
})

exports.handler = function(event, context) {
  alexaSkillKit(event, context, parsedMessage => {
    return T.get('statuses/user_timeline', { screen_name: 'IsMtRainierOut', count: 1 })
      .catch(function (err) {
        console.log('caught error', err.stack)
      })
      .then(result => {
        console.log(JSON.stringify(result));
        let text = result.data[0].text;
        let textWithoutUrl = text.split(' https://')[0];
        let mediaUrl = `${result.data[0].entities.media[0].media_url_https.split('.jpg')[0]}.png`;
        let userMediaUrl = result.data[0].user.profile_image_url_https;
        let createdAt = result.data[0].created_at;



        return new AlexaMessageBuilder()
          .addText(textWithoutUrl)
          .addStandardCard(`From ${createdAt.substr(0,10)}`, text, {
            smallImageUrl: mediaUrl,
            largeImageUrl: mediaUrl
          })
          .get()
      });
  })
}