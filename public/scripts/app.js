
//function start
$(function() {
  var data = [
  {
    "user": {
      "name": "Newton",
      "avatars": {
        "small":   "https://vanillicon.com/788e533873e80d2002fa14e1412b4188_50.png",
        "regular": "https://vanillicon.com/788e533873e80d2002fa14e1412b4188.png",
        "large":   "https://vanillicon.com/788e533873e80d2002fa14e1412b4188_200.png"
      },
      "handle": "@SirIsaac"
    },
    "content": {
      "text": "If I have seen further it is by standing on the shoulders of giants"
    },
    "created_at": 1461116232227
  },
  {
    "user": {
      "name": "Descartes",
      "avatars": {
        "small":   "https://vanillicon.com/7b89b0d8280b93e2ba68841436c0bebc_50.png",
        "regular": "https://vanillicon.com/7b89b0d8280b93e2ba68841436c0bebc.png",
        "large":   "https://vanillicon.com/7b89b0d8280b93e2ba68841436c0bebc_200.png"
      },
      "handle": "@rd" },
      "content": {
        "text": "Je pense , donc je suis"
      },
      "created_at": 1461113959088
    },
    {
      "user": {
        "name": "Johann von Goethe",
        "avatars": {
          "small":   "https://vanillicon.com/d55cf8e18b47d4baaf60c006a0de39e1_50.png",
          "regular": "https://vanillicon.com/d55cf8e18b47d4baaf60c006a0de39e1.png",
          "large":   "https://vanillicon.com/d55cf8e18b47d4baaf60c006a0de39e1_200.png"
        },
        "handle": "@johann49"
      },
      "content": {
        "text": "Es ist nichts schrecklicher als eine tätige Unwissenheit."
      },
      "created_at": 1461113796368
    }
    ];

    function createTweetElement(tweet) {
      const { name, handle } = tweet.user;
      const html = `
      <article class="tweet">
      <header>
      <img src="${tweet.user.avatars.small}" class="img">
      <p class="username">${ name }</p>
      <p class="userfields">${ handle }</p>
      </header>
      <p class="content">${ tweet.content.text }t</p>
      <footer>
      <p>${moment(new Date(tweet.created_at)).startOf('hour').fromNow()}
      <i class="fa fa-heart fa-lag" id="icon"></i>
      <i class="fa fa-flag fa-lag" id="icon"></i>
      <i class="fa fa-bell fa-lag" id="icon"></i>
      </p>
      </footer>
      </article>
      `;
      return html;
    }
    // hide tweet bar and button click function
    $(".new-tweet").hide();
    $("button").click(function(){
      $(".new-tweet").animate({
        height: 'toggle'
      });
      $("textarea").focus()
    });
    //call the create function by using foreach
    function renderTweets(tweets) {
      var $tweetContainer = $('#tweets');
      $tweetContainer.empty();
      tweets.forEach(function(tweet) {
        $tweetContainer.prepend(createTweetElement(tweet));
      });
    }
    //type get
    function loadTweets() {
      $.ajax({
        url: '/tweets',
        type: 'GET',
        dataType: 'json',
        success: function (data) {
          renderTweets(data);
        }
      });
    }
    loadTweets();
    // type post
    function createNewTweet(data) {
      $.ajax({
        url: '/tweets',
        type: 'POST',
        data: data,
        success: loadTweets
      });
    }
    //Letter length
    $('form').submit(function(evt) {
      evt.preventDefault();
      var text = $('textarea').val();
      if (text.length === 0) {
        alert('No empty please :D');
      } else if (text.length > 140) {
        alert('Letter should be less than 140');
      } else {
        var formStuff = $( this ).serialize();
        createNewTweet(formStuff);
        $('textarea').val('');
      }
    });
  });


