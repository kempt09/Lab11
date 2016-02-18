$(function(){
	$.get('https://www.reddit.com/r/aww/.json', function(content){
		var count = 0;
		var innerCount = 0;
		var titlesPerRow = 3;
		var numberOfArticle = 12;
		var bootSize = (6/titlesPerRow).toString();
		
		
<<<<<<< HEAD
		for(var i = 0; i<12 ; i++){

			if (count % 3 ===0 || count === 0) {
=======

		for(var i = 0; i<numberOfArticle ; i++){
			if (count % titlesPerRow ===0 || count === 0) {
>>>>>>> a2d5dadfacae9d9e91d06dd0d6cdc8a84837b4d6
				innerCount += 1;
			};


			var title = content.data.children[i].data.title;
			var thumbnail = content.data.children[i].data.thumbnail;
			var url = content.data.children[i].data.url;
			var author = content.data.children[i].data.author;
			var score = content.data.children[i].data.score;
			var comments = content.data.children[i].data.score;



			var articleTitle = $("<a class='damageControl' href='"+ url +"'><h3 class='articleTitle'></h3></a>").text(title);
			var articleImage = $("<img class='damageControl' />").attr('src', thumbnail);
<<<<<<< HEAD
			var divCreation1 = $('<div class="col-xs-2"></div>').html(articleImage);
			var divCreation2 = $('<div class="col-xs-2"></div>').html(articleTitle);
=======
			var divCreation1 = $('<div class="col-xs-'+ bootSize+ '"></div>').html(articleImage);
			var divCreation2 = $('<div class="col-xs-'+ bootSize+ '"></div>').html(articleTitle);
>>>>>>> a2d5dadfacae9d9e91d06dd0d6cdc8a84837b4d6
			


			$('#row'+innerCount).append([divCreation1, divCreation2]);
			count += 1;
			console.log(articleTitle);

		}
	})
});