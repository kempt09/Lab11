$(function(){

		'use strict';

	var i,
		numberOfArticles = 12,
		n = 0;

	function getStuff() {

		$.get('https://www.reddit.com/r/aww.json', function (content) {

			function count() {

				for (i = n ; i < numberOfArticles; i++) {

					var title = content.data.children[i].data.title;
					var thumbnail = content.data.children[i].data.thumbnail;
					var url = content.data.children[i].data.url;
					var author = content.data.children[i].data.author;
					var score = content.data.children[i].data.score;
					var comments = content.data.children[i].data.score;

					var tally = $('<p> <strong>Author</strong>: ' + author + '</p>' + '<p> <strong>Score</strong>: ' + score + '</p>' + '<p> <strong>Comments</strong>: ' + comments + '</p>');
					var articleTitle = $("<a class='damageControl' href='" + url + "'><h3 class='articleTitle'></h3></a>").text(title);
					var articleImage = $("<img class='damageControl' />").attr('src', thumbnail);
					var divCreation1 = $('<div class="col-xs-12 col-md-2"></div>').html(articleImage);
					var divCreation2 = $('<div class="col-xs-12 col-md-2"></div>').html([articleTitle, tally]);

					if (i % 4 === 0) {

						$('#feed').append('<div class="row"></div>');

					} else {

						$('#feed:last-child').append([divCreation1, divCreation2]);

					}

				}
			}

			count();

		});

	}

	$('#refresh').on('click', function(){
		numberOfArticles = numberOfArticles + 12;
		i = i + 12;
		n = n + 12;
		getStuff();
	});

	getStuff();

});






