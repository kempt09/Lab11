$(function(){
	
	$.get('https://www.reddit.com/r/aww/.json', function(content){

		var count = 0;
		var innerCount = 0;
		var titlesPerRow = 3;
		var numberOfArticle = 12;
		var bootSize = (6/titlesPerRow).toString();

		(function(){
		
			for(var i = 0; i<numberOfArticle ; i++){

				if (count % titlesPerRow ===0 || count === 0) {
					innerCount += 1;
				};

			var title = content.data.children[i].data.title;
			var thumbnail = content.data.children[i].data.thumbnail;
			var url = content.data.children[i].data.url;
			var author = content.data.children[i].data.author;
			var score = content.data.children[i].data.score;
			var comments = content.data.children[i].data.score;

			(function(){

				var tally = $('<p> <strong>Author</strong>: ' + author + '</p>' + '<p> <strong>Score</strong>: ' + score + '</p>' + '<p> <strong>Comments</strong>: ' + comments + '</p>' )
				var articleTitle = $("<a class='damageControl' href='"+ url +"'><h3 class='articleTitle'></h3></a>").text(title);
				var articleImage = $("<img class='damageControl' />").attr('src', thumbnail);

				var divCreation1 = $('<div class="col-xs-'+ bootSize+ ' artBlock"></div>').html([articleTitle,articleImage, tally]);
				// var divCreation2 = $('<div class="col-xs-'+ bootSize+ '"></div>').html([articleTitle, tally]);


				$('#row'+innerCount).append(divCreation1);
				count += 1;


			})();

			}

		})();
	})
});