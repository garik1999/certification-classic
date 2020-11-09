import json from '../data/goods.json';

export const filter = () => {
	formParam();
	$('.form-param').on('change', function () {
		formParam();
	});

	function formParam() {

		renderCard(6);


	  const FILTER = $('#filter');

	  const filterData = new FormData(document.getElementById('filter'));


	  const data_filter = {
			params: {
				brand: filterData.getAll('brand').length ? filterData.getAll('brand') : [],
				manufacturer: filterData.get('marka'),
				model: filterData.get('filter-model'),
				year: parseInt(filterData.get('year')),
				price: [
					parseInt(filterData.get('price-from')),
					parseInt(filterData.get('price-to'))
				]
			},
			pagination: {
				sort: filterData.get('sort'),
				perPage: parseInt(filterData.get('per_page'))
			}
		};

		console.log(data_filter);

	  let Encoded_params = $.param( data_filter.params, true );
	  let Encoded_pagination = $.param( data_filter.pagination, true );
	  let url = `${decodeURI(Encoded_params)}&${decodeURI(Encoded_pagination)}`;
	  history.pushState({}, null, url);


		function renderCard(count, obj) {

	    let container = $('#cards');
	    $(container).empty();
	    let count_temp = 0;
	    for (let key in json){

	      if(count_temp < count) {
	        let clone = card_temp.content.cloneNode(true);

	        $(clone).attr('data-card', json[key].["id"]);
	        $(clone).find('.card__brand').text(json[key].["brand"].["name"]);
	        $(clone).find('.card_img').attr('src', json[key].["image"].["sizes"].["card-preview"]);
	        $(clone).find('.card__manufacturer').text(json[key].["manufacturer"].["name"]);
	        $(clone).find('.card__year').text(Math.floor(Math.random() * (2021 - 1973 + 1) ) + 1973);
	        $(clone).find('.card__model').text(json[key].["model"].["name"]);
	        $(clone).find('.card__price').text(json[key].["price"].["currency"].["symbol"]+json[key].["price"].["value"]);

	        container.append(clone);
	        count_temp++;
	      }
	    }
	  }

		$('#pagination').find('a.page').on('click', function() {
		  $(this).parent().find('a').removeClass('active').attr('href','#');
		  $(this).addClass('active').removeAttr('href');
		});
	}
};
