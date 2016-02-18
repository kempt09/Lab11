$(function(){
	$.get('https://www.reddit.com/r/aww/.json', function(content){
		for(var i = 0;i<10;i++){
			var title = content.data.children[i].data.title;
			var thumbnail = content.data.children[i].data.thumbnail;
			var url = content.data.children[i].data.url;


			var articleTitle = $("<a class='damageControl' href='"+ url+"'><h3 class='articleTitle'></h3></a>").text(title);
			// var linkWord = $("<a></a>").attr('href', url).html(articleTitle);
			var articleImage = $("<img class='damageControl' />").attr('src', thumbnail);
			var divCreation = $('<div class="col-xs-12"></div>').html([articleTitle, articleImage]);
			
			$('#articles').append(divCreation);

		}
	})
})