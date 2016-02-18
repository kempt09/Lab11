$(function(){
	$.get('https://www.reddit.com/r/aww/.json', function(content){
		var count = 0;
		var innerCount = 0;
		
		
		for(var i = 0; i<10 ; i++){
			if (count % 3 ===0 || count === 0) {
				innerCount += 1;
			}
			var title = content.data.children[i].data.title;
			var thumbnail = content.data.children[i].data.thumbnail;
			var url = content.data.children[i].data.url;


			var articleTitle = $("<a class='damageControl' href='"+ url+"'><h3 class='articleTitle'></h3></a>").text(title);
			var articleImage = $("<img class='damageControl' />").attr('src', thumbnail);
			var divCreation1 = $('<div class="col-xs-2"></div>').html(articleImage);
			var divCreation2 = $('<div class="col-xs-2"></div>').html(articleTitle);
			


			$('#row'+innerCount).append([divCreation1, divCreation2]);
			count += 1;
			console.log(count);
			//console.log(innerCount);

		}
	})
})